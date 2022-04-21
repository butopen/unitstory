import {UrlTokenizer} from "./url-tokenizer";
import natural from 'natural'
import fs from "fs";

jest.setTimeout(300 * 1000)
test('lr classifier model saver test', async () => {

    const dataset1: { url: string, label: string }[] = require('../../dataset/datasetonlinestore.json')
    const dataset2: { url: string, label: string }[] = require('../../dataset/datasetmonclick.json')
    const dataset3: { url: string, label: string }[] = require('../../dataset/dataseteuronics.json')
    const dataset = dataset1.concat(dataset2).concat(dataset3)

    let newDataset: { url: string, label: string }[] = []
    const tokenizer = new UrlTokenizer()
    dataset.forEach(item => {
        let url = tokenizer.tokenize(item.url)
        console.log(url)
        newDataset.push({url: `${url}`, label: item.label})
    })

    const trainingSet =
        newDataset.slice(0, 400)
            .concat(newDataset.slice(500, 900))
            .concat(newDataset.slice(1000, 1400))
            .concat(newDataset.slice(1500, 1900))
            .concat(newDataset.slice(2000, 2400))
            .concat(newDataset.slice(2500, 2900))
    console.log('Number of product label: ', trainingSet.filter((element) => element.label === 'product').length)
    console.log('Number of category label: ', trainingSet.filter((element) => element.label === 'category').length)
    const testSet = newDataset.filter((element) => !(new Set(trainingSet)).has(element))

    // Train classifier
    // const porterStemmerIt = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_it');
    const classifier = new natural.LogisticRegressionClassifier();
    trainingSet.forEach(item => {
        classifier.addDocument(item.url, item.label)
    })

    classifier.train()

    // Performance evaluation on training set

    let trueLabelTrain: string[] = []
    trainingSet.forEach(item => trueLabelTrain.push(item.label))

    let predictedLabelTrain: string[] = []
    trainingSet.forEach(item => {
        let result = classifier.classify(item.url)
        predictedLabelTrain.push(result)
    })

    let matchingValuesTrain = 0;

    for (let i = 0; i <= trainingSet.length - 1; i++) {
        if (trueLabelTrain[i] === predictedLabelTrain[i]) {
            matchingValuesTrain++
        }
    }
    const accuracyTrain = matchingValuesTrain / trainingSet.length
    const trueProductTrain = trueLabelTrain.filter((element) => element === 'product')
    const predictedProductTrain = predictedLabelTrain.filter((element) => element === 'product')
    const numberOfTrueProductTrain = trueProductTrain.length
    const numberOfPredictedProductTrain = predictedProductTrain.length
    let truePositiveTrain = 0
    for (let i = 0; i <= trainingSet.length - 1; i++) {
        if (trueLabelTrain[i] === 'product' && predictedLabelTrain[i] === 'product') {
            truePositiveTrain++
        }
    }

    const precisionTrain = truePositiveTrain / numberOfPredictedProductTrain
    const recallTrain = truePositiveTrain / numberOfTrueProductTrain
    const fscoreTrain = (2 * precisionTrain * recallTrain) / (precisionTrain + recallTrain)

    console.log('Accuracy Training Set: ', accuracyTrain)
    console.log('Precision Training Set: ', precisionTrain)
    console.log('Recall Training Set: ', recallTrain)
    console.log('F-score Training Set: ', fscoreTrain)

    // Performance evaluation on test set

    let trueLabelTest: string[] = []
    testSet.forEach(item => trueLabelTest.push(item.label))

    let predictedLabelTest: string[] = []
    testSet.forEach(item => {
        let result = classifier.classify(item.url)
        predictedLabelTest.push(result)
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

    classifier.save('./saved-model/lr-classifier-v4.json', function (err, classifier) {
    });
    console.log('model saved')


})