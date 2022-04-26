import {chromium} from "playwright";

declare global {
    interface Coordinates {
        x: number
        y: number
        height: number
        width: number
    }
}


declare global {
    interface Rgb {
        r: number
        g: number
        b: number
    }
}

declare global {
    interface ElementInfo {
        depth: number
        coordinates: Coordinates
        color: Rgb
        fontSize: number
        text: string
        priceInClassName: boolean,
        priceInIdName: boolean
    }
}


jest.setTimeout(3000 * 10000)
test(`Scraper v2 test`, async () => {

    const dataset1: { url: string, label: string }[] = require('../../dataset/datasetonlinestore.json')
    const products = dataset1.filter((el) => el.label === 'product')
    const urls = products.slice(0, 30)

    const browser = await chromium.launch()
    const context = await browser.newContext({
        viewport: {width: 1280, height: 619},
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
    })
    for (let url of urls) {
        let page = await context.newPage()
        await page.goto(
            url.url,
            {
                referer: 'https://www.google.com/',
                waitUntil: 'domcontentloaded'
            }
        )
        let {name, price, truePrice} = await page.evaluate(async () => {
            let name = document.querySelector('head > title')!.textContent!.split('|')[0].trim()
            let nodeList = []

            function myDfs(node, nodeList: ElementInfo[], depth: number) {
                if (node) {
                    let info: ElementInfo = {
                        depth: 0,
                        coordinates: {x: 0, y: 0, height: 0, width: 0},
                        color: {r: 0, g: 0, b: 0},
                        fontSize: 0,
                        text: '',
                        priceInClassName: false,
                        priceInIdName: false
                    }
                    let text: string = node.textContent.trim()
                    let boundingBox = node.getBoundingClientRect()
                    let coordinates: Coordinates = {
                        x: boundingBox.x,
                        y: boundingBox.y,
                        height: boundingBox.height,
                        width: boundingBox.width
                    }
                    if (text.length <= 20 && !(depth === 0) && !(text === '')) {
                        if (node.hasAttribute('id')) {
                            if (node.getAttribute('id').toLowerCase().includes('price')) {
                                info.priceInIdName = true
                            }
                        }
                        if (node.hasAttribute('class')) {
                            if (node.getAttribute('class').toLowerCase().includes('price')) {
                                info.priceInClassName = true
                            }
                        }
                        info.depth = depth
                        info.coordinates.x = coordinates.x
                        info.coordinates.y = coordinates.y
                        info.coordinates.height = coordinates.height
                        info.coordinates.width = coordinates.width
                        let rgb = getComputedStyle(node)['color']
                        let rgbValues = rgb.replace(/[^\d,]/g, '').split(',');
                        info.color.r = parseInt(rgbValues[0])
                        info.color.g = parseInt(rgbValues[1])
                        info.color.b = parseInt(rgbValues[2])
                        info.fontSize = parseInt(getComputedStyle(node)['fontSize'])
                        info.text = text
                        nodeList.push(info);
                    }
                    let children = node.children;
                    for (let i = 0; i < children.length; i++) {
                        myDfs(children[i], nodeList, depth + 1);
                    }
                }
                return nodeList;
            }

            function findPrice(nodeList: ElementInfo[]) {

                let prices = nodeList.filter((element) => element.priceInClassName === true || element.priceInIdName === true)

                if (Array.isArray(prices)) {
                    let sortedPrices: ElementInfo[] = prices.sort((a, b) => {
                        if (a.fontSize === b.fontSize) {
                            return a.depth - b.depth
                        } else {
                            return b.fontSize - a.fontSize
                        }
                    })

                    return sortedPrices[0].text
                } else {

                    return prices['text']
                }
            }

            let domElements = myDfs(document.body, nodeList, 0)
            let price = findPrice(domElements)
            let truePrice = document.querySelector("#add-to-cart-or-refresh > div.product_p_price_container > div > div:nth-child(2) > div > span > span")!.textContent
            return {name, price, truePrice}

        })

        console.log({name, price, truePrice})


    }
    await browser.close()

})