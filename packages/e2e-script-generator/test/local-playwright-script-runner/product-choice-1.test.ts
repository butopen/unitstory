import {chromium} from "playwright"
import fs from "fs";

declare global {
    interface Window {
        blSerializer: any
        blDeserializer: any
    }
}


jest.setTimeout(3000 * 100)
test("product-choice-1", async () => {

    const serializerScript = fs.readFileSync("./scripts/index.serializer.js", "utf8")

    const browser = await chromium.launch({headless: true, slowMo: 0, devtools: false})
    const context = await browser.newContext({viewport: {width: 1280, height: 619}})
    const page = await context.newPage()
    await page.waitForTimeout(0)
    await page.goto('https://www.onlinestore.it/', {waitUntil: 'load'});
    await page.waitForTimeout(2253)
    await page.mouse.move(961, 147);
    await page.waitForTimeout(60);
    await page.mouse.move(953, 153);
    await page.waitForTimeout(174)
    await page.mouse.move(948, 156);
    await page.waitForTimeout(53)
    await page.mouse.move(935, 163);
    await page.waitForTimeout(51);
    await page.mouse.move(925, 169);
    await page.waitForTimeout(50);
    await page.mouse.move(911, 179);
    await page.waitForTimeout(151)
    await page.mouse.move(894, 188);
    await page.waitForTimeout(50)
    await page.mouse.move(832, 221);
    await page.waitForTimeout(52)
    await page.mouse.move(802, 240);
    await page.waitForTimeout(50);
    await page.mouse.move(795, 244);
    await page.waitForTimeout(56);
    await page.mouse.move(774, 256);
    await page.waitForTimeout(53);
    await page.mouse.move(760, 263);
    await page.waitForTimeout(51);
    await page.mouse.move(740, 274);
    await page.waitForTimeout(52);
    await page.mouse.move(723, 279);
    await page.waitForTimeout(53);
    await page.mouse.move(678, 294);
    await page.waitForTimeout(50);
    await page.mouse.move(657, 299);
    await page.waitForTimeout(50);
    await page.mouse.move(628, 303);
    await page.waitForTimeout(50);
    await page.mouse.move(598, 307);
    await page.waitForTimeout(59);
    await page.mouse.move(592, 307);
    await page.waitForTimeout(55);
    await page.mouse.move(573, 310);
    await page.waitForTimeout(51);
    await page.mouse.move(555, 311);
    await page.waitForTimeout(50);
    await page.mouse.move(539, 315);
    await page.waitForTimeout(51);
    await page.mouse.move(506, 319);
    await page.waitForTimeout(53);
    await page.mouse.move(486, 321);
    await page.waitForTimeout(51);
    await page.mouse.move(482, 322);
    await page.waitForTimeout(53);
    await page.mouse.move(452, 325);
    await page.waitForTimeout(55);
    await page.mouse.move(420, 329);
    await page.waitForTimeout(997)
    await page.mouse.move(350, 337);
    await page.waitForTimeout(50)
    await page.mouse.move(323, 341);
    await page.waitForTimeout(50);
    await page.mouse.move(299, 343);
    await page.waitForTimeout(50);
    await page.mouse.move(260, 349);
    await page.waitForTimeout(50);
    await page.mouse.move(224, 357);
    await page.waitForTimeout(50);
    await page.mouse.move(178, 381);
    await page.waitForTimeout(250)
    await page.mouse.move(131, 408);
    await page.waitForTimeout(50)
    await page.mouse.move(107, 425);
    await page.waitForTimeout(50);
    await page.mouse.move(74, 449);
    await page.waitForTimeout(100)
    await page.mouse.move(48, 473);
    await page.waitForTimeout(50);
    await page.mouse.move(39, 486);
    await page.waitForTimeout(51);
    await page.mouse.move(38, 490);
    await page.waitForTimeout(51);
    await page.mouse.move(35, 501);
    await page.waitForTimeout(50);
    await page.mouse.move(38, 517);
    await page.waitForTimeout(258)
    await page.mouse.move(44, 523);
    await page.waitForTimeout(53);
    await page.mouse.move(53, 534);
    await page.waitForTimeout(108)
    await page.mouse.move(57, 541);
    await page.waitForTimeout(50);
    await page.mouse.move(64, 549);
    await page.waitForTimeout(55);
    await page.mouse.move(64, 551);
    await page.waitForTimeout(56);
    await page.mouse.move(66, 553);
    await page.waitForTimeout(52);
    await page.mouse.move(68, 557);
    await page.waitForTimeout(52);
    await page.mouse.move(69, 559);
    await page.waitForTimeout(52);
    await page.mouse.move(79, 560);
    await page.waitForTimeout(167);
    await page.mouse.move(81, 560);
    await page.waitForTimeout(53);
    await page.mouse.move(83, 560);
    await page.waitForTimeout(54);
    await page.mouse.move(87, 560);
    await page.waitForTimeout(51);
    await page.mouse.move(90, 560);
    await page.waitForTimeout(1440)
    await page.mouse.move(90, 560);
    await page.mouse.down();
    await page.waitForTimeout(79)
    await page.mouse.up();
    await page.waitForTimeout(680)
    await page.mouse.move(90, 559);
    await page.waitForTimeout(50)
    await page.mouse.move(97, 553);
    await page.waitForTimeout(59);
    await page.mouse.move(99, 553);
    await page.waitForTimeout(56);
    await page.mouse.move(109, 549);
    await page.waitForTimeout(166)
    await page.mouse.move(140, 541);
    await page.waitForTimeout(50);
    await page.mouse.move(151, 540);
    await page.waitForTimeout(50);
    await page.mouse.move(168, 540);
    await page.waitForTimeout(50);
    await page.mouse.move(183, 540);
    await page.waitForTimeout(50);
    await page.mouse.move(230, 536);
    await page.waitForTimeout(50);
    await page.mouse.move(320, 526);
    await page.waitForTimeout(301)
    await page.mouse.move(461, 505);
    await page.waitForTimeout(51);
    await page.mouse.move(485, 501);
    await page.waitForTimeout(55);
    await page.mouse.move(617, 480);
    await page.waitForTimeout(51);
    await page.mouse.move(693, 469);
    await page.waitForTimeout(50);
    await page.mouse.move(817, 417);
    await page.waitForTimeout(59);
    await page.mouse.move(990, 347);
    await page.waitForTimeout(50);
    await page.mouse.move(1055, 311);
    await page.waitForTimeout(49);
    await page.mouse.move(1106, 278);
    await page.waitForTimeout(416)
    await page.mouse.move(1172, 225);
    await page.waitForTimeout(52)
    await page.mouse.move(1182, 219);
    await page.waitForTimeout(55)
    await page.mouse.move(1222, 183);
    await page.waitForTimeout(52)
    await page.mouse.move(1241, 157);
    await page.waitForTimeout(51);
    await page.mouse.move(1250, 140);
    await page.waitForTimeout(107)
    await page.mouse.move(1259, 110);
    await page.waitForTimeout(50);
    await page.mouse.move(1259, 97);
    await page.waitForTimeout(107)
    await page.mouse.move(1259, 95);
    await page.waitForTimeout(51)
    await page.mouse.move(1259, 84);
    await page.waitForTimeout(51);
    await page.mouse.move(1259, 71);
    await page.waitForTimeout(101)
    await page.mouse.move(1260, 63);
    await page.waitForTimeout(55)
    await page.mouse.move(1264, 53);
    await page.waitForTimeout(52);
    await page.mouse.move(1270, 47);
    await page.waitForTimeout(66);
    await page.mouse.move(1271, 46);
    await page.waitForTimeout(51);
    await page.mouse.move(1273, 46);
    await page.waitForTimeout(508)
    await page.mouse.move(1273, 46);
    await page.mouse.down();
    await page.waitForTimeout(95)
    await page.evaluate(() => window.scroll(0, 3.3333332538604736));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 38));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 86));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 134));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 168));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 209.3333282470703));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 264));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 318.6666564941406));
    await page.waitForTimeout(47)
    await page.evaluate(() => window.scroll(0, 332.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 353.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 394.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 428.6666564941406));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 463.3333435058594));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 483.3333435058594));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 518));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 538.6666870117188));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 572.6666870117188));
    await page.waitForTimeout(48)
    await page.evaluate(() => window.scroll(0, 607.3333129882812));
    await page.waitForTimeout(400)
    await page.evaluate(() => window.scroll(0, 628));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 648));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 662));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 682.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 737.3333129882812));
    await page.waitForTimeout(71)
    await page.evaluate(() => window.scroll(0, 758));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 772));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 792.6666870117188));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 826.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 874.6666870117188));
    await page.waitForTimeout(66)
    await page.evaluate(() => window.scroll(0, 881.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 902));
    await page.waitForTimeout(67)
    await page.evaluate(() => window.scroll(0, 922.6666870117188));
    await page.waitForTimeout(849)
    await page.evaluate(() => window.scroll(0, 916));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 881.3333129882812));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 868));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 806));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 772));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 730.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 655.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 614));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 600));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 559.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 524.6666870117188));
    await page.waitForTimeout(59)
    await page.evaluate(() => window.scroll(0, 490.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 428.6666564941406));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 367.3333435058594));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 291.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 222.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 140.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 106));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 72));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 30.66666603088379));
    await page.waitForTimeout(61)
    await page.evaluate(() => window.scroll(0, 24));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 17.33333396911621));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 3.3333332538604736));
    await page.waitForTimeout(111)
    await page.mouse.up();
    await page.waitForTimeout(24)
    await page.mouse.move(1279, 38);
    await page.waitForTimeout(99);
    await page.mouse.move(1278, 38);
    await page.waitForTimeout(50);
    await page.mouse.move(1264, 48);
    await page.waitForTimeout(200)
    await page.mouse.move(1242, 60);
    await page.waitForTimeout(58)
    await page.mouse.move(1232, 65);
    await page.waitForTimeout(50);
    await page.mouse.move(1197, 79);
    await page.waitForTimeout(51);
    await page.mouse.move(1186, 80);
    await page.waitForTimeout(51);
    await page.mouse.move(1179, 81);
    await page.waitForTimeout(55);
    await page.mouse.move(1162, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(1152, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(1135, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(1111, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(1075, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(1035, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(972, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(916, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(852, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(780, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(710, 81);
    await page.waitForTimeout(50);
    await page.mouse.move(647, 81);
    await page.waitForTimeout(818)
    await page.mouse.move(620, 81);
    await page.waitForTimeout(53);
    await page.mouse.move(566, 80);
    await page.waitForTimeout(52);
    await page.mouse.move(490, 80);
    await page.waitForTimeout(50);
    await page.mouse.move(456, 78);
    await page.waitForTimeout(50);
    await page.mouse.move(416, 77);
    await page.waitForTimeout(50);
    await page.mouse.move(397, 77);
    await page.waitForTimeout(50);
    await page.mouse.move(387, 77);
    await page.waitForTimeout(184);
    await page.mouse.move(387, 79);
    await page.waitForTimeout(266);
    await page.mouse.move(514, 146);
    await page.waitForTimeout(539)
    await page.mouse.move(390, 84);
    await page.waitForTimeout(53);
    await page.mouse.move(396, 87);
    await page.waitForTimeout(52);
    await page.mouse.move(424, 100);
    await page.waitForTimeout(161)
    await page.mouse.move(461, 116);
    await page.waitForTimeout(106)
    await page.mouse.move(523, 157);
    await page.waitForTimeout(49);
    await page.mouse.move(530, 165);
    await page.waitForTimeout(50);
    await page.mouse.move(534, 174);
    await page.waitForTimeout(50);
    await page.mouse.move(536, 183);
    await page.waitForTimeout(199)
    await page.mouse.move(536, 185);
    await page.waitForTimeout(51);
    await page.mouse.move(536, 195);
    await page.waitForTimeout(102)
    await page.mouse.move(536, 203);
    await page.waitForTimeout(1013)
    await page.mouse.move(536, 209);
    await page.waitForTimeout(0)
    await page.mouse.move(536, 209);
    await page.waitForTimeout(50);
    await page.mouse.move(536, 215);
    await page.waitForTimeout(50);
    await page.mouse.move(535, 233);
    await page.waitForTimeout(50);
    await page.mouse.move(535, 248);
    await page.waitForTimeout(50);
    await page.mouse.move(536, 264);
    await page.waitForTimeout(50);
    await page.mouse.move(543, 281);
    await page.waitForTimeout(50);
    await page.mouse.move(550, 289);
    await page.waitForTimeout(51);
    await page.mouse.move(560, 295);
    await page.waitForTimeout(50);
    await page.mouse.move(564, 297);
    await page.waitForTimeout(53);
    await page.mouse.move(580, 299);
    await page.waitForTimeout(57);
    await page.mouse.move(597, 301);
    await page.waitForTimeout(53);
    await page.mouse.move(618, 304);
    await page.waitForTimeout(53);
    await page.mouse.move(646, 306);
    await page.waitForTimeout(54);
    await page.mouse.move(648, 306);
    await page.waitForTimeout(55);
    await page.mouse.move(658, 307);
    await page.waitForTimeout(56);
    await page.mouse.move(666, 307);
    await page.waitForTimeout(51);
    await page.mouse.move(671, 307);
    await page.waitForTimeout(50);
    await page.mouse.move(678, 307);
    await page.waitForTimeout(204);
    await page.mouse.move(683, 307);
    await page.waitForTimeout(54);
    await page.mouse.move(684, 307);
    await page.waitForTimeout(56);
    await page.mouse.move(689, 305);
    await page.waitForTimeout(49);
    await page.mouse.move(692, 302);
    await page.waitForTimeout(54);
    await page.mouse.move(694, 301);
    await page.waitForTimeout(50)
    await page.mouse.move(536, 215);
    await page.waitForTimeout(50)
    await page.mouse.move(535, 233);
    await page.waitForTimeout(50)
    await page.mouse.move(535, 248);
    await page.waitForTimeout(50)
    await page.mouse.move(536, 264);
    await page.waitForTimeout(50);
    await page.mouse.move(543, 281);
    await page.waitForTimeout(100)
    await page.mouse.move(550, 289);
    await page.waitForTimeout(51)
    await page.mouse.move(560, 295);
    await page.waitForTimeout(50);
    await page.mouse.move(564, 297);
    await page.waitForTimeout(53);
    await page.mouse.move(580, 299);
    await page.waitForTimeout(57);
    await page.mouse.move(597, 301);
    await page.waitForTimeout(213)
    await page.mouse.move(618, 304);
    await page.waitForTimeout(53)
    await page.mouse.move(646, 306);
    await page.waitForTimeout(54);
    await page.mouse.move(648, 306);
    await page.waitForTimeout(55);
    await page.mouse.move(658, 307);
    await page.waitForTimeout(56);
    await page.mouse.move(666, 307);
    await page.waitForTimeout(51);
    await page.mouse.move(671, 307);
    await page.waitForTimeout(50);
    await page.mouse.move(678, 307);
    await page.waitForTimeout(204);
    await page.mouse.move(683, 307);
    await page.waitForTimeout(54);
    await page.mouse.move(684, 307);
    await page.waitForTimeout(56);
    await page.mouse.move(689, 305);
    await page.waitForTimeout(49);
    await page.mouse.move(692, 302);
    await page.waitForTimeout(54);
    await page.mouse.move(694, 301);
    await page.waitForTimeout(1067)
    await page.mouse.move(696, 301);
    await page.mouse.down();
    await page.waitForTimeout(0)
    await page.mouse.move(696, 301);
    await page.mouse.down();
    await page.waitForTimeout(76)
    await page.mouse.up();
    await page.waitForTimeout(0)
    await page.mouse.up();
    await page.waitForTimeout(2300)
    await page.goto('https://www.onlinestore.it/434-smartphone-e-cellulari', {waitUntil: 'load'});
    await page.waitForTimeout(830)
    await page.mouse.move(722, 301);
    await page.waitForTimeout(51);
    await page.mouse.move(837, 301);
    await page.waitForTimeout(50);
    await page.mouse.move(996, 301);
    await page.waitForTimeout(152)
    await page.mouse.move(1168, 259);
    await page.waitForTimeout(52)
    await page.mouse.move(1279, 201);
    await page.waitForTimeout(51);
    await page.mouse.move(1279, 169);
    await page.waitForTimeout(51);
    await page.mouse.move(1279, 131);
    await page.waitForTimeout(50);
    await page.mouse.move(1279, 112);
    await page.waitForTimeout(50);
    await page.mouse.move(1279, 91);
    await page.waitForTimeout(52);
    await page.mouse.move(1279, 85);
    await page.waitForTimeout(50);
    await page.mouse.move(1279, 81);
    await page.waitForTimeout(614)
    await page.mouse.move(1279, 81);
    await page.mouse.down();
    await page.waitForTimeout(238)
    await page.evaluate(() => window.scroll(0, 2));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 29.33333396911621));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 66));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 112));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 148));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 171.3333282470703));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 198.6666717529297));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 221.3333282470703));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 248.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 262));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 280.6666564941406));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 294));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 316.6666564941406));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 344.6666564941406));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 353.3333435058594));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 380.6666564941406));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 394.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 408));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 430.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 476.6666564941406));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 499.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 522));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 536));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 558.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 581.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 613.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 654.6666870117188));
    await page.waitForTimeout(60)
    await page.evaluate(() => window.scroll(0, 704.6666870117188));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 727.3333129882812));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 741.3333129882812));
    await page.waitForTimeout(524)
    await page.evaluate(() => window.scroll(0, 736.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 714));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 690.6666870117188));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 677.3333129882812));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 668));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 640.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 618));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 604));
    await page.waitForTimeout(65)
    await page.evaluate(() => window.scroll(0, 595.3333129882812));
    await page.waitForTimeout(226)
    await page.mouse.up();
    await page.waitForTimeout(24)
    await page.mouse.move(1279, 168);
    await page.waitForTimeout(201);
    await page.mouse.move(1278, 168);
    await page.waitForTimeout(252)
    await page.mouse.move(1260, 183);
    await page.waitForTimeout(52)
    await page.mouse.move(1242, 197);
    await page.waitForTimeout(51);
    await page.mouse.move(1146, 251);
    await page.waitForTimeout(104)
    await page.mouse.move(1028, 292);
    await page.waitForTimeout(56)
    await page.mouse.move(923, 307);
    await page.waitForTimeout(51)
    await page.mouse.move(839, 318);
    await page.waitForTimeout(53)
    await page.mouse.move(744, 328);
    await page.waitForTimeout(53);
    await page.mouse.move(673, 335);
    await page.waitForTimeout(104)
    await page.mouse.move(609, 343);
    await page.waitForTimeout(50)
    await page.mouse.move(549, 354);
    await page.waitForTimeout(51);
    await page.mouse.move(535, 357);
    await page.waitForTimeout(103)
    await page.mouse.move(500, 367);
    await page.waitForTimeout(56)
    await page.mouse.move(474, 378);
    await page.waitForTimeout(52);
    await page.mouse.move(462, 383);
    await page.waitForTimeout(51);
    await page.mouse.move(453, 393);
    await page.waitForTimeout(155)
    await page.mouse.move(452, 404);
    await page.waitForTimeout(51);
    await page.mouse.move(452, 409);
    await page.waitForTimeout(106)
    await page.mouse.move(452, 416);
    await page.waitForTimeout(57);
    await page.mouse.move(454, 423);
    await page.waitForTimeout(50);
    await page.mouse.move(458, 427);
    await page.waitForTimeout(51);
    await page.mouse.move(470, 431);
    await page.waitForTimeout(50);
    await page.mouse.move(480, 431);
    await page.waitForTimeout(262)
    await page.mouse.move(492, 431);
    await page.waitForTimeout(57);
    await page.mouse.move(496, 431);
    await page.waitForTimeout(108)
    await page.mouse.move(522, 431);
    await page.waitForTimeout(52)
    await page.mouse.move(584, 431);
    await page.waitForTimeout(51)
    await page.mouse.move(655, 431);
    await page.waitForTimeout(50);
    await page.mouse.move(713, 431);
    await page.waitForTimeout(105)
    await page.mouse.move(789, 429);
    await page.waitForTimeout(51)
    await page.mouse.move(800, 428);
    await page.waitForTimeout(51)
    await page.mouse.move(837, 425);
    await page.waitForTimeout(57);
    await page.mouse.move(856, 424);
    await page.waitForTimeout(50);
    await page.mouse.move(868, 424);
    await page.waitForTimeout(52);
    await page.mouse.move(888, 424);
    await page.waitForTimeout(51);
    await page.mouse.move(912, 424);
    await page.waitForTimeout(51);
    await page.mouse.move(925, 424);
    await page.waitForTimeout(3014)
    await page.mouse.move(928, 424);
    await page.mouse.down();
    await page.waitForTimeout(0)
    await page.mouse.move(928, 424);
    await page.mouse.down();
    await page.waitForTimeout(44)
    await page.mouse.up();
    await page.waitForTimeout(0)
    await page.mouse.up();
    await page.waitForTimeout(1622)
    await page.goto('https://www.onlinestore.it/573516-xiaomi-11t-pro-169-cm-667-doppia-sim-miui-125-5g-usb-tipo-c-8-gb-128-gb-5000-mah-blu-6934177750090.html', {waitUntil: 'load'});
    await page.waitForTimeout(13)
    await page.mouse.move(914, 395);
    await page.waitForTimeout(59)
    await page.mouse.move(914, 379);
    await page.waitForTimeout(138)
    await page.mouse.move(914, 345);
    await page.waitForTimeout(121)
    await page.mouse.move(912, 317);
    await page.waitForTimeout(49);
    await page.mouse.move(912, 315);
    await page.waitForTimeout(52);
    await page.mouse.move(912, 311);
    await page.waitForTimeout(53);
    await page.mouse.move(916, 299);
    await page.waitForTimeout(212)
    await page.mouse.move(930, 286);
    await page.waitForTimeout(135)
    await page.mouse.move(1228, 147);
    await page.waitForTimeout(59)
    await page.mouse.move(1274, 115);
    await page.waitForTimeout(55);
    await page.mouse.move(1279, 106);
    await page.waitForTimeout(50);
    await page.mouse.move(1279, 97);
    await page.waitForTimeout(339)

    await page.evaluate((serializerScript) => {
        const s = document.createElement("script")
        s.textContent = serializerScript
        document.head.appendChild(s)
    }, serializerScript)

    const domJson = await page.evaluate(() => {
        return new window.blSerializer.ElementSerializer().serialize(document)
    })

    fs.writeFileSync('./screenshots/onlinestore.json', JSON.stringify(domJson), {encoding: 'utf-8'})


    await page.mouse.move(1279, 97);
    await page.mouse.down();
    await page.waitForTimeout(43)
    await page.evaluate(() => window.scroll(0, 1.3333333730697632));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 21.33333396911621));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 57.33333206176758));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 77.33333587646484));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 102.66666412353516));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 126));
    await page.waitForTimeout(68)
    await page.evaluate(() => window.scroll(0, 156));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 179.3333282470703));
    await page.waitForTimeout(98)
    await page.evaluate(() => window.scroll(0, 214.6666717529297));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 245.3333282470703));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 258));
    await page.waitForTimeout(3496)
    await page.evaluate(() => window.scroll(0, 263.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 276));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 296));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 311.3333435058594));
    await page.waitForTimeout(150)
    await page.evaluate(() => window.scroll(0, 316.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 324));
    await page.waitForTimeout(133)
    await page.evaluate(() => window.scroll(0, 332));
    await page.waitForTimeout(100)
    await page.mouse.up();
    await page.waitForTimeout(5)
    await page.mouse.move(1279, 185);
    await page.waitForTimeout(1777)
    await page.mouse.move(1278, 185);
    await page.waitForTimeout(50);
    await page.mouse.move(1276, 187);
    await page.waitForTimeout(549)
    await page.mouse.move(1272, 187);
    await page.waitForTimeout(1728);
    await page.mouse.move(1272, 201);
    await page.waitForTimeout(55);
    await page.mouse.move(1279, 183);
    await page.waitForTimeout(54);
    await page.mouse.move(1279, 181);
    await page.waitForTimeout(51)
    await page.mouse.move(1236, 203);
    await page.waitForTimeout(1625);
    await page.mouse.move(1235, 219);
    await page.waitForTimeout(50)
    await page.mouse.move(1152, 240);
    await page.waitForTimeout(1520);
    await page.mouse.move(1177, 239);
    await page.waitForTimeout(50)
    await page.mouse.move(1036, 277);
    await page.waitForTimeout(1366);
    await page.mouse.move(1054, 295);
    await page.waitForTimeout(52);
    await page.mouse.move(1084, 281);
    await page.waitForTimeout(50)
    await page.mouse.move(888, 335);
    await page.waitForTimeout(50)
    await page.mouse.move(836, 355);
    await page.waitForTimeout(1166);
    await page.mouse.move(903, 351);
    await page.waitForTimeout(50)
    await page.mouse.move(820, 363);
    await page.waitForTimeout(50);
    await page.mouse.move(808, 371);
    await page.waitForTimeout(50);
    await page.mouse.move(803, 374);
    await page.waitForTimeout(866);
    await page.mouse.move(804, 374);
    await page.waitForTimeout(50);
    await page.mouse.move(819, 372);
    await page.waitForTimeout(50);
    await page.mouse.move(850, 367);
    await page.waitForTimeout(1166)
    await page.mouse.move(966, 330);
    await page.waitForTimeout(648)
    await page.mouse.move(1278, 180);
    await page.waitForTimeout(51);
    await page.mouse.move(1268, 187);
    await page.waitForTimeout(50);
    await page.mouse.move(1265, 190);
    await page.waitForTimeout(55);
    await page.mouse.move(1265, 191);
    await page.waitForTimeout(78);
    await page.mouse.move(1264, 191);
    await page.waitForTimeout(406);
    await page.mouse.move(1264, 200);
    await page.waitForTimeout(210);
    await page.mouse.move(1268, 201);
    await page.waitForTimeout(51);
    await page.mouse.move(1268, 203);
    await page.waitForTimeout(51);
    await page.mouse.move(1268, 205);
    await page.waitForTimeout(284)
    await page.mouse.move(1260, 193);
    await page.waitForTimeout(54);
    await page.mouse.move(1258, 195);
    await page.waitForTimeout(57);
    await page.mouse.move(1256, 196);
    await page.waitForTimeout(140);
    await page.mouse.move(1256, 198);
    await page.waitForTimeout(54);
    await page.mouse.move(1260, 199);
    await page.waitForTimeout(635)
    await page.mouse.move(1268, 205);
    await page.mouse.down();
    await page.waitForTimeout(15)
    await page.evaluate(() => window.scroll(0, 335.3333435058594));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 363.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 394));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 424.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 444.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 480.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 510.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 531.3333129882812));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 554));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 579.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 604.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 635.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 660.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 684));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 706.6666870117188));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 726.6666870117188));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 747.3333129882812));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 767.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 778));
    await page.waitForTimeout(122)
    await page.mouse.up();
    await page.waitForTimeout(27)
    await page.mouse.move(1274, 322);
    await page.waitForTimeout(183);
    await page.mouse.move(1273, 322);
    await page.waitForTimeout(234)
    await page.mouse.move(1208, 321);
    await page.waitForTimeout(57);
    await page.mouse.move(1150, 321);
    await page.waitForTimeout(1439);
    await page.mouse.move(1001, 352);
    await page.waitForTimeout(110)
    await page.mouse.move(900, 323);
    await page.waitForTimeout(50);
    await page.mouse.move(702, 326);
    await page.waitForTimeout(411)
    await page.mouse.move(690, 331);
    await page.waitForTimeout(52);
    await page.mouse.move(691, 333);
    await page.waitForTimeout(109)
    await page.mouse.move(694, 348);
    await page.waitForTimeout(302);
    await page.mouse.move(748, 389);
    await page.waitForTimeout(50);
    await page.mouse.move(755, 389);
    await page.waitForTimeout(50);
    await page.mouse.move(762, 389);
    await page.waitForTimeout(50);
    await page.mouse.move(774, 391);
    await page.waitForTimeout(50);
    await page.mouse.move(792, 391);
    await page.waitForTimeout(50);
    await page.mouse.move(816, 391);
    await page.waitForTimeout(50);
    await page.mouse.move(855, 391);
    await page.waitForTimeout(52)
    await page.mouse.move(704, 369);
    await page.waitForTimeout(50);
    await page.mouse.move(708, 375);
    await page.waitForTimeout(50);
    await page.mouse.move(714, 376);
    await page.waitForTimeout(50);
    await page.mouse.move(724, 382);
    await page.waitForTimeout(50);
    await page.mouse.move(738, 387);
    await page.waitForTimeout(400);
    await page.mouse.move(887, 387);
    await page.waitForTimeout(58);
    await page.mouse.move(899, 381);
    await page.waitForTimeout(708)
    await page.mouse.move(938, 365);
    await page.waitForTimeout(53)
    await page.mouse.move(971, 357);
    await page.waitForTimeout(105)
    await page.mouse.move(1061, 348);
    await page.waitForTimeout(50);
    await page.mouse.move(1076, 347);
    await page.waitForTimeout(50);
    await page.mouse.move(1086, 346);
    await page.waitForTimeout(50);
    await page.mouse.move(1097, 343);
    await page.waitForTimeout(50);
    await page.mouse.move(1106, 341);
    await page.waitForTimeout(50);
    await page.mouse.move(1121, 340);
    await page.waitForTimeout(50);
    await page.mouse.move(1136, 339);
    await page.waitForTimeout(50);
    await page.mouse.move(1170, 338);
    await page.waitForTimeout(50);
    await page.mouse.move(1202, 333);
    await page.waitForTimeout(50);
    await page.mouse.move(1217, 331);
    await page.waitForTimeout(50);
    await page.mouse.move(1222, 331);
    await page.waitForTimeout(559)
    await page.mouse.move(1225, 330);
    await page.waitForTimeout(51);
    await page.mouse.move(1238, 327);
    await page.waitForTimeout(53);
    await page.mouse.move(1245, 325);
    await page.waitForTimeout(157)
    await page.mouse.move(1258, 323);
    await page.waitForTimeout(50)
    await page.mouse.move(1264, 323);
    await page.waitForTimeout(53);
    await page.mouse.move(1266, 323);
    await page.waitForTimeout(54);
    await page.mouse.move(1268, 322);
    await page.waitForTimeout(416)
    await page.mouse.move(1272, 322);
    await page.mouse.down();
    await page.waitForTimeout(137)
    await page.evaluate(() => window.scroll(0, 771.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 743.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 718));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 674.6666870117188));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 608.6666870117188));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 560.6666870117188));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 492));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 418));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 382.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 344.6666564941406));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 316.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 288.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 245.3333282470703));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 217.3333282470703));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 217.3333282470703));
    await page.waitForTimeout(62)
    await page.evaluate(() => window.scroll(0, 189.3333282470703));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 189.3333282470703));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 158.6666717529297));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 158.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 123.33333587646484));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 123.33333587646484));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 95.33333587646484));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 95.33333587646484));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 72.66666412353516));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 72.66666412353516));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 67.33333587646484));
    await page.waitForTimeout(0)
    await page.evaluate(() => window.scroll(0, 67.33333587646484));
    await page.waitForTimeout(33)
    await page.mouse.up();
    await page.waitForTimeout(0)
    await page.mouse.up();
    await page.waitForTimeout(1)
    await page.mouse.move(1279, 135);
    await page.waitForTimeout(50);
    await page.mouse.move(1278, 135);
    await page.waitForTimeout(50);
    await page.mouse.move(1276, 135);
    await page.waitForTimeout(0)
    await page.mouse.move(1279, 135);
    await page.waitForTimeout(50);
    await page.mouse.move(1278, 135);
    await page.waitForTimeout(50);
    await page.mouse.move(1276, 135);
    await page.waitForTimeout(50);
    await page.mouse.move(1195, 161);
    await page.waitForTimeout(50);
    await page.mouse.move(1079, 179);
    await page.waitForTimeout(51);
    await page.mouse.move(1020, 184);
    await page.waitForTimeout(51);
    await page.mouse.move(840, 186);
    await page.waitForTimeout(57);
    await page.mouse.move(647, 180);
    await page.waitForTimeout(56);
    await page.mouse.move(496, 169);
    await page.waitForTimeout(50);
    await page.mouse.move(368, 157);
    await page.waitForTimeout(50);
    await page.mouse.move(296, 147);
    await page.waitForTimeout(51);
    await page.mouse.move(134, 116);
    await page.waitForTimeout(50);
    await page.mouse.move(67, 84);
    await page.waitForTimeout(50);
    await page.mouse.move(56, 71);
    await page.waitForTimeout(53);
    await page.mouse.move(56, 69);
    await page.waitForTimeout(54);
    await page.mouse.move(58, 61);
    await page.waitForTimeout(58);
    await page.mouse.move(61, 55);
    await page.waitForTimeout(51);
    await page.mouse.move(74, 50);
    await page.waitForTimeout(51);
    await page.mouse.move(76, 50);
    await page.waitForTimeout(57);
    await page.mouse.move(77, 50);
    await page.waitForTimeout(150)
    await page.mouse.move(1195, 161);
    await page.waitForTimeout(265);
    await page.mouse.move(496, 169);
    await page.waitForTimeout(50);
    await page.mouse.move(368, 157);
    await page.waitForTimeout(50);
    await page.mouse.move(296, 147);
    await page.waitForTimeout(50)
    await page.mouse.move(1079, 179);
    await page.waitForTimeout(51);
    await page.mouse.move(1020, 184);
    await page.waitForTimeout(51);
    await page.mouse.move(840, 186);
    await page.waitForTimeout(57);
    await page.mouse.move(647, 180);
    await page.waitForTimeout(366)
    await page.mouse.move(134, 116);
    await page.waitForTimeout(50)
    await page.mouse.move(67, 84);
    await page.waitForTimeout(50);
    await page.mouse.move(56, 71);
    await page.waitForTimeout(53);
    await page.mouse.move(56, 69);
    await page.waitForTimeout(54);
    await page.mouse.move(58, 61);
    await page.waitForTimeout(58);
    await page.mouse.move(61, 55);
    await page.waitForTimeout(51);
    await page.mouse.move(74, 50);
    await page.waitForTimeout(51);
    await page.mouse.move(76, 50);
    await page.waitForTimeout(57);
    await page.mouse.move(77, 50);
    await page.waitForTimeout(67);
    await page.mouse.move(78, 50);
    await page.waitForTimeout(395)
    await page.mouse.move(78, 50);
    await page.mouse.down();
    await page.waitForTimeout(0)
    await page.mouse.move(78, 50);
    await page.mouse.down();
    await page.waitForTimeout(30)
    await page.mouse.up();
    await page.waitForTimeout(0)
    await page.mouse.up();
    await page.waitForTimeout(1613)
    await page.goto('https://www.onlinestore.it/', {waitUntil: 'load'});
    await page.waitForTimeout(1710)
    await page.mouse.move(428, 240);
    await page.waitForTimeout(49)
    await page.mouse.move(424, 233);
    await page.waitForTimeout(50)
    await page.mouse.move(395, 191);
    await page.waitForTimeout(57)
    await page.mouse.move(352, 136);
    await page.waitForTimeout(56);
    await page.mouse.move(319, 106);
    await page.waitForTimeout(108)
    await page.mouse.move(249, 37);
    await browser.close()
})
