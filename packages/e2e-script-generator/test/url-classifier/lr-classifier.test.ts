import {UrlTokenizer} from "./url-tokenizer";
import natural from 'natural'
import fs from "fs";
import GetSitemapLinks from "get-sitemap-links";
import {gunzip} from "zlib";

jest.setTimeout(300 * 1000)
test('classifier test', async () => {
    const tokenizer = new UrlTokenizer()
    const rawLogisticRegression = require('../../saved-model/lr-classifier-v4.json')
    const rawBayes = require('../../saved-model/nb-classifier-v2.json')
    const porterStemmerIt = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_it');
    const logisticRegressionClassifier = natural.LogisticRegressionClassifier.restore(rawLogisticRegression);
    const bayesClassifier = natural.BayesClassifier.restore(rawBayes);


    // Performance evaluation on training Website but new links
    /*
        const datasetOns: { url: string, label: string }[] = require('../../dataset/newdatasetonlinestore.json')
        const datasetMoc: { url: string, label: string }[] = require('../../dataset/newdatasetmonclick.json')
        const dataset: { url: string, label: string }[] = datasetOns.concat(datasetMoc)

        let testSet = dataset

        let trueLabelTest: string[] = []
        testSet.forEach(item => trueLabelTest.push(item.label))
        let predictedLabelTest: string[] = []
        testSet.forEach(item => {
            let url = tokenizer.tokenize(item.url)
              let results = logisticRegressionClassifier.getClassifications(url)
              let output = ''
              let max = 0
              for (let res of results) {
                  if (res.value > max) {
                      max = res.value
                      output = res.label
                  }
              }
              if (max >= 0.85) {
                  predictedLabelTest.push(output)
              } else {
                  predictedLabelTest.push('idk')
              }
            predictedLabelTest.push(logisticRegressionClassifier.classify(url))
        })

        let matchingValuesTest = 0
        for (let i = 0; i <= testSet.length - 1; i++) {
            if (trueLabelTest[i] === predictedLabelTest[i]) {
                matchingValuesTest++
            }
        }
        const accuracyTest = matchingValuesTest / testSet.length
        const trueProduct = trueLabelTest.filter((element) => element === 'product')
        const predictedProduct = predictedLabelTest.filter((element) => element === 'product')
        const numberOfTrueProduct = trueProduct.length
        const numberOfPredictedProduct = predictedProduct.length
        let truePositive = 0
        for (let i = 0; i <= testSet.length - 1; i++) {
            if (trueLabelTest[i] === 'product' && predictedLabelTest[i] === 'product') {
                truePositive++
            }
        }

        const precision = truePositive / numberOfPredictedProduct
        const recall = truePositive / numberOfTrueProduct
        const fscore = (2 * precision * recall) / (precision + recall)
        console.log('Accuracy Test Set: ', accuracyTest)
        console.log('Precision Test Set: ', precision)
        console.log('Recall Test Set: ', recall)
        console.log('F-score Test Set: ', fscore)

    */
    //Performance evaluation on a new Website: Mediaworld


    const dataset: { url: string, label: string }[] = require('../../dataset/datasetmediaworld.json')
    let testSet = dataset

    let trueLabelTest: string[] = []
    testSet.forEach(item => trueLabelTest.push(item.label))
    let predictedLabelTest: string[] = []
    testSet.forEach(item => {
        let url = tokenizer.tokenize(item.url)
        /*  let results = logisticRegressionClassifier.getClassifications(url)
           let output = ''
           let max = 0
           for (let res of results) {
               if (res.value > max) {
                   max = res.value
                   output = res.label
               }
           }
           if (max >= 0.85) {
               predictedLabelTest.push(output)
           } else {
               predictedLabelTest.push('idk')
           }*/

        predictedLabelTest.push(logisticRegressionClassifier.classify(url))
    })

    let matchingValuesTest = 0
    for (let i = 0; i <= testSet.length - 1; i++) {
        if (trueLabelTest[i] === predictedLabelTest[i]) {
            matchingValuesTest++
        }
    }
    const accuracyTest = matchingValuesTest / testSet.length
    const trueProduct = trueLabelTest.filter((element) => element === 'product')
    const predictedProduct = predictedLabelTest.filter((element) => element === 'product')
    const numberOfTrueProduct = trueProduct.length
    const numberOfPredictedProduct = predictedProduct.length
    let truePositive = 0
    for (let i = 0; i <= testSet.length - 1; i++) {
        if (trueLabelTest[i] === 'product' && predictedLabelTest[i] === 'product') {
            truePositive++
        }
    }

    const precision = truePositive / numberOfPredictedProduct
    const recall = truePositive / numberOfTrueProduct
    const fscore = (2 * precision * recall) / (precision + recall)
    console.log('Accuracy Test Set: ', accuracyTest)
    console.log('Precision Test Set: ', precision)
    console.log('Recall Test Set: ', recall)
    console.log('F-score Test Set: ', fscore)

})