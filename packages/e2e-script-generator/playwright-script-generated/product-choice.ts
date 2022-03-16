export const {chromium} = require('playwright')
(async () => {
        const browser = await chromium.launch({headless: false, slowMo: 400})
        const context = await browser.newContext()
        await context.addCookies([{
            name: 'user',
            value: '29f23fdb-f2ea-4bb0-8860-7b98d7917d4f',
            url: 'https://www.demoblaze.com/index.html'
        }])
        const page = await context.newPage()
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
    }
)
