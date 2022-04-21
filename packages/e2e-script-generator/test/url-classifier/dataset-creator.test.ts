import fs from "fs";
import {sitemapGetter} from "./sitemap-getter";

jest.setTimeout(300 * 1000)
test('dataset creator test', async () => {

    //Onlinestore

    let links = fs.readFileSync('./urls/onlinestore.txt').toString().split('\n')

    let categoryUrls = links.slice(104087, 104587)
    let categories: { url: string, label: string }[] = []
    for (let categoryUrl of categoryUrls) {
        let record = {url: `${categoryUrl}`, label: `category`}
        categories.push(record)
    }

    let productUrls = links.slice(103086, 103586)
    let products: { url: string, label: string }[] = []
    for (let productUrl of productUrls) {
        let record = {url: `${productUrl}`, label: `product`}
        products.push(record)
    }

    let dataset: { url: string, label: string }[] = categories.concat(products)
    //fs.writeFileSync('./dataset/datasetonlinestore.json', JSON.stringify(dataset))


    let newProducts = links.slice(50, 550)
    products = []
    for (let productUrl of newProducts) {
        let record = {url: `${productUrl}`, label: `product`}
        products.push(record)
    }

    let newCategories = links.slice(104588, 105088)
    categories = []
    for (let categoryUrl of newCategories) {
        let record = {url: `${categoryUrl}`, label: `category`}
        categories.push(record)
    }

    dataset = categories.concat(products)
    fs.writeFileSync('./dataset/newdatasetonlinestore.json', JSON.stringify(dataset))


    //Monclick

    links = fs.readFileSync('./urls/monclick.txt').toString().split('\n')
    categoryUrls = links.slice(74862, 75362)
    categories = []
    for (let categoryUrl of categoryUrls) {
        let record = {url: `${categoryUrl}`, label: `category`}
        categories.push(record)
    }
    productUrls = links.slice(0, 500)
    products = []
    for (let productUrl of productUrls) {
        let record = {url: `${productUrl}`, label: `product`}
        products.push(record)
    }
    dataset = categories.concat(products)
    //fs.writeFileSync('./dataset/datasetmonclick.json', JSON.stringify(dataset))

    newProducts = links.slice(500, 1000)
    products = []
    for (let productUrl of newProducts) {
        let record = {url: `${productUrl}`, label: `product`}
        products.push(record)
    }

    newCategories = links.slice(75363, 75863)
    categories = []
    for (let categoryUrl of newCategories) {
        let record = {url: `${categoryUrl}`, label: `category`}
        categories.push(record)
    }

    dataset = categories.concat(products)
    fs.writeFileSync('./dataset/newdatasetmonclick.json', JSON.stringify(dataset))

    //Euronics

    links = fs.readFileSync('./urls/euronics.txt').toString().split('\n')
    categoryUrls = links.slice(26089, 26496).concat(links.slice(26505, 26516)).concat(links.slice(26519, 26601))
    categories = []
    for (let categoryUrl of categoryUrls) {
        let record = {url: `${categoryUrl}`, label: `category`}
        categories.push(record)
    }
    productUrls = links.slice(0, 500)
    products = []
    for (let productUrl of productUrls) {
        let record = {url: `${productUrl}`, label: `product`}
        products.push(record)
    }
    dataset = categories.concat(products)
    //fs.writeFileSync('./dataset/dataseteuronics.json', JSON.stringify(dataset))

    // Mediaworld

    let mwpLinks = fs.readFileSync('./urls/mediaworld-products.txt').toString().split('\n').slice(0, 500)
    let mwProducts: { url: string, label: string }[] = []
    for (let productLink of mwpLinks) {
        let record = {url: `${productLink}`, label: `product`}
        mwProducts.push(record)
    }

    let mwcLinks = fs.readFileSync('./urls/mediaworld-links.txt').toString().split('\n').slice(6, 506)
    let mwCategories: { url: string, label: string }[] = []
    for (let categoryLink of mwcLinks) {
        let record = {url: `${categoryLink}`, label: `category`}
        mwCategories.push(record)
    }

    dataset = mwCategories.concat(mwProducts)
    //fs.writeFileSync('./dataset/datasetmediaworld.json', JSON.stringify(dataset))

})
