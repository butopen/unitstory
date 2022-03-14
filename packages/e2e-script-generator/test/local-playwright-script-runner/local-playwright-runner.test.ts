import {chromium} from "playwright";


describe(`Local testing of generated playwright scripts`, () => {
    jest.setTimeout(50000);

    test(`Local testing of the first generated playwright script`, async () => {
        const browser = await chromium.launch({headless: false, slowMo: 100});
        const page = await browser.newPage();
        await page.goto('https://www.demoblaze.com/index.html')
        await browser.close()
        expect(true).toBe(true)
    });

    test('Local testing of the product-choice use case', async () => {
        const browser = await chromium.launch({headless: false, slowMo: 400});
        const page = await browser.newPage();
        await page.goto('https://www.demoblaze.com/index.html');
        await page.mouse.move(646, 460);
        await page.mouse.move(652, 412);
        await page.mouse.move(663, 331);
        await page.mouse.move(520, 241);
        await page.mouse.move(566, 268);
        await page.mouse.move(601, 285);
        await page.mouse.move(644, 297);
        await page.mouse.move(670, 304);
        await page.mouse.move(696, 307);
        await page.mouse.move(699, 307);
        await page.mouse.move(702, 307);
        await page.mouse.move(858, 306);
        await page.click('a.hrefch[href="prod.html?idp_=6"]');
        await page.goto('https://www.demoblaze.com/prod.html?idp_=6');
        await browser.close()
    })
})