import {chromium} from "playwright"
import fs from "fs"

declare global {
    interface Window {
        blSerializer:any
        blDeserializer:any
    }
}

jest.setTimeout(3000 * 100)
test("dom serializer", async () => {

    const serializerScript = fs.readFileSync("./scripts/index.serializer.js", "utf8")
    const deserializerScript = fs.readFileSync("./scripts/index.deserializer.js", "utf8")

    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.demoblaze.com/', {waitUntil: "load"});

    //Serialize
    await page.evaluate((serializerScript)=>{
        const s = document.createElement("script")
        s.textContent = serializerScript
        document.head.appendChild(s)
    }, serializerScript)
    
    await page.waitForTimeout(5000) //Loading

    const domJson = await page.evaluate(()=>{
        return new window.blSerializer.ElementSerializer().serialize(document)
    })

    //fs.writeFileSync('./demoblaze.json', JSON.stringify(domJson),{encoding: 'utf-8'})

    //console.log("domJson: ",domJson)

    //Deserialize in a blank page
    await page.goto('about:blank')

    await page.evaluate((deserializerScript)=>{
        const s = document.createElement("script")
        s.textContent = deserializerScript
        document.head.appendChild(s)
    }, deserializerScript)

    await page.evaluate((domJson)=>{
        const iframe = document.createElement("iframe")
        iframe.style.width = "100%"
        iframe.style.height = "100vh"
        document.body.appendChild(iframe)
        console.log(iframe.contentDocument)
        new window.blDeserializer.NodeDeserializer().deserialize(domJson, iframe.contentDocument)
        new window.blDeserializer.LazyImagesRefresherApi().refreshLazyImages(iframe, {skipVisibleAreaCheck: true})
    }, domJson)

    await browser.close()
})
