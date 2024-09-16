import {chromium} from "playwright"
import fs from "fs";

declare global {
    interface Window {
        blSerializer: any
        blDeserializer: any
    }
}


jest.setTimeout(3000 * 100)
test("product-choice-2", async () => {

    const serializerScript = fs.readFileSync("./scripts/index.serializer.js", "utf8")

    const browser = await chromium.launch({headless: true, slowMo: 0, devtools: false})
    const context = await browser.newContext({viewport: {width: 1280, height: 619}})
    const page = await context.newPage()
    await page.waitForTimeout(0)
    await page.goto('https://www.monclick.it/', {waitUntil: 'load'});
    await page.waitForTimeout(7)
    await page.mouse.move(1106, 133);
    await page.waitForTimeout(1805);
    await page.mouse.move(1104, 135);
    await page.waitForTimeout(1855)
    await page.mouse.move(1089, 149);
    await page.waitForTimeout(50)
    await page.mouse.move(1078, 171);
    await page.waitForTimeout(50);
    await page.mouse.move(1062, 195);
    await page.waitForTimeout(102)
    await page.mouse.move(1056, 209);
    await page.waitForTimeout(50);
    await page.mouse.move(1054, 213);
    await page.waitForTimeout(51);
    await page.mouse.move(1048, 222);
    await page.waitForTimeout(50);
    await page.mouse.move(1043, 230);
    await page.waitForTimeout(51);
    await page.mouse.move(1038, 237);
    await page.waitForTimeout(56);
    await page.mouse.move(1035, 244);
    await page.waitForTimeout(56);
    await page.mouse.move(1030, 251);
    await page.waitForTimeout(364)
    await page.mouse.move(1018, 269);
    await page.waitForTimeout(50);
    await page.mouse.move(1012, 279);
    await page.waitForTimeout(51);
    await page.mouse.move(1002, 297);
    await page.waitForTimeout(49);
    await page.mouse.move(983, 326);
    await page.waitForTimeout(50);
    await page.mouse.move(965, 353);
    await page.waitForTimeout(50);
    await page.mouse.move(952, 373);
    await page.waitForTimeout(50);
    await page.mouse.move(944, 385);
    await page.waitForTimeout(50);
    await page.mouse.move(934, 397);
    await page.waitForTimeout(50);
    await page.mouse.move(927, 409);
    await page.waitForTimeout(50);
    await page.mouse.move(924, 415);
    await page.waitForTimeout(50);
    await page.mouse.move(921, 422);
    await page.waitForTimeout(50);
    await page.mouse.move(918, 433);
    await page.waitForTimeout(50);
    await page.mouse.move(916, 445);
    await page.waitForTimeout(50);
    await page.mouse.move(916, 461);
    await page.waitForTimeout(50);
    await page.mouse.move(916, 479);
    await page.waitForTimeout(50);
    await page.mouse.move(916, 494);
    await page.waitForTimeout(50);
    await page.mouse.move(918, 505);
    await page.waitForTimeout(50);
    await page.mouse.move(919, 517);
    await page.waitForTimeout(50);
    await page.mouse.move(920, 523);
    await page.waitForTimeout(56);
    await page.mouse.move(920, 527);
    await page.waitForTimeout(1008)
    await page.mouse.move(922, 537);
    await page.waitForTimeout(56)
    await page.mouse.move(923, 544);
    await page.waitForTimeout(52);
    await page.mouse.move(926, 553);
    await page.waitForTimeout(102)
    await page.mouse.move(932, 570);
    await page.waitForTimeout(50);
    await page.mouse.move(933, 573);
    await page.waitForTimeout(51);
    await page.mouse.move(934, 575);
    await page.waitForTimeout(149);
    await page.mouse.move(938, 577);
    await page.waitForTimeout(50);
    await page.mouse.move(944, 577);
    await page.waitForTimeout(50);
    await page.mouse.move(951, 577);
    await page.waitForTimeout(50);
    await page.mouse.move(959, 577);
    await page.waitForTimeout(50);
    await page.mouse.move(970, 577);
    await page.waitForTimeout(500)
    await page.mouse.move(980, 577);
    await page.waitForTimeout(58);
    await page.mouse.move(984, 577);
    await page.waitForTimeout(58);
    await page.mouse.move(1013, 577);
    await page.waitForTimeout(166)
    await page.mouse.move(1041, 577);
    await page.waitForTimeout(50);
    await page.mouse.move(1068, 576);
    await page.waitForTimeout(50);
    await page.mouse.move(1093, 576);
    await page.waitForTimeout(50);
    await page.mouse.move(1102, 576);
    await page.waitForTimeout(50);
    await page.mouse.move(1108, 576);
    await page.waitForTimeout(54);
    await page.mouse.move(1110, 576);
    await page.waitForTimeout(57);
    await page.mouse.move(1112, 576);
    await page.waitForTimeout(55);
    await page.mouse.move(1125, 576);
    await page.waitForTimeout(51);
    await page.mouse.move(1134, 576);
    await page.waitForTimeout(53);
    await page.mouse.move(1135, 576);
    await page.waitForTimeout(1387)
    await page.mouse.move(1137, 576);
    await page.mouse.down();
    await page.waitForTimeout(77)
    await page.mouse.up();
    await page.waitForTimeout(701)
    await page.mouse.move(1136, 576);
    await page.waitForTimeout(55)
    await page.mouse.move(1100, 548);
    await page.waitForTimeout(52);
    await page.mouse.move(1064, 524);
    await page.waitForTimeout(54);
    await page.mouse.move(946, 435);
    await page.waitForTimeout(55);
    await page.mouse.move(866, 339);
    await page.waitForTimeout(51);
    await page.mouse.move(806, 275);
    await page.waitForTimeout(262)
    await page.mouse.move(794, 253);
    await page.waitForTimeout(52)
    await page.mouse.move(792, 250);
    await page.waitForTimeout(56);
    await page.mouse.move(785, 231);
    await page.waitForTimeout(50);
    await page.mouse.move(780, 217);
    await page.waitForTimeout(50);
    await page.mouse.move(778, 206);
    await page.waitForTimeout(52);
    await page.mouse.move(776, 197);
    await page.waitForTimeout(53);
    await page.mouse.move(776, 191);
    await page.waitForTimeout(53);
    await page.mouse.move(776, 187);
    await page.waitForTimeout(83);
    await page.mouse.move(776, 186);
    await page.waitForTimeout(50);
    await page.mouse.move(777, 185);
    await page.waitForTimeout(50);
    await page.mouse.move(798, 185);
    await page.waitForTimeout(50);
    await page.mouse.move(815, 185);
    await page.waitForTimeout(50);
    await page.mouse.move(840, 186);
    await page.waitForTimeout(50);
    await page.mouse.move(871, 187);
    await page.waitForTimeout(50);
    await page.mouse.move(883, 187);
    await page.waitForTimeout(50);
    await page.mouse.move(888, 188);
    await page.waitForTimeout(50);
    await page.mouse.move(893, 188);
    await page.waitForTimeout(50);
    await page.mouse.move(900, 188);
    await page.waitForTimeout(50);
    await page.mouse.move(909, 187);
    await page.waitForTimeout(50);
    await page.mouse.move(917, 186);
    await page.waitForTimeout(57);
    await page.mouse.move(920, 186);
    await page.waitForTimeout(56);
    await page.mouse.move(929, 185);
    await page.waitForTimeout(52);
    await page.mouse.move(934, 185);
    await page.waitForTimeout(68);
    await page.mouse.move(934, 183);
    await page.waitForTimeout(50);
    await page.mouse.move(925, 179);
    await page.waitForTimeout(1280)
    await page.mouse.move(904, 175);
    await page.waitForTimeout(50);
    await page.mouse.move(844, 167);
    await page.waitForTimeout(58);
    await page.mouse.move(821, 165);
    await page.waitForTimeout(51);
    await page.mouse.move(772, 161);
    await page.waitForTimeout(216)
    await page.mouse.move(408, 137);
    await page.waitForTimeout(434);
    await page.mouse.move(223, 130);
    await page.waitForTimeout(50)
    await page.mouse.move(327, 133);
    await page.waitForTimeout(53);
    await page.mouse.move(284, 130);
    await page.waitForTimeout(52);
    await page.mouse.move(279, 130);
    await page.waitForTimeout(164)
    await page.mouse.move(260, 130);
    await page.waitForTimeout(169);
    await page.mouse.move(229, 130);
    await page.waitForTimeout(53)
    await page.mouse.move(245, 130);
    await page.waitForTimeout(66);
    await page.mouse.move(240, 130);
    await page.waitForTimeout(219)
    await page.mouse.move(212, 130);
    await page.waitForTimeout(56)
    await page.mouse.move(192, 129);
    await page.waitForTimeout(56);
    await page.mouse.move(178, 129);
    await page.waitForTimeout(108)
    await page.mouse.move(134, 129);
    await page.waitForTimeout(51)
    await page.mouse.move(113, 129);
    await page.waitForTimeout(58);
    await page.mouse.move(110, 129);
    await page.waitForTimeout(58);
    await page.mouse.move(100, 129);
    await page.waitForTimeout(165)
    await page.mouse.move(88, 129);
    await page.waitForTimeout(50);
    await page.mouse.move(83, 129);
    await page.waitForTimeout(51);
    await page.mouse.move(76, 129);
    await page.waitForTimeout(58);
    await page.mouse.move(72, 129);
    await page.waitForTimeout(916)
    await page.mouse.move(68, 130);
    await page.waitForTimeout(50);
    await page.mouse.move(68, 141);
    await page.waitForTimeout(102)
    await page.mouse.move(68, 157);
    await page.waitForTimeout(50);
    await page.mouse.move(68, 164);
    await page.waitForTimeout(51);
    await page.mouse.move(70, 187);
    await page.waitForTimeout(55);
    await page.mouse.move(70, 205);
    await page.waitForTimeout(207)
    await page.mouse.move(70, 231);
    await page.waitForTimeout(57);
    await page.mouse.move(70, 247);
    await page.waitForTimeout(50);
    await page.mouse.move(71, 265);
    await page.waitForTimeout(50);
    await page.mouse.move(71, 267);
    await page.waitForTimeout(616);
    await page.mouse.move(71, 266);
    await page.waitForTimeout(51);
    await page.mouse.move(72, 260);
    await page.waitForTimeout(50);
    await page.mouse.move(72, 258);
    await page.waitForTimeout(53);
    await page.mouse.move(72, 253);
    await page.waitForTimeout(57);
    await page.mouse.move(72, 247);
    await page.waitForTimeout(55);
    await page.mouse.move(72, 241);
    await page.waitForTimeout(51);
    await page.mouse.move(78, 235);
    await page.waitForTimeout(50);
    await page.mouse.move(80, 233);
    await page.waitForTimeout(266);
    await page.mouse.move(81, 233);
    await page.waitForTimeout(50);
    await page.mouse.move(88, 233);
    await page.waitForTimeout(50);
    await page.mouse.move(90, 233);
    await page.waitForTimeout(50);
    await page.mouse.move(98, 233);
    await page.waitForTimeout(50);
    await page.mouse.move(107, 234);
    await page.waitForTimeout(50);
    await page.mouse.move(130, 237);
    await page.waitForTimeout(1706)
    await page.mouse.move(180, 247);
    await page.waitForTimeout(51)
    await page.mouse.move(250, 273);
    await page.waitForTimeout(50)
    await page.mouse.move(286, 302);
    await page.waitForTimeout(50);
    await page.mouse.move(293, 312);
    await page.waitForTimeout(104)
    await page.mouse.move(306, 337);
    await page.waitForTimeout(57)
    await page.mouse.move(314, 363);
    await page.waitForTimeout(52)
    await page.mouse.move(324, 385);
    await page.waitForTimeout(52)
    await page.mouse.move(336, 416);
    await page.waitForTimeout(50)
    await page.mouse.move(337, 429);
    await page.waitForTimeout(50);
    await page.mouse.move(337, 438);
    await page.waitForTimeout(50);
    await page.mouse.move(337, 445);
    await page.waitForTimeout(151)
    await page.mouse.move(336, 447);
    await page.waitForTimeout(52);
    await page.mouse.move(336, 449);
    await page.waitForTimeout(230);
    await page.mouse.move(337, 450);
    await page.waitForTimeout(50);
    await page.mouse.move(352, 451);
    await page.waitForTimeout(50);
    await page.mouse.move(396, 452);
    await page.waitForTimeout(50);
    await page.mouse.move(442, 452);
    await page.waitForTimeout(50);
    await page.mouse.move(496, 453);
    await page.waitForTimeout(532)
    await page.mouse.move(524, 453);
    await page.waitForTimeout(50);
    await page.mouse.move(535, 453);
    await page.waitForTimeout(50);
    await page.mouse.move(540, 454);
    await page.waitForTimeout(50);
    await page.mouse.move(542, 454);
    await page.waitForTimeout(50);
    await page.mouse.move(548, 454);
    await page.waitForTimeout(58);
    await page.mouse.move(550, 455);
    await page.waitForTimeout(967)
    await page.mouse.move(552, 453);
    await page.waitForTimeout(51);
    await page.mouse.move(552, 452);
    await page.waitForTimeout(108)
    await page.mouse.move(556, 443);
    await page.waitForTimeout(57);
    await page.mouse.move(559, 437);
    await page.waitForTimeout(50);
    await page.mouse.move(561, 431);
    await page.waitForTimeout(667);
    await page.mouse.move(561, 429);
    await page.waitForTimeout(824)
    await page.mouse.move(567, 422);
    await page.waitForTimeout(50);
    await page.mouse.move(570, 416);
    await page.waitForTimeout(57);
    await page.mouse.move(571, 414);
    await page.waitForTimeout(51);
    await page.mouse.move(576, 409);
    await page.waitForTimeout(674);
    await page.mouse.move(577, 408);
    await page.waitForTimeout(882)
    await page.mouse.move(577, 399);
    await page.waitForTimeout(50);
    await page.mouse.move(577, 393);
    await page.waitForTimeout(100)
    await page.mouse.move(577, 387);
    await page.waitForTimeout(330)
    await page.mouse.move(577, 387);
    await page.mouse.down();
    await page.waitForTimeout(61)
    await page.mouse.up();
    await page.waitForTimeout(1732)
    await page.goto('https://www.monclick.it/vendita_applicazioni-office', {waitUntil: 'load'});
    await page.waitForTimeout(16)
    await page.mouse.move(573, 373);
    await page.waitForTimeout(53);
    await page.mouse.move(574, 370);
    await page.waitForTimeout(672);
    await page.mouse.move(578, 369);
    await page.waitForTimeout(50);
    await page.mouse.move(602, 367);
    await page.waitForTimeout(50);
    await page.mouse.move(666, 365);
    await page.waitForTimeout(875)
    await page.mouse.move(756, 351);
    await page.waitForTimeout(50)
    await page.mouse.move(938, 273);
    await page.waitForTimeout(50)
    await page.mouse.move(1069, 203);
    await page.waitForTimeout(50)
    await page.mouse.move(1128, 177);
    await page.waitForTimeout(50);
    await page.mouse.move(1160, 161);
    await page.waitForTimeout(100)
    await page.mouse.move(1177, 150);
    await page.waitForTimeout(50)
    await page.mouse.move(1194, 130);
    await page.waitForTimeout(51)
    await page.mouse.move(1217, 110);
    await page.waitForTimeout(51);
    await page.mouse.move(1218, 109);
    await page.waitForTimeout(173);
    await page.mouse.move(1254, 87);
    await page.waitForTimeout(107)
    await page.mouse.move(1232, 101);
    await page.waitForTimeout(63);
    await page.mouse.move(1252, 89);
    await page.waitForTimeout(171)
    await page.mouse.move(1270, 81);
    await page.waitForTimeout(54);
    await page.mouse.move(1276, 79);
    await page.waitForTimeout(50);
    await page.mouse.move(1279, 77);
    await page.waitForTimeout(653)
    await page.mouse.move(1278, 77);
    await page.waitForTimeout(284);
    await page.mouse.move(1276, 77);
    await page.waitForTimeout(58);
    await page.mouse.move(1274, 77);
    await page.waitForTimeout(58);
    await page.mouse.move(1271, 76);
    await page.waitForTimeout(1399);
    await page.mouse.move(1270, 150);
    await page.waitForTimeout(502)
    await page.mouse.move(1271, 76);
    await page.mouse.down();
    await page.waitForTimeout(98)
    await page.evaluate(() => window.scroll(0, 2.6666667461395264));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 30.66666603088379));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 156.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 236));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 292));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 352.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 390));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 399.3333435058594));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 413.3333435058594));
    await page.waitForTimeout(172)
    await page.evaluate(() => window.scroll(0, 427.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 450.6666564941406));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 464.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 474));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 488));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 502.6666564941406));
    await page.waitForTimeout(106)
    await page.evaluate(() => window.scroll(0, 512));
    await page.waitForTimeout(218)
    await page.mouse.up();
    await page.waitForTimeout(166)
    await page.mouse.move(1267, 150);
    await page.waitForTimeout(51)
    await page.mouse.move(1253, 154);
    await page.waitForTimeout(49)
    await page.mouse.move(1246, 155);
    await page.waitForTimeout(51);
    await page.mouse.move(1212, 169);
    await page.waitForTimeout(106)
    await page.mouse.move(1177, 183);
    await page.waitForTimeout(51)
    await page.mouse.move(1141, 198);
    await page.waitForTimeout(51)
    await page.mouse.move(1076, 212);
    await page.waitForTimeout(58)
    await page.mouse.move(944, 228);
    await page.waitForTimeout(50)
    await page.mouse.move(864, 233);
    await page.waitForTimeout(50)
    await page.mouse.move(772, 238);
    await page.waitForTimeout(50);
    await page.mouse.move(741, 238);
    await page.waitForTimeout(56);
    await page.mouse.move(644, 239);
    await page.waitForTimeout(60);
    await page.mouse.move(560, 241);
    await page.waitForTimeout(50);
    await page.mouse.move(443, 243);
    await page.waitForTimeout(50);
    await page.mouse.move(392, 243);
    await page.waitForTimeout(50);
    await page.mouse.move(353, 243);
    await page.waitForTimeout(50);
    await page.mouse.move(326, 242);
    await page.waitForTimeout(50);
    await page.mouse.move(310, 241);
    await page.waitForTimeout(50);
    await page.mouse.move(303, 241);
    await page.waitForTimeout(50);
    await page.mouse.move(302, 241);
    await page.waitForTimeout(58);
    await page.mouse.move(298, 241);
    await page.waitForTimeout(615);
    await page.mouse.move(300, 242);
    await page.waitForTimeout(51);
    await page.mouse.move(301, 242);
    await page.waitForTimeout(1293)
    await page.mouse.move(306, 247);
    await page.waitForTimeout(55)
    await page.mouse.move(317, 258);
    await page.waitForTimeout(50)
    await page.mouse.move(324, 269);
    await page.waitForTimeout(50)
    await page.mouse.move(327, 281);
    await page.waitForTimeout(50);
    await page.mouse.move(328, 284);
    await page.waitForTimeout(400);
    await page.mouse.move(328, 285);
    await page.waitForTimeout(50);
    await page.mouse.move(328, 281);
    await page.waitForTimeout(829)
    await page.mouse.move(328, 281);
    await page.mouse.down();
    await page.waitForTimeout(79)
    await page.mouse.up();
    await page.waitForTimeout(733)
    await page.goto('https://www.monclick.it/prodotti/2/AOF/microsoft/MK_000000256249.htm', {waitUntil: 'load'});
    await page.waitForTimeout(391)
    await page.mouse.move(331, 281);
    await page.waitForTimeout(50);
    await page.mouse.move(358, 281);
    await page.waitForTimeout(100)
    await page.mouse.move(390, 286);
    await page.waitForTimeout(50)
    await page.mouse.move(444, 290);
    await page.waitForTimeout(101);
    await page.mouse.move(540, 301);
    await page.waitForTimeout(50)
    await page.mouse.move(504, 296);
    await page.waitForTimeout(115)
    await page.mouse.move(580, 307);
    await page.waitForTimeout(122);
    await page.mouse.move(618, 313);
    await page.waitForTimeout(51);
    await page.mouse.move(670, 315);
    await page.waitForTimeout(51);
    await page.mouse.move(716, 319);
    await page.waitForTimeout(52);
    await page.mouse.move(761, 323);
    await page.waitForTimeout(50);
    await page.mouse.move(804, 323);
    await page.waitForTimeout(52);
    await page.mouse.move(850, 323);

    await page.evaluate((serializerScript) => {
        const s = document.createElement("script")
        s.textContent = serializerScript
        document.head.appendChild(s)
    }, serializerScript)

    const domJson = await page.evaluate(() => {
        return new window.blSerializer.ElementSerializer().serialize(document)
    })

    fs.writeFileSync('./screenshots/monclick.json', JSON.stringify(domJson), {encoding: 'utf-8'})


    await page.waitForTimeout(51);
    await page.mouse.move(897, 322);
    await page.waitForTimeout(149)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(10.666666984558105, 10.666666984558105)
    }, 'div.resize-sensor-expand[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(53)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(884.6666870117188, 1822.6666259765625)
    }, 'div.resize-sensor-shrink[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(117)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(10.666666984558105, 0)
    }, 'div.resize-sensor-expand[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(51)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(10.666666984558105, 10)
    }, 'div.resize-sensor-expand[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(114)
    await page.mouse.move(962, 308);
    await page.waitForTimeout(50)
    await page.mouse.move(1090, 271);
    await page.waitForTimeout(51);
    await page.mouse.move(1112, 267);
    await page.waitForTimeout(52);
    await page.mouse.move(1154, 259);
    await page.waitForTimeout(159)
    await page.mouse.move(1208, 248);
    await page.waitForTimeout(51);
    await page.mouse.move(1213, 237);
    await page.waitForTimeout(108)
    await page.mouse.move(1232, 183);
    await page.waitForTimeout(50)
    await page.mouse.move(1246, 143);
    await page.waitForTimeout(50);
    await page.mouse.move(1256, 120);
    await page.waitForTimeout(100)
    await page.mouse.move(1265, 103);
    await page.waitForTimeout(50);
    await page.mouse.move(1271, 91);
    await page.waitForTimeout(52);
    await page.mouse.move(1274, 86);
    await page.waitForTimeout(56);
    await page.mouse.move(1274, 85);
    await page.waitForTimeout(51);
    await page.mouse.move(1276, 80);
    await page.waitForTimeout(51);
    await page.mouse.move(1276, 75);
    await page.waitForTimeout(55);
    await page.mouse.move(1276, 70);
    await page.waitForTimeout(366)
    await page.mouse.move(1276, 66);
    await page.waitForTimeout(51);
    await page.mouse.move(1276, 61);
    await page.waitForTimeout(65);
    await page.mouse.move(1276, 59);
    await page.waitForTimeout(485)
    await page.mouse.move(1276, 59);
    await page.mouse.down();
    await page.waitForTimeout(115)
    await page.evaluate(() => window.scroll(0, 2.6666667461395264));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 49.33333206176758));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 100.66666412353516));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 152.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 199.3333282470703));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 245.3333282470703));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 291.3333435058594));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 314.6666564941406));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 360.6666564941406));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 418.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 453.3333435058594));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 499.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 516.6666870117188));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 545.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 568.6666870117188));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 580));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 591.3333129882812));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0, 638));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 672.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 701.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 718.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 730));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 764.6666870117188));
    await page.waitForTimeout(59)
    await page.evaluate(() => window.scroll(0, 799.3333129882812));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 851.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 920.6666870117188));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 995.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(884.6666870117188, 2304)
    }, 'div.resize-sensor-shrink[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(57)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(10.666666984558105, 10)
    }, 'div.resize-sensor-expand[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 1089.3333740234375));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1124.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1190));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 1237.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1290.6666259765625));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1320.6666259765625));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 1374));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 1427.3333740234375));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 1492.6666259765625));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1546));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 1611.3333740234375));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1670.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1708));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1769.3333740234375));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 1800));
    await page.waitForTimeout(45)
    await page.evaluate(() => window.scroll(0, 1830.6666259765625));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 1880));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1942));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 2009.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2058.666748046875));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 2096));
    await page.waitForTimeout(51)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(884.6666870117188, 3368)
    }, 'div.resize-sensor-shrink[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(52)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(10.666666984558105, 10)
    }, 'div.resize-sensor-expand[style="pointer-events\\:\\ none\\;\\ position\\:\\ absolute\\;\\ left\\:\\ 0px\\;\\ top\\:\\ 0px\\;\\ right\\:\\ 0\\;\\ bottom\\:\\ 0\\;\\ overflow\\:\\ hidden\\;\\ z-index\\:\\ -1\\;\\ visibility\\:\\ hidden\\;\\ max-width\\:\\ 100\\%\\;"]');
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 2212));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 2268));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 2338));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2394));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2456.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2491.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2540.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2589.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2652));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2708));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2770.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2848));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2918));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2959.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3029.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3092));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3148));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3197.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3252.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3308.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3344));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 3378.666748046875));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 3420.666748046875));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 3455.333251953125));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 3490.666748046875));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 3532.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3553.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3567.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3609.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3651.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3693.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3728));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3770));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3784));
    await page.waitForTimeout(196)
    await page.mouse.up();
    await page.waitForTimeout(21)
    await page.mouse.move(1272, 471);
    await page.waitForTimeout(99);
    await page.mouse.move(1270, 471);
    await page.waitForTimeout(149)
    await page.mouse.move(1239, 471);
    await page.waitForTimeout(50);
    await page.mouse.move(1103, 469);
    await page.waitForTimeout(100)
    await page.mouse.move(858, 469);
    await page.waitForTimeout(50);
    await page.mouse.move(711, 463);
    await page.waitForTimeout(50);
    await page.mouse.move(683, 460);
    await page.waitForTimeout(50);
    await page.mouse.move(676, 457);
    await page.waitForTimeout(50);
    await page.mouse.move(670, 453);
    await page.waitForTimeout(250)
    await page.mouse.move(666, 450);
    await page.waitForTimeout(50);
    await page.mouse.move(664, 449);
    await page.waitForTimeout(58);
    await page.mouse.move(662, 445);
    await page.waitForTimeout(300)
    await page.mouse.move(661, 444);
    await page.waitForTimeout(58);
    await page.mouse.move(661, 443);
    await page.waitForTimeout(50);
    await page.mouse.move(661, 442);
    await page.waitForTimeout(108);
    await page.mouse.move(598, 371);
    await page.waitForTimeout(1282);
    await page.mouse.move(798, 375);
    await page.waitForTimeout(50);
    await page.mouse.move(809, 380);
    await page.waitForTimeout(400);
    await page.mouse.move(880, 406);
    await page.waitForTimeout(165)
    await page.mouse.move(666, 429);
    await page.waitForTimeout(101)
    await page.mouse.move(585, 364);
    await page.waitForTimeout(250);
    await page.mouse.move(582, 361);
    await page.waitForTimeout(50);
    await page.mouse.move(594, 359);
    await page.waitForTimeout(50);
    await page.mouse.move(624, 359);
    await page.waitForTimeout(50);
    await page.mouse.move(643, 357);
    await page.waitForTimeout(50);
    await page.mouse.move(651, 355);
    await page.waitForTimeout(58);
    await page.mouse.move(653, 355);
    await page.waitForTimeout(58);
    await page.mouse.move(657, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(662, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(668, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(674, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(682, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(692, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(706, 355);
    await page.waitForTimeout(50);
    await page.mouse.move(721, 357);
    await page.waitForTimeout(50);
    await page.mouse.move(736, 359);
    await page.waitForTimeout(55);
    await page.mouse.move(752, 361);
    await page.waitForTimeout(51);
    await page.mouse.move(753, 361);
    await page.waitForTimeout(57);
    await page.mouse.move(760, 363);
    await page.waitForTimeout(53);
    await page.mouse.move(780, 369);
    await page.waitForTimeout(1332)
    await page.mouse.move(820, 383);
    await page.waitForTimeout(50);
    await page.mouse.move(830, 385);
    await page.waitForTimeout(50);
    await page.mouse.move(841, 389);
    await page.waitForTimeout(50);
    await page.mouse.move(848, 389);
    await page.waitForTimeout(50);
    await page.mouse.move(852, 392);
    await page.waitForTimeout(50);
    await page.mouse.move(857, 395);
    await page.waitForTimeout(50);
    await page.mouse.move(864, 397);
    await page.waitForTimeout(400)
    await page.mouse.move(900, 418);
    await page.waitForTimeout(50);
    await page.mouse.move(914, 426);
    await page.waitForTimeout(100)
    await page.mouse.move(928, 437);
    await page.waitForTimeout(50)
    await page.mouse.move(940, 444);
    await page.waitForTimeout(50)
    await page.mouse.move(946, 447);
    await page.waitForTimeout(54);
    await page.mouse.move(948, 447);
    await page.waitForTimeout(50);
    await page.mouse.move(950, 447);
    await page.waitForTimeout(55);
    await page.mouse.move(961, 449);
    await page.waitForTimeout(52);
    await page.mouse.move(972, 450);
    await page.waitForTimeout(55);
    await page.mouse.move(1001, 454);
    await page.waitForTimeout(50);
    await page.mouse.move(1008, 455);
    await page.waitForTimeout(50);
    await page.mouse.move(1014, 455);
    await page.waitForTimeout(50);
    await page.mouse.move(1022, 457);
    await page.waitForTimeout(50);
    await page.mouse.move(1034, 459);
    await page.waitForTimeout(50);
    await page.mouse.move(1052, 461);
    await page.waitForTimeout(50);
    await page.mouse.move(1067, 463);
    await page.waitForTimeout(50);
    await page.mouse.move(1080, 463);
    await page.waitForTimeout(50);
    await page.mouse.move(1095, 463);
    await page.waitForTimeout(50);
    await page.mouse.move(1127, 463);
    await page.waitForTimeout(50);
    await page.mouse.move(1177, 462);
    await page.waitForTimeout(52);
    await page.mouse.move(1214, 460);
    await page.waitForTimeout(51);
    await page.mouse.move(1216, 460);
    await page.waitForTimeout(53);
    await page.mouse.move(1228, 455);
    await page.waitForTimeout(59);
    await page.mouse.move(1236, 447);
    await page.waitForTimeout(51);
    await page.mouse.move(1244, 435);
    await page.waitForTimeout(1082)
    await page.mouse.move(1258, 418);
    await page.waitForTimeout(50)
    await page.mouse.move(1263, 415);
    await page.waitForTimeout(50);
    await page.mouse.move(1266, 413);
    await page.waitForTimeout(50);
    await page.mouse.move(1270, 410);
    await page.waitForTimeout(53);
    await page.mouse.move(1272, 409);
    await page.waitForTimeout(55);
    await page.mouse.move(1275, 408);
    await page.waitForTimeout(56);
    await page.mouse.move(1276, 407);
    await page.waitForTimeout(457)
    await page.mouse.move(1276, 407);
    await page.mouse.down();
    await page.waitForTimeout(126)
    await page.evaluate(() => window.scroll(0, 3766.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3640.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3480));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 3074.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2767.333251953125));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2606.666748046875));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 2425.333251953125));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 2271.333251953125));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 2096.666748046875));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 1971.3333740234375));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 1887.3333740234375));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 1831.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1719.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1622));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1419.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1321.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1244.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1196));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1126));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1056));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 1000));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 888.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 846.6666870117188));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 783.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 728));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 672));
    await page.waitForTimeout(59)
    await page.evaluate(() => window.scroll(0, 608.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 518));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 483.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 427.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 371.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 336.6666564941406));
    await page.waitForTimeout(200)
    await page.evaluate(() => window.scroll(0, 315.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 210.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 29.33333396911621));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 1.3333333730697632));
    await page.waitForTimeout(424)
    await page.mouse.up();
    await page.waitForTimeout(24)
    await page.mouse.move(1279, 45);
    await page.waitForTimeout(117);
    await page.mouse.move(1279, 47);
    await page.waitForTimeout(50);
    await page.mouse.move(1268, 63);
    await page.waitForTimeout(217)
    await page.mouse.move(1234, 117);
    await page.waitForTimeout(51)
    await page.mouse.move(1200, 157);
    await page.waitForTimeout(57);
    await page.mouse.move(1179, 173);
    await page.waitForTimeout(758);
    await page.mouse.move(930, 179);
    await page.waitForTimeout(50);
    await page.mouse.move(953, 163);
    await page.waitForTimeout(109)
    await page.mouse.move(1124, 209);
    await page.waitForTimeout(54);
    await page.mouse.move(1075, 233);
    await page.waitForTimeout(106)
    await page.mouse.move(1007, 241);
    await page.waitForTimeout(50);
    await page.mouse.move(962, 241);
    await page.waitForTimeout(50);
    await page.mouse.move(914, 231);
    await page.waitForTimeout(50);
    await page.mouse.move(868, 223);
    await page.waitForTimeout(200)
    await page.mouse.move(850, 221);
    await page.waitForTimeout(83);
    await page.mouse.move(850, 218);
    await page.waitForTimeout(50);
    await page.mouse.move(864, 205);
    await page.waitForTimeout(184)
    await page.mouse.move(885, 194);
    await page.waitForTimeout(55);
    await page.mouse.move(890, 191);
    await page.waitForTimeout(51);
    await page.mouse.move(899, 187);
    await page.waitForTimeout(56);
    await page.mouse.move(908, 187);
    await page.waitForTimeout(322)
    await page.mouse.move(966, 152);
    await page.waitForTimeout(53)
    await page.mouse.move(982, 136);
    await page.waitForTimeout(57)
    await page.mouse.move(1012, 113);
    await page.waitForTimeout(50)
    await page.mouse.move(1022, 98);
    await page.waitForTimeout(50);
    await page.mouse.move(1012, 89);
    await page.waitForTimeout(102)
    await page.mouse.move(962, 77);
    await page.waitForTimeout(51)
    await page.mouse.move(948, 76);
    await page.waitForTimeout(56)
    await page.mouse.move(828, 66);
    await page.waitForTimeout(50);
    await page.mouse.move(718, 57);
    await page.waitForTimeout(108)
    await page.mouse.move(493, 25);
    await browser.close()
})
