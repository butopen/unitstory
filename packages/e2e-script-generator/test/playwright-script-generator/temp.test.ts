import {chromium} from "playwright"

jest.setTimeout(3000 * 100)
test("temp test", async () => {
    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext({viewport: {width: 1280, height: 619}})
    const page = await context.newPage()
    await page.waitForTimeout(1)
    await page.goto('https://www.onlinestore.it/468263-xiaomi-mi-11-173-cm-681-doppia-sim-android-100-5g-usb-tipo-c-8-gb-256-gb-4600-mah-blu-6934177734090.html', {waitUntil: 'load'});
    await page.waitForTimeout(3)
    await page.waitForTimeout(1019)
    await page.waitForTimeout(59)
    await page.mouse.move(541, 200);
    await page.waitForTimeout(60);
    await page.mouse.move(546, 200);
    await page.waitForTimeout(115)
    await page.mouse.move(547, 200);
    await page.waitForTimeout(349);
    await page.mouse.move(548, 200);
    await page.waitForTimeout(50);
    await page.mouse.move(554, 200);
    await page.waitForTimeout(51);
    await page.mouse.move(569, 200);
    await page.waitForTimeout(51);
    await page.mouse.move(572, 200);
    await page.waitForTimeout(2181)
    await page.mouse.move(578, 201);
    await page.waitForTimeout(51)
    await page.mouse.move(597, 213);
    await page.waitForTimeout(50)
    await page.mouse.move(605, 217);
    await page.waitForTimeout(58)
    await page.mouse.move(636, 232);
    await page.waitForTimeout(57);
    await page.mouse.move(663, 240);
    await page.waitForTimeout(84);
    await page.mouse.move(666, 243);
    await page.waitForTimeout(53);
    await page.mouse.move(660, 260);
    await page.waitForTimeout(52);
    await page.mouse.move(657, 265);
    await page.waitForTimeout(298)
    await page.mouse.move(622, 312);
    await page.waitForTimeout(54)
    await page.mouse.move(580, 359);
    await page.waitForTimeout(51)
    await page.mouse.move(540, 395);
    await page.waitForTimeout(55)
    await page.mouse.move(450, 454);
    await page.waitForTimeout(52)
    await page.mouse.move(430, 466);
    await page.waitForTimeout(1281);
    await page.mouse.move(439, 452);
    await page.waitForTimeout(50);
    await page.mouse.move(459, 449);
    await page.waitForTimeout(57);
    await page.mouse.move(548, 431);
    await page.waitForTimeout(54);
    await page.mouse.move(684, 409);
    await page.waitForTimeout(57)
    await page.mouse.move(393, 486);
    await page.waitForTimeout(56);
    await page.mouse.move(342, 503);
    await page.waitForTimeout(1001);
    await page.mouse.move(174, 532);
    await page.waitForTimeout(107)
    await page.mouse.move(231, 535);
    await page.waitForTimeout(50)
    await page.mouse.move(201, 541);
    await page.waitForTimeout(52);
    await page.mouse.move(195, 543);
    await page.waitForTimeout(55);
    await page.mouse.move(174, 544);
    await page.waitForTimeout(51);
    await page.mouse.move(155, 545);
    await page.waitForTimeout(213)
    await page.mouse.move(141, 545);
    await page.waitForTimeout(53);
    await page.mouse.move(123, 545);
    await page.waitForTimeout(50);
    await page.mouse.move(116, 547);
    await page.waitForTimeout(59);
    await page.mouse.move(115, 547);
    await page.waitForTimeout(57);
    await page.mouse.move(114, 547);
    await page.waitForTimeout(167);
    await page.mouse.move(114, 548);
    await page.waitForTimeout(71);
    await page.mouse.move(114, 548);
    await page.waitForTimeout(129);
    await page.mouse.move(115, 548);
    await page.waitForTimeout(51);
    await page.mouse.move(129, 545);
    await page.waitForTimeout(378)
    await page.mouse.move(114, 547);
    await page.mouse.down();
    await page.waitForTimeout(68)
    await page.mouse.up();
    await page.waitForTimeout(295)
    await page.mouse.move(269, 499);
    await page.waitForTimeout(58);
    await page.mouse.move(294, 491);
    await page.waitForTimeout(328)
    await page.mouse.move(852, 378);
    await page.waitForTimeout(50);
    await page.mouse.move(927, 353);
    await page.waitForTimeout(100)
    await page.mouse.move(1002, 319);
    await page.waitForTimeout(50)
    await page.mouse.move(1054, 300);
    await page.waitForTimeout(51);
    await page.mouse.move(1082, 284);
    await page.waitForTimeout(103)
    await page.mouse.move(1090, 279);
    await page.waitForTimeout(55)
    await page.mouse.move(1106, 268);
    await page.waitForTimeout(51);
    await page.mouse.move(1132, 254);
    await page.waitForTimeout(105)
    await page.mouse.move(1149, 243);
    await page.waitForTimeout(61)
    await page.mouse.move(1242, 205);
    await page.waitForTimeout(55);
    await page.mouse.move(1247, 203);
    await page.waitForTimeout(109)
    await page.mouse.move(1279, 185);
    await page.waitForTimeout(50);
    await page.mouse.move(1279, 177);
    await page.waitForTimeout(56);
    await page.mouse.move(1279, 172);
    await page.waitForTimeout(51);
    await page.mouse.move(1279, 169);
    await page.waitForTimeout(59);
    await page.mouse.move(1276, 166);
    await page.waitForTimeout(50);
    await page.mouse.move(1274, 165);
    await page.waitForTimeout(463)
    await page.mouse.move(1274, 165);
    await page.mouse.down();
    await page.waitForTimeout(137)
    await page.evaluate(() => window.scroll(0, 1.3333333730697632));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 4));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 16.66666603088379));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 32));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 47.33333206176758));
    await page.waitForTimeout(61)
    await page.evaluate(() => window.scroll(0, 64.66666412353516));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 77.33333587646484));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 88));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 92.66666412353516));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 103.33333587646484));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 110.66666412353516));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 118));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 123.33333587646484));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 133.3333282470703));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 141.3333282470703));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 151.3333282470703));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 164));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 176.6666717529297));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 182));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 194.6666717529297));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 202));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 204.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 217.3333282470703));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 222.6666717529297));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 232.6666717529297));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 240.6666717529297));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 250.6666717529297));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 260.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 266));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 276));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 278.6666564941406));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 291.3333435058594));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 296.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 301.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 309.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 316.6666564941406));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 322));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 326.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 334.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 339.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 350));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 357.3333435058594));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 362.6666564941406));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 370));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 380));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 385.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 388));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 403.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 413.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 418.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 426));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 434));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 438.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 441.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 444));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 449.3333435058594));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 454));
    await page.waitForTimeout(207)
    await page.mouse.up();
    await page.waitForTimeout(34)
    await page.mouse.move(1279, 284);
    await page.waitForTimeout(799)
    await page.mouse.move(1279, 283);
    await page.waitForTimeout(50);
    await page.mouse.move(1278, 280);
    await page.waitForTimeout(55);
    await page.mouse.move(1278, 279);
    await page.waitForTimeout(55);
    await page.mouse.move(1278, 277);
    await page.waitForTimeout(52);
    await page.mouse.move(1278, 276);
    await page.waitForTimeout(55);
    await page.mouse.move(1278, 274);
    await page.waitForTimeout(50);
    await page.mouse.move(1277, 274);
    await page.waitForTimeout(50);
    await page.mouse.move(1276, 273);
    await page.waitForTimeout(58);
    await page.mouse.move(1275, 272);
    await page.waitForTimeout(55);
    await page.mouse.move(1274, 271);
    await page.waitForTimeout(53);
    await page.mouse.move(1274, 270);
    await page.waitForTimeout(668)
    await page.mouse.move(1274, 270);
    await page.mouse.down();
    await page.waitForTimeout(115)
    await page.evaluate(() => window.scroll(0, 455.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 470.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 483.3333435058594));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 493.3333435058594));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 501.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 508.6666564941406));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 524));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 542));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 562));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 577.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 595.3333129882812));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 605.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 618));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 630.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 641.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 661.3333129882812));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 671.3333129882812));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 679.3333129882812));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 692));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 707.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 712));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 722.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 725.3333129882812));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 727.3333129882812));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 735.3333129882812));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 738));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 745.3333129882812));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 748));
    await page.waitForTimeout(82)
    await page.evaluate(() => window.scroll(0, 750.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 755.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 758));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 768));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 770.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 773.3333129882812));
    await page.waitForTimeout(64)
    await page.evaluate(() => window.scroll(0, 776));
    await page.waitForTimeout(66)
    await page.evaluate(() => window.scroll(0, 778.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 788.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 796));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 806.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 819.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 826.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 834.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 839.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 857.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 870));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 885.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 892.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 910.6666870117188));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 926));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 956.6666870117188));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 982));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 1000));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1020));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1035.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1050.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1053.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1063.3333740234375));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 1066));
    await page.waitForTimeout(500)
    await page.mouse.up();
    await page.waitForTimeout(26)
    await page.mouse.move(1279, 431);
    await page.waitForTimeout(150);
    await page.mouse.move(1279, 430);
    await page.waitForTimeout(50);
    await page.mouse.move(1278, 425);
    await page.waitForTimeout(50);
    await page.mouse.move(1276, 420);
    await page.waitForTimeout(50);
    await page.mouse.move(1276, 415);
    await page.waitForTimeout(50);
    await page.mouse.move(1274, 411);
    await page.waitForTimeout(50);
    await page.mouse.move(1272, 403);
    await page.waitForTimeout(51);
    await page.mouse.move(1271, 401);
    await page.waitForTimeout(57);
    await page.mouse.move(1271, 400);
    await page.waitForTimeout(731)
    await page.mouse.move(1271, 400);
    await page.mouse.down();
    await page.waitForTimeout(152)
    await page.evaluate(() => window.scroll(0, 1062));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1052));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1034));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 1021.3333129882812));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 1014));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 1008.6666870117188));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 998.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 980.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 968));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 962.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 952.6666870117188));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 940));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 930));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 912));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 899.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 889.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 874));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 856));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 848.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 833.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 818));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 805.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 797.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 782));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 772));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 764.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 756.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 749.3333129882812));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 741.3333129882812));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 734));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 728.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 724));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 718.6666870117188));
    await page.waitForTimeout(1025)
    await page.evaluate(() => window.scroll(0, 713.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 690.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 652.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 629.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 606.6666870117188));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 578.6666870117188));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 558.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 530.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 520));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 504.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 490));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 462));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 438.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 426));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 413.3333435058594));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 410.6666564941406));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 398));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 393.3333435058594));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 385.3333435058594));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 350));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 326.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 316.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 306.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 288.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 283.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 268.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 263.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 248));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 232.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 220));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 214.6666717529297));
    await page.waitForTimeout(190)
    await page.mouse.up();
    await page.waitForTimeout(26)
    await page.mouse.move(1279, 177);
    await page.waitForTimeout(101);
    await page.mouse.move(1278, 175);
    await page.waitForTimeout(50);
    await page.mouse.move(1277, 175);
    await page.waitForTimeout(56);
    await page.mouse.move(1270, 173);
    await page.waitForTimeout(257)
    await page.mouse.move(1260, 173);
    await page.waitForTimeout(51);
    await page.mouse.move(1248, 174);
    await page.waitForTimeout(102)
    await page.mouse.move(1239, 174);
    await page.waitForTimeout(57);
    await page.mouse.move(1223, 173);
    await page.waitForTimeout(50);
    await page.mouse.move(1210, 170);
    await page.waitForTimeout(158)
    await page.mouse.move(1188, 162);
    await page.waitForTimeout(51)
    await page.mouse.move(1177, 158);
    await page.waitForTimeout(50);
    await page.mouse.move(1175, 157);
    await page.waitForTimeout(50);
    await page.mouse.move(1167, 151);
    await page.waitForTimeout(50);
    await page.mouse.move(1163, 147);
    await page.waitForTimeout(50);
    await page.mouse.move(1160, 142);
    await page.waitForTimeout(250)
    await page.mouse.move(1156, 129);
    await page.waitForTimeout(51)
    await page.mouse.move(1156, 115);
    await page.waitForTimeout(57)
    await page.mouse.move(1158, 98);
    await page.waitForTimeout(421);
    await page.mouse.move(1203, 0);
    await page.waitForTimeout(56)
    await page.mouse.move(1162, 83);
    await page.waitForTimeout(255);
    await page.mouse.move(1183, 22);
    await page.waitForTimeout(52);
    await page.mouse.move(1190, 12);
    await page.waitForTimeout(50)
    await page.mouse.move(1170, 63);
    await page.waitForTimeout(51)
    await page.mouse.move(1178, 41);
    await page.waitForTimeout(50);
    await page.mouse.move(1180, 33);
    await page.waitForTimeout(100)
    await page.mouse.move(1182, 26);
    await browser.close()
})
