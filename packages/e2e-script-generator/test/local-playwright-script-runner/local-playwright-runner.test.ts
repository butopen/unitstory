const {chromium} = require('playwright')

describe(`Local testing of generated playwright scripts`, () => {
    jest.setTimeout(10000);

    test(`Local testing of the first generated playwright script`, async () => {
        const browser = await chromium.launch({headless: false, slowMo: 100});
        const page = await browser.newPage();
        await page.goto('https://www.demoblaze.com/index.html')
        await browser.close()
        expect(true).toBe(true)
    });
})