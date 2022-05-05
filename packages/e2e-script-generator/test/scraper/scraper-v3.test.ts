import {SessionGenerator} from "../../src/session-generator/session-generator";
import {AfterResponseEventType} from "../../src/significant-events/after-response";
import {BBAction, BBGotoAction} from "../../src/browserbot-actions-model/browserbot-actions.model";
import natural from 'natural'
import GetSitemapLinks from "get-sitemap-links";
import {UrlTokenizer} from "../url-classifier/url-tokenizer";
import fetch from 'node-fetch'
import fs from "fs";

jest.setTimeout(10800000)
test('e2e test', async () => {

    // 1: Get sitemap from domain

    /*
    const robotsParser = require('robots-txt-parser');
    const robots = robotsParser(
        {
            userAgent: 'Googlebot',
            allowOnNeutral: false
        },
    );
    await robots.useRobotsFor('https://www.onlinestore.it/')
    const sitemaps = await robots.useRobotsFor('https://www.onlinestore.it/').then(() => robots.getSitemapsSync())
    const sitemap = sitemaps[0]
    */

    // 2: Get urls from sitemap
    /*
    let urls = await GetSitemapLinks(sitemap)
     */

    // 3: Get urls (products and non products) and classify them

    const categoryUrls = require('../../dataset/datasetmonclick.json').slice(0, 100)
    const productUrls = require('../../dataset/datasetmonclick.json').slice(600, 700)
    const urlsToClassify = categoryUrls.concat(productUrls)
    urlsToClassify.sort(() => 0.5 - Math.random())


    let predictedProductUrls: string[] = []
    const tokenizer = new UrlTokenizer()
    const rawLogisticRegression = require('../../saved-model/lr-classifier-v3.json')
    const porterStemmerIt = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_it');
    const logisticRegressionClassifier = natural.LogisticRegressionClassifier.restore(rawLogisticRegression, porterStemmerIt);

    urlsToClassify.forEach((e) => {
        let prediction = logisticRegressionClassifier.classify(tokenizer.tokenize(e.url))
        if (prediction === 'product') {
            predictedProductUrls.push(e.url)
        }
    })


    // 4: Session Generalizer
    const eventsOfRegisteredSession = require('../use-cases/product-choice-online-store.json')
    for (let e of eventsOfRegisteredSession) {
        if (e.name === 'after-response') {
            let event = e as AfterResponseEventType
            e.timestamp = event.request.timestamp
        }

    }

    eventsOfRegisteredSession.sort((e1, e2) => e1.timestamp - e2.timestamp);
    const session = new SessionGenerator()
    session.createSession(eventsOfRegisteredSession)
    let actionsListRegisteredSession: BBAction[] = session.toActionsList()
    const generalizedSession = actionsListRegisteredSession.filter((e) => e.action !== 'goto')


    // 5: Call the gfc to scrape

    const productsScraped: any = []
    for (let productToScrape of predictedProductUrls) {
        try {
            console.log(productToScrape)
            let action: BBGotoAction = {action: 'goto', url: `${productToScrape}`}
            generalizedSession.push(action)
            let body: { actions: BBAction[] } = {actions: generalizedSession}
            let urlGcf = 'https://us-central1-browserbot.cloudfunctions.net/bbscrape'
            let response = await fetch(urlGcf, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            let productScraped = await response.json()
            productsScraped.push(productScraped)
            console.log(productScraped)
            generalizedSession.pop()
        } catch (e) {
            console.log(e)
        }
    }
    for (let product of productsScraped) {
        fs.appendFileSync('./scraped-products/scrapedProducts.json', JSON.stringify(product) + '\n')
    }

})