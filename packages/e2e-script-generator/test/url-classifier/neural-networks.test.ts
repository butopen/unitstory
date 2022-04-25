import {UrlTokenizer} from "./url-tokenizer";
import fs from "fs";

jest.setTimeout(300 * 1000)
test('neural networks test', async () => {

    const brain = require('brain.js');
    const tokenizer = new UrlTokenizer()

    const dataset1: { url: string, label: string }[] = require('../../dataset/datasetonlinestore.json')
    const dataset2: { url: string, label: string }[] = require('../../dataset/datasetmonclick.json')
    const dataset3: { url: string, label: string }[] = require('../../dataset/dataseteuronics.json')
    const dataset = dataset1.concat(dataset2).concat(dataset3)

    let newDataset: { url: string, label: string }[] = []
    dataset.forEach(item => {
        let url = tokenizer.tokenize(item.url)
        newDataset.push({url: `${url}`, label: item.label})
    })

    const trainingSet =
        newDataset.slice(0, 200)
            .concat(newDataset.slice(500, 700))
            .concat(newDataset.slice(1000, 1200))
            .concat(newDataset.slice(1500, 1700))
            .concat(newDataset.slice(2000, 2200))
            .concat(newDataset.slice(2500, 2700))

    const trainingData: { input: string, output: string }[] = []

    trainingSet.forEach((item) => {
        trainingData.push({input: item.url, output: item.label})
    })


})