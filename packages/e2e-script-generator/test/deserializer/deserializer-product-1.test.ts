import {chromium} from "playwright"
import fs from "fs"

declare global {
    interface Window {
        blSerializer: any
        blDeserializer: any
    }
}

jest.setTimeout(3000 * 100)
test("deserializer onlinestore", async () => {

    const deserializerScript = fs.readFileSync("./scripts/index.deserializer.js", "utf8")
    const screenshot = JSON.parse(fs.readFileSync('./screenshots/onlinestore.json', {encoding: 'utf8'}))

    const browser = await chromium.launch({headless: true, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('about:blank')

    await page.evaluate((deserializerScript) => {
        const s = document.createElement("script")
        s.textContent = deserializerScript
        document.head.appendChild(s)
    }, deserializerScript)

    await page.evaluate((screenshot) => {
        const iframe = document.createElement("iframe")
        iframe.style.width = "100%"
        iframe.style.height = "100vh"
        document.body.appendChild(iframe)
        console.log(iframe.contentDocument)
        new window.blDeserializer.NodeDeserializer().deserialize(screenshot, iframe.contentDocument)
        new window.blDeserializer.LazyImagesRefresherApi().refreshLazyImages(iframe, {skipVisibleAreaCheck: true})
    }, screenshot)

    const {name, price, brand} = await page.evaluate(() => {
        const name = document.querySelector("iframe")!.contentWindow!.document.querySelector("#main-product-wrapper > div > h1 > span")!.textContent
        const price = document.querySelector("iframe")!.contentWindow!.document.querySelector("#add-to-cart-or-refresh > div.product_p_price_container > div > div.has-discount > div > span.current-price > span")!.textContent
        const brand = document.querySelector("iframe")!.contentWindow!.document.querySelector("#add-to-cart-or-refresh > div.product-additional-info > div:nth-child(2) > section > dl > dd:nth-child(6) > span > a")!.textContent
        return {name, price, brand}
    })

    console.log({name, price, brand})

    await browser.close()

})