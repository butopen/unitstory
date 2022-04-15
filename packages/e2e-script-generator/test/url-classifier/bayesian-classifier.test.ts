import natural from 'natural'


jest.setTimeout(300 * 1000)
test('bayesian classifier test', async () => {

    function getRandom(arr, n) {
        let result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function checkIfDuplicateExists(arr) {
        return new Set(arr).size !== arr.length
    }

    //Data preparation

    const dataset: { url: string, label: string }[] = require('../../dataset/dataset.json')
    const newDataset: { url: string, label: string }[] = []
    dataset.forEach(item => {
        item.url = item.url.replaceAll('https://www.', "")
        item.url = item.url.replace(/[0-9]/g, '')
        item.url = item.url.replaceAll('.', " ")
        item.url = item.url.replaceAll('/', " ")
        item.url = item.url.replaceAll('-', " ")
        item.url = item.url.replaceAll('  ', " ")
        newDataset.push({url: `${item.url}`, label: item.label})
    })
    const datasetSize = newDataset.length
    shuffle(newDataset)
    const trainingSet = getRandom(newDataset, 0.8 * datasetSize)
    // console.log(checkIfDuplicateExists(trainingSet))
    const elementToDeleteSet = new Set(trainingSet)
    const testSet = newDataset.filter((element) => !elementToDeleteSet.has(element))
    //console.log(checkIfDuplicateExists(testSet))

    // Train classifier
    const porterStemmerIt = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_it');
    const classifier = new natural.BayesClassifier(porterStemmerIt);
    trainingSet.forEach(item => {
        classifier.addDocument(item.url, item.label)
    })

    classifier.train()

    // Performance evaluation on training set

    let trueLabel: string[] = []
    trainingSet.forEach(item => trueLabel.push(item.label))

    let predictedLabel: string[] = []
    trainingSet.forEach(item => {
        let result = classifier.classify(item.url)
        predictedLabel.push(result)
    })

    let matchingValues = 0;

    for (let i = 0; i <= trainingSet.length - 1; i++) {
        if (trueLabel[i] === predictedLabel[i]) {
            matchingValues++
        }
    }
    const accuracy = matchingValues / trainingSet.length
    console.log(accuracy)

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
    console.log('Precision: ', precision)
    console.log('Recall: ', recall)
    console.log('F-score: ', fscore)

})