import {chromium} from "playwright";


describe(`Local testing of generated playwright scripts`, () => {
    jest.setTimeout(300000);

    test('Login', async () => {
        const browser = await chromium.launch({headless: false, slowMo: 0, devtools: true})
        const context = await browser.newContext()
        await context.addCookies([{
            name: 'user',
            value: 'c5d32a3d-b141-59d0-2cc5-cfcb2dc17694',
            url: 'https://www.demoblaze.com/index.html'
        }])
        const page = await context.newPage()
        let ts = 1648057416207

        await page.route('https://hls.demoblaze.com/index.m3u8', (route) => {

            if (ts >= (1648057416211 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "binary/octet-stream",
                    headers: {
                        "cache-control": "public, max-age=3600",
                        "content-length": "501",
                        "content-type": "binary/octet-stream",
                        "date": "Wed, 23 Mar 2022 17:43:34 GMT",
                        "expires": "Wed, 23 Mar 2022 18:43:34 GMT",
                        "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
                        "server": "UploadServer",
                        "x-guploader-uploadid": "ADPycdukaPq7Klt0Kl2gGoQK5x5hHtTahjIQgp6ejSVAqsoTCQd06VFDg3nOFrPdVoMHm63FM__9Sqi-QgOZvT4S27ofDxF3KA",
                        "access-control-allow-origin": "*"
                    },
                    body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"
                })
            }

            if (ts >= (1648057423076 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "binary/octet-stream",
                    headers: {
                        "cache-control": "public, max-age=3600",
                        "content-length": "501",
                        "content-type": "binary/octet-stream",
                        "date": "Wed, 23 Mar 2022 17:43:34 GMT",
                        "expires": "Wed, 23 Mar 2022 18:43:34 GMT",
                        "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
                        "server": "UploadServer",
                        "x-guploader-uploadid": "ADPycdukaPq7Klt0Kl2gGoQK5x5hHtTahjIQgp6ejSVAqsoTCQd06VFDg3nOFrPdVoMHm63FM__9Sqi-QgOZvT4S27ofDxF3KA",
                        "access-control-allow-origin": "*"
                    },
                    body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"
                })
            }
        })

        await page.route('https://hls.demoblaze.com/about_demo_hls_600k.m3u8', (route) => {

            if (ts >= (1648057416225 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "binary/octet-stream",
                    headers: {
                        "cache-control": "public, max-age=3600",
                        "content-length": "5302",
                        "content-type": "binary/octet-stream",
                        "date": "Wed, 23 Mar 2022 17:43:34 GMT",
                        "expires": "Wed, 23 Mar 2022 18:43:34 GMT",
                        "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
                        "server": "UploadServer",
                        "x-guploader-uploadid": "ADPycduWcPtiKZF0IIaTuZ5fFh6i_EdbJpGFRw4Eu78A97CjchQfIOzfGFgUXJb-yadyRpC1tLxssID9XnO3LJT605w",
                        "access-control-allow-origin": "*"
                    },
                    body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
                })
            }

            if (ts >= (1648057423076 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "binary/octet-stream",
                    headers: {
                        "cache-control": "public, max-age=3600",
                        "content-length": "5302",
                        "content-type": "binary/octet-stream",
                        "date": "Wed, 23 Mar 2022 17:43:34 GMT",
                        "expires": "Wed, 23 Mar 2022 18:43:34 GMT",
                        "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
                        "server": "UploadServer",
                        "x-guploader-uploadid": "ADPycduWcPtiKZF0IIaTuZ5fFh6i_EdbJpGFRw4Eu78A97CjchQfIOzfGFgUXJb-yadyRpC1tLxssID9XnO3LJT605w",
                        "access-control-allow-origin": "*"
                    },
                    body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
                })
            }
        })

        await page.route('https://api.demoblaze.com/login', (route) => {

            if (ts >= (1648057422216 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "application/json",
                    headers: {
                        "cache-control": "private",
                        "content-length": "57",
                        "content-type": "application/json",
                        "access-control-allow-origin": "*"
                    },
                    //body: "\"Auth_token: Y2lhbzE2NDg2NTc=\"\n"
                    body: "Login will fail"
                })
            }

        })
        await page.route('https://api.demoblaze.com/check', (route) => {

            if (ts >= (1648057423076 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "application/json",
                    headers: {
                        "cache-control": "private",
                        "content-length": "101",
                        "content-type": "application/json",
                        "access-control-allow-origin": "*"
                    },
                    body: "{\"Item\":{\"expiration\":1648657,\"token\":\"Y2lhbzE2NDg2NTc=\",\"username\":\"ciao\"}}\n"
                })
            }
        })

        await page.route('https://api.demoblaze.com/entries', (route) => {

            if (ts >= (1648057423076 - 10)) {
                route.fulfill({
                    status: 200,
                    contentType: "application/json",
                    headers: {
                        "cache-control": "private",
                        "content-length": "1055",
                        "content-type": "application/json",
                        "access-control-allow-origin": "*"
                    },
                    body: "This is a mocked body response"
                })
            }
        })
        ts = 1648057416207
        await page.goto('https://www.demoblaze.com/index.html');
        await page.waitForTimeout(4)
        ts = 1648057416211
        const sessionStorage1648057416211 = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648057416202}"}');
        await page.evaluate(sessionStorage1648057416211 => {
            for (const key in sessionStorage1648057416211) {
                window.sessionStorage.setItem(key, sessionStorage1648057416211[key]);
            }
        }, sessionStorage1648057416211);
        await page.waitForTimeout(0)
        ts = 1648057416211
        const localStorage1648057416211 = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648050057200,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
        await page.evaluate(localStorage1648057416211 => {
            for (const key in localStorage1648057416211) {
                window.localStorage.setItem(key, localStorage1648057416211[key]);
            }
        }, localStorage1648057416211);
        await page.waitForTimeout(11)
        await page.waitForTimeout(3)
        ts = 1648057416225
        await page.mouse.move(1324, 58);
        await page.waitForTimeout(8)
        await page.waitForTimeout(45)
        ts = 1648057416278
        await page.mouse.move(1318, 56);
        await page.waitForTimeout(55)
        ts = 1648057416333
        await page.mouse.move(1302, 51);
        await page.mouse.move(1286, 38);
        await page.waitForTimeout(79)
        ts = 1648057416412
        await page.setViewportSize({width: 1920, height: 979});
        await page.waitForTimeout(736)
        ts = 1648057417148
        await page.mouse.move(1286, 38);
        await page.mouse.down();
        await page.waitForTimeout(259)
        ts = 1648057417407
        await page.mouse.up();
        await page.waitForTimeout(284)
        ts = 1648057417691
        await page.mouse.move(1284, 38);
        await page.mouse.move(1259, 39);
        await page.waitForTimeout(101)
        ts = 1648057417792
        await page.mouse.move(1189, 46);
        await page.mouse.move(869, 78);
        await page.waitForTimeout(265)
        ts = 1648057418057
        await page.mouse.move(848, 97);
        await page.waitForTimeout(51)
        ts = 1648057418108
        await page.mouse.move(837, 110);
        await page.mouse.move(833, 114);
        await page.waitForTimeout(221)
        ts = 1648057418329
        await page.mouse.move(816, 153);
        await page.mouse.move(816, 164);
        await page.waitForTimeout(216)
        ts = 1648057418545
        await page.mouse.move(816, 164);
        await page.mouse.down();
        await page.waitForTimeout(127)
        ts = 1648057418672
        await page.mouse.up();
        await page.waitForTimeout(918)
        ts = 1648057419590
        await page.keyboard.down('KeyC');
        await page.waitForTimeout(134)
        ts = 1648057419724
        await page.keyboard.down('KeyI');
        await page.waitForTimeout(5)
        ts = 1648057419729
        await page.keyboard.up('KeyC');
        await page.waitForTimeout(119)
        ts = 1648057419848
        await page.keyboard.down('KeyA');
        await page.waitForTimeout(7)
        ts = 1648057419855
        await page.keyboard.up('KeyI');
        await page.waitForTimeout(93)
        ts = 1648057419948
        await page.keyboard.up('KeyA');
        await page.waitForTimeout(36)
        ts = 1648057419984
        await page.keyboard.down('KeyO');
        await page.waitForTimeout(114)
        ts = 1648057420098
        await page.keyboard.up('KeyO');
        await page.waitForTimeout(180)
        ts = 1648057420278
        await page.keyboard.down('Tab');
        await page.waitForTimeout(120)
        ts = 1648057420398
        await page.keyboard.up('Tab');
        await page.waitForTimeout(251)
        ts = 1648057420649
        await page.keyboard.down('KeyC');
        await page.waitForTimeout(122)
        ts = 1648057420771
        await page.keyboard.up('KeyC');
        await page.waitForTimeout(7)
        ts = 1648057420778
        await page.keyboard.down('KeyI');
        await page.waitForTimeout(112)
        ts = 1648057420890
        await page.keyboard.down('KeyA');
        await page.waitForTimeout(17)
        ts = 1648057420907
        await page.keyboard.up('KeyI');
        await page.waitForTimeout(86)
        ts = 1648057420993
        await page.keyboard.up('KeyA');
        await page.waitForTimeout(20)
        ts = 1648057421013
        await page.keyboard.down('KeyO');
        await page.waitForTimeout(98)
        ts = 1648057421111
        await page.keyboard.up('KeyO');
        await page.waitForTimeout(494)
        ts = 1648057421605
        await page.mouse.move(813, 169);
        await page.waitForTimeout(50)
        ts = 1648057421655
        await page.mouse.move(906, 249);
        await page.waitForTimeout(50)
        ts = 1648057421705
        await page.mouse.move(968, 290);
        await page.waitForTimeout(50)
        ts = 1648057421755
        await page.mouse.move(1116, 383);
        await page.mouse.move(1153, 390);
        await page.waitForTimeout(152)
        ts = 1648057421907
        await page.mouse.move(1114, 417);
        await page.mouse.move(1129, 420);
        await page.waitForTimeout(250)
        ts = 1648057422157
        await page.mouse.move(1153, 390);
        await page.mouse.down();
        await page.waitForTimeout(59)
        ts = 1648057422216
        await page.mouse.up();
        await page.waitForTimeout(3)
        await page.waitForTimeout(468)
        ts = 1648057422687
        await page.mouse.move(1151, 388);
        await page.mouse.move(1134, 378);
        await page.waitForTimeout(386)
        ts = 1648057423073
        await page.goto('https://www.demoblaze.com/index.html');
        await page.waitForTimeout(2)
        ts = 1648057423075
        const sessionStorage1648057423075 = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648057416202}"}');
        await page.evaluate(sessionStorage1648057423075 => {
            for (const key in sessionStorage1648057423075) {
                window.sessionStorage.setItem(key, sessionStorage1648057423075[key]);
            }
        }, sessionStorage1648057423075);
        await page.waitForTimeout(0)
        ts = 1648057423075
        const localStorage1648057423075 = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648050057200,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
        await page.evaluate(localStorage1648057423075 => {
            for (const key in localStorage1648057423075) {
                window.localStorage.setItem(key, localStorage1648057423075[key]);
            }
        }, localStorage1648057423075);
        await page.waitForTimeout(1)
        ts = 1648057423076
        await page.mouse.move(980, 291);
        await page.mouse.move(1165, 261);
        await page.waitForTimeout(143)
        await page.waitForTimeout(3)
        await page.waitForTimeout(49)
        await page.waitForTimeout(11)
        await page.waitForTimeout(112)
        ts = 1648057423394
        await page.setViewportSize({width: 1920, height: 979});
        await page.waitForTimeout(688)
        ts = 1648057424082
        await context.addCookies([{
            name: 'user',
            value: 'c5d32a3d-b141-59d0-2cc5-cfcb2dc17694',
            url: 'https://www.demoblaze.com/index.html'
        }, {name: 'tokenp_', value: 'Y2lhbzE2NDg2NTc=', url: 'https://www.demoblaze.com/index.html'}])
        await page.waitForTimeout(504)
        ts = 1648057424586
        await page.mouse.move(1353, 284);
        await page.mouse.move(1417, 291);
        await page.waitForTimeout(832)
        ts = 1648057425418
        await page.mouse.move(1462, 123);
        await page.mouse.move(1254, 58);
        await page.waitForTimeout(50)
        ts = 1648057425468
        await page.mouse.move(1414, 96);
        await page.mouse.move(1326, 176);
        await page.waitForTimeout(574)
        ts = 1648057426042
        await page.mouse.wheel(0, 1);
        await page.waitForTimeout(59)
        ts = 1648057426101
        await page.mouse.wheel(0, 24);
        await page.waitForTimeout(50)
        ts = 1648057426151
        await page.mouse.wheel(0, 78);
        await page.waitForTimeout(50)
        ts = 1648057426201
        await page.mouse.wheel(0, 95);
        await page.waitForTimeout(60)
        ts = 1648057426261
        await page.mouse.wheel(0, 100);
        await page.waitForTimeout(323)
        ts = 1648057426584
        await page.mouse.wheel(0, 99);
        await page.waitForTimeout(50)
        ts = 1648057426634
        await page.mouse.wheel(0, 77);
        await page.waitForTimeout(50)
        ts = 1648057426684
        await page.mouse.wheel(0, 35);
        await page.waitForTimeout(50)
        ts = 1648057426734
        await page.mouse.wheel(0, 5);
        await page.waitForTimeout(51)
        ts = 1648057426785
        await page.mouse.wheel(0, 0);
        await page.waitForTimeout(32)
        ts = 1648057426817
        await page.mouse.move(1286, 119);
        await page.mouse.move(1265, 84);
        await page.waitForTimeout(250)
        ts = 1648057427067
        await page.mouse.move(1250, 50);
        await browser.close()
    })
})