import {chromium} from "playwright"
import fs from "fs"

declare global {
    interface Window {
        blSerializer: any
        blDeserializer: any
    }
}

jest.setTimeout(3000 * 100)
test("deserializer monclick", async () => {

    const deserializerScript = fs.readFileSync("./scripts/index.deserializer.js", "utf8")
    const screenshot = JSON.parse(fs.readFileSync('./screenshots/monclick.json', {encoding: 'utf8'}))

    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
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

    await browser.close()

})