import fs from "fs";
import {UrlTokenizer} from "./url-tokenizer";
import natural from 'natural'

jest.setTimeout(300 * 1000)
test('classifier test', async () => {

    //Dataset creation

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

    //Data preparation
    /*
        const dataset: { url: string, label: string }[] = require('../../dataset/dataseteuronics.json')
        console.log(dataset.length)
        let newDataset: { url: string, label: string }[] = []
        const tokenizer = new UrlTokenizer()
        dataset.forEach(item => {
            newDataset.push({url: `${tokenizer.tokenize(item.url)}`, label: item.label})
        })

        newDataset = shuffle(newDataset)

        // k-fold cross-validation
        const performanceTraining: { k: number, accuracy: number, precision: number, recall: number, fscore: number }[] = []
        const performanceTest: { k: number, accuracy: number, precision: number, recall: number, fscore: number }[] = []
        const porterStemmerIt = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_it');
        const k = 10
        const numberOfDataPointsPerBin = newDataset.length / k
        for (let i = 1; i <= k; i++) {

            let testSet = newDataset.slice((i - 1) * numberOfDataPointsPerBin, i * numberOfDataPointsPerBin)
            let trainingSet = newDataset.filter((element) => !(new Set(testSet)).has(element))
            let classifier = new natural.BayesClassifier(porterStemmerIt);
            trainingSet.forEach(item => {
                classifier.addDocument(item.url, item.label)
            })
            classifier.train()

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
            let accuracyTrain = matchingValuesTrain / trainingSet.length
            let trueProductTrain = trueLabelTrain.filter((element) => element === 'product')
            let predictedProductTrain = predictedLabelTrain.filter((element) => element === 'product')
            let numberOfTrueProductTrain = trueProductTrain.length
            let numberOfPredictedProductTrain = predictedProductTrain.length
            let truePositiveTrain = 0
            for (let i = 0; i <= trainingSet.length - 1; i++) {
                if (trueLabelTrain[i] === 'product' && predictedLabelTrain[i] === 'product') {
                    truePositiveTrain++
                }
            }
            let precisionTrain = truePositiveTrain / numberOfPredictedProductTrain
            let recallTrain = truePositiveTrain / numberOfTrueProductTrain
            let fscoreTrain = (2 * precisionTrain * recallTrain) / (precisionTrain + recallTrain)

            performanceTraining.push({
                k: i,
                accuracy: accuracyTrain,
                precision: precisionTrain,
                recall: recallTrain,
                fscore: fscoreTrain
            })

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
            let accuracyTest = matchingValuesTest / testSet.length
            let trueProduct = trueLabelTest.filter((element) => element === 'product')
            let predictedProduct = predictedLabelTest.filter((element) => element === 'product')
            let numberOfTrueProduct = trueProduct.length
            let numberOfPredictedProduct = predictedProduct.length
            let truePositive = 0
            for (let i = 0; i <= testSet.length - 1; i++) {
                if (trueLabelTest[i] === 'product' && predictedLabelTest[i] === 'product') {
                    truePositive++
                }
            }

            let precision = truePositive / numberOfPredictedProduct
            let recall = truePositive / numberOfTrueProduct
            let fscore = (2 * precision * recall) / (precision + recall)

            performanceTest.push({k: i, accuracy: accuracyTest, precision: precision, recall: recall, fscore: fscore})

        }

        // console.log('Train', JSON.stringify(performanceTraining))
        // console.log('Test', JSON.stringify(performanceTest))

        console.log('Average Accuracy: ', average(performanceTest.map((element) => element.accuracy)))
        console.log('Average Precision: ', average(performanceTest.map((element) => element.precision)))
        console.log('Average Recall: ', average(performanceTest.map((element) => element.recall)))
        console.log('Average F-score: ', average(performanceTest.map((element) => element.fscore)))*/
    /*
        const dataset1: { url: string, label: string }[] = require('../../dataset/datasetonlinestore.json')
        const dataset2: { url: string, label: string }[] = require('../../dataset/datasetmonclick.json')
        const dataset3: { url: string, label: string }[] = require('../../dataset/dataseteuronics.json')
        const dataset = dataset1.concat(dataset2).concat(dataset3)

        let newDataset: { url: string, label: string }[] = []
        const tokenizer = new UrlTokenizer()
        dataset.forEach(item => {
            newDataset.push({url: `${tokenizer.tokenize(item.url)}`, label: item.label})
        })

        newDataset = shuffle(newDataset)

        // k-fold cross-validation
        const performanceTraining: { k: number, accuracy: number, precision: number, recall: number, fscore: number }[] = []
        const performanceTest: { k: number, accuracy: number, precision: number, recall: number, fscore: number }[] = []
        const porterStemmerIt = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_it');
        const k = 10
        const numberOfDataPointsPerBin = newDataset.length / k
        for (let i = 1; i <= k; i++) {

            let testSet = newDataset.slice((i - 1) * numberOfDataPointsPerBin, i * numberOfDataPointsPerBin)
            let trainingSet = newDataset.filter((element) => !(new Set(testSet)).has(element))
            let classifier = new natural.BayesClassifier(porterStemmerIt);
            trainingSet.forEach(item => {
                classifier.addDocument(item.url, item.label)
            })
            classifier.train()

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
            let accuracyTrain = matchingValuesTrain / trainingSet.length
            let trueProductTrain = trueLabelTrain.filter((element) => element === 'product')
            let predictedProductTrain = predictedLabelTrain.filter((element) => element === 'product')
            let numberOfTrueProductTrain = trueProductTrain.length
            let numberOfPredictedProductTrain = predictedProductTrain.length
            let truePositiveTrain = 0
            for (let i = 0; i <= trainingSet.length - 1; i++) {
                if (trueLabelTrain[i] === 'product' && predictedLabelTrain[i] === 'product') {
                    truePositiveTrain++
                }
            }
            let precisionTrain = truePositiveTrain / numberOfPredictedProductTrain
            let recallTrain = truePositiveTrain / numberOfTrueProductTrain
            let fscoreTrain = (2 * precisionTrain * recallTrain) / (precisionTrain + recallTrain)

            performanceTraining.push({
                k: i,
                accuracy: accuracyTrain,
                precision: precisionTrain,
                recall: recallTrain,
                fscore: fscoreTrain
            })

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
            let accuracyTest = matchingValuesTest / testSet.length
            let trueProduct = trueLabelTest.filter((element) => element === 'product')
            let predictedProduct = predictedLabelTest.filter((element) => element === 'product')
            let numberOfTrueProduct = trueProduct.length
            let numberOfPredictedProduct = predictedProduct.length
            let truePositive = 0
            for (let i = 0; i <= testSet.length - 1; i++) {
                if (trueLabelTest[i] === 'product' && predictedLabelTest[i] === 'product') {
                    truePositive++
                }
            }

            let precision = truePositive / numberOfPredictedProduct
            let recall = truePositive / numberOfTrueProduct
            let fscore = (2 * precision * recall) / (precision + recall)

            performanceTest.push({k: i, accuracy: accuracyTest, precision: precision, recall: recall, fscore: fscore})

        }

        // console.log('Train', JSON.stringify(performanceTraining))
        // console.log('Test', JSON.stringify(performanceTest))

        console.log('Average Accuracy: ', average(performanceTest.map((element) => element.accuracy)))
        console.log('Average Precision: ', average(performanceTest.map((element) => element.precision)))
        console.log('Average Recall: ', average(performanceTest.map((element) => element.recall)))
        console.log('Average F-score: ', average(performanceTest.map((element) => element.fscore)))
        */

})