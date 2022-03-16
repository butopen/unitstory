const { chromium } = require('playwright')
(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 400 })
    const context = await browser.newContext()
    await context.addCookies([{name: 'user', value: '29f23fdb-f2ea-4bb0-8860-7b98d7917d4f', url: 'https://www.demoblaze.com/index.html'}, {name: 'tokenp_', value: 'Y2lhbzE2NDc1MTA=', url: 'https://www.demoblaze.com/index.html'}])
    const page = await context.newPage()
    await page.goto('https://www.demoblaze.com/index.html');
    await page.mouse.move(737,148);
    await page.mouse.move(816,243);
    await page.mouse.move(1093,270);
    await page.mouse.move(1034,73);
    await page.mouse.move(1008,56);
    await page.mouse.move(1005,56);
    await page.click('a#logout2.nav-link[href="#"][style="display: block;"][onclick="logOut()"]');
    await browser.close()
}
)
