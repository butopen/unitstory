import {UrlTokenizer} from "./url-tokenizer";

jest.setTimeout(300 * 1000)
test('url feature extraction test', async () => {

    const tokenizer = new UrlTokenizer()
    let url = 'https://www.mediaworld.it/product/z-30781800/brondi-amico-smartphone-nero-prmg-grading-rocn-sconto-15-00'
    console.log(tokenizer.tokenize(url))
    let url2 = 'https://www.myurl.it/product//brondiamicosmartphoneneroprmggradingrocnsconto'
    console.log(tokenizer.tokenize(url2))

})