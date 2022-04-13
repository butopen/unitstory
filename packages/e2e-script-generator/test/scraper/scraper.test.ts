import {BrowserContext, chromium} from 'playwright';
import {Generalizer} from "./generalizer";
import fs from "fs";

declare global {
    interface Window {
        blSerializer: any
        blDeserializer: any
    }
}

describe(`Scraper test`, () => {
    jest.setTimeout(300 * 10000);

    let browser;
    let page;
    let context;
    let generalizer = new Generalizer()
    const serializerScript = fs.readFileSync("./scripts/index.serializer.js", "utf8")
    const deserializerScript = fs.readFileSync("./scripts/index.deserializer.js", "utf8")

    async function sessionSerialize(fileName: string) {
        await page.evaluate((serializerScript) => {
            const s = document.createElement("script")
            s.textContent = serializerScript
            document.head.appendChild(s)
        }, serializerScript)

        const domJson = await page.evaluate(() => {
            return new window.blSerializer.ElementSerializer().serialize(document)
        })

        fs.writeFileSync(`./screenshots/${fileName}.json`, JSON.stringify(domJson), {encoding: 'utf-8'})
    }

    async function sessionDeserialize(fileName: string, context: BrowserContext) {

        const screenshot = JSON.parse(fs.readFileSync(`./screenshots/${fileName}.json`, {encoding: 'utf8'}))

        const blankPage = await context.newPage()
        await blankPage.goto('about:blank')

        await blankPage.evaluate((deserializerScript) => {
            const s = document.createElement("script")
            s.textContent = deserializerScript
            document.head.appendChild(s)
        }, deserializerScript)

        await blankPage.evaluate((screenshot) => {
            const iframe = document.createElement("iframe")
            iframe.style.width = "100%"
            iframe.style.height = "100vh"
            document.body.appendChild(iframe)
            console.log(iframe.contentDocument)
            new window.blDeserializer.NodeDeserializer().deserialize(screenshot, iframe.contentDocument)
            new window.blDeserializer.LazyImagesRefresherApi().refreshLazyImages(iframe, {skipVisibleAreaCheck: true})
        }, screenshot)

        const {name, price, brand} = await blankPage.evaluate(() => {
            let name = document.querySelector("iframe")!.contentWindow!.document.querySelector("#main-product-wrapper > div > h1 > span")!.textContent
            let price = document.querySelector("iframe")!.contentWindow!.document.querySelector("#add-to-cart-or-refresh > div.product_p_price_container > div > div:nth-child(2) > div > span > span")!.textContent
            let brand;
            if (document.querySelector("iframe")!.contentWindow!.document.querySelector("#add-to-cart-or-refresh > div.product-additional-info > div:nth-child(2) > section > dl > dd:nth-child(6) > span > a") !== null) {
                brand = document.querySelector("iframe")!.contentWindow!.document.querySelector("#add-to-cart-or-refresh > div.product-additional-info > div:nth-child(2) > section > dl > dd:nth-child(6) > span > a")!.textContent
            } else {
                brand = document.querySelector("iframe")!.contentWindow!.document.querySelector("#add-to-cart-or-refresh > div.product-additional-info > div:nth-child(4) > section > dl > dd:nth-child(6) > span > a")!.textContent
            }
            return {name, price, brand}
        })

        return {name, price, brand}
    }

    beforeAll(async () => {
        browser = await chromium.launch({headless: true, slowMo: 0, devtools: false});
        context = await browser.newContext([{viewport: {width: 1280, height: 619}}]);
        page = await context.newPage({userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"});
        await page.goto('https://www.onlinestore.it/', {waitUntil: 'load'});
    });

    afterAll(async () => {
        await browser.close();
    });

    test(`product1`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/68-frullatori', 'https://www.onlinestore.it/515919-moulinex-lm2c01-blendeo-frullatore-2-velocita-tecnologia-tritaghiaccio-capacita-15-l-tecnologia-di-ventilazione-del-3016667243527.html')
        await sessionSerialize('product1')
        let {name, price, brand} = await sessionDeserialize('product1', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product2`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/92-cucine', 'https://www.onlinestore.it/200663-glem-an965mi6-cucina-piano-cottura-acciaio-inossidabile-gas-a-8054383964802.html')
        await sessionSerialize('product2')
        let {name, price, brand} = await sessionDeserialize('product2', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    })

    test(`product3`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/422-supporti-e-staffe', 'https://www.onlinestore.it/364096-equip-650315-supporto-tv-a-parete-1397-cm-55-nero-4015867198926.html')
        await sessionSerialize('product3')
        let {name, price, brand} = await sessionDeserialize('product3', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product4`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/42-alpinismo-arrampicata', 'https://www.onlinestore.it/13275-beal-ice-line-81-mm-dry-cover-50m-blue-corda-doppia-3700288263001.html')
        await sessionSerialize('product4')
        let {name, price, brand} = await sessionDeserialize('product4', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product5`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/168-audio-car', 'https://www.onlinestore.it/305476-alpine-cde-205dab-ricevitore-multimediale-per-auto-nero-200-w-bluetooth-4958043888481.html')
        await sessionSerialize('product5')
        let {name, price, brand} = await sessionDeserialize('product5', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product6`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/138-lavastoviglie', 'https://www.onlinestore.it/32863-electrolux-eea27200l-lavastoviglie-integrata-totale-autosense-perfectfit-13-coperti-60-cm-a-7332543673001.html')
        await sessionSerialize('product6')
        let {name, price, brand} = await sessionDeserialize('product6', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product7`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/50-smartwatch', 'https://www.onlinestore.it/415924-xiaomi-mi-watch-orologio-sportivo-touch-screen-bluetooth-454-x-454-pixel-blu-6934177723469.html')
        await sessionSerialize('product7')
        let {name, price, brand} = await sessionDeserialize('product7', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product8`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/brand/479-michelin', 'https://www.onlinestore.it/136648-michelin-9485-pulizia-e-accessorio-per-veicoli-spazzola-3221320094853.html')
        await sessionSerialize('product8')
        let {name, price, brand} = await sessionDeserialize('product8', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product9`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/150-piastre-per-capelli', 'https://www.onlinestore.it/11338-remington-s6500-sleek-curl-piastre-per-capelli-stretta-digitale-4008496652822.html')
        await sessionSerialize('product9')
        let {name, price, brand} = await sessionDeserialize('product9', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product10`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/1150-bbq-pellet', 'https://www.onlinestore.it/617679-weber-smokefire-epx4-barbecue-a-pellet-modello-22611504-0077924179570.html')
        await sessionSerialize('product10')
        let {name, price, brand} = await sessionDeserialize('product10', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product11`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/483-viteria', 'https://www.onlinestore.it/178096-cisa-21010-30-0-lucchetto-in-ottone-locking-line-30-mm-8015345341819.html')
        await sessionSerialize('product11')
        let {name, price, brand} = await sessionDeserialize('product11', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product12`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/305-peluches', 'https://www.onlinestore.it/276398-peluche-scimmia-funny-cm25-470573-5050565248688.html')
        await sessionSerialize('product12')
        let {name, price, brand} = await sessionDeserialize('product12', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product13`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/470-forbici-e-cesoie', 'https://www.onlinestore.it/167155-bahco-gs-76-forbici-per-erba-355-mm-7311518010782.html')
        await sessionSerialize('product13')
        let {name, price, brand} = await sessionDeserialize('product13', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product14`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/43-sci-alpinismo', 'https://www.onlinestore.it/1073-ortovox-240-carbon-pfa-sonda-4250091720929.html')
        await sessionSerialize('product14')
        let {name, price, brand} = await sessionDeserialize('product14', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product15`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/brand/273-dyson', 'https://www.onlinestore.it/580401-dyson-v12-slim-absolute-nichel-porpora-senza-sacchetto-5025155065099.html')
        await sessionSerialize('product15')
        let {name, price, brand} = await sessionDeserialize('product15', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product16`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/302-tagliasiepi', 'https://www.onlinestore.it/42692-einhell-gc-ct-18-24-li-p-24-cm-nero-rosso-batteria-4006825626575.html')
        await sessionSerialize('product16')
        let {name, price, brand} = await sessionDeserialize('product16', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product17`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/471-guanti', 'https://www.onlinestore.it/413854-gardena-11501-20-guanti-da-giardino-m-4078500051699.html')
        await sessionSerialize('product17')
        let {name, price, brand} = await sessionDeserialize('product17', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product18`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/163-videosorveglianza', 'https://www.onlinestore.it/187337-hikvision-digital-technology-ds-2cd2455fwd-iw-telecamera-di-sicurezza-ip-interno-cubo-2944-x-1656-pixel-6954273657789.html')
        await sessionSerialize('product18')
        let {name, price, brand} = await sessionDeserialize('product18', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product19`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/86-action-cam', 'https://www.onlinestore.it/22979-ezviz-s1c-grey-action-camera-full-hd-con-display-touch-screen-6970443210448.html')
        await sessionSerialize('product19')
        let {name, price, brand} = await sessionDeserialize('product19', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });

    test(`product20`, async () => {
        await generalizer.generalizeSession(page, 'https://www.onlinestore.it/121-rasoi-elettrici', 'https://www.onlinestore.it/525998-rowenta-tn1603f0-tagliacapelli-nero-argento-3121040067550.html')
        await sessionSerialize('product20')
        let {name, price, brand} = await sessionDeserialize('product20', context)
        console.log({name, price, brand})
        fs.appendFileSync('scraped_list.json', JSON.stringify({name, price, brand}) + ',\n')
    });
})