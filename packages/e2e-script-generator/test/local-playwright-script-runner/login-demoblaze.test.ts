import {chromium} from "playwright"

jest.setTimeout(3000 * 100)
test("Login on https://www.demoblaze.com/index.html", async () => {
    let localStorage;
    let sessionStorage;
    let selector;
    let element;
    let text;
    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    await context.addCookies([{
        name: 'user',
        value: '27f9a36c-f07b-ee5f-d1e5-b731aec5bcfc',
        url: 'https://www.demoblaze.com/index.html'
    }])
    const page = await context.newPage()
    let requests: any[] = []
    requests.push({
        url: `https://hls.demoblaze.com/index.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "501",
            "content-type": "binary/octet-stream",
            "date": "Sat, 02 Apr 2022 14:58:56 GMT",
            "expires": "Sat, 02 Apr 2022 15:58:56 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdtfbVP4Rf1rG-Eml9EojnlDZEpJI346ch6sliXv7k-veMF1bLBS6E6fRXzqMaBbTGkQnC8MWYBtXfc-6HnB144ZsMRmEw",
            "x-unit-story": "1648912157982",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "5302",
            "content-type": "binary/octet-stream",
            "date": "Sat, 02 Apr 2022 14:58:56 GMT",
            "expires": "Sat, 02 Apr 2022 15:58:56 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycducS6U1ySj_GAxh4cARWpJHDO7as65HRXEHLGN-Zqt_bER_a33O8g6vrH-al2IMRbY8YtwHqrMWbK5aiOO9sFCMay3b_Q",
            "x-unit-story": "1648912157991",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
    })
    requests.push({
        url: `https://api.demoblaze.com/login`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "57",
            "content-type": "application/json",
            "x-unit-story": "1648912170109",
            "access-control-allow-origin": "*"
        },
        body: "\"Auth_token: Y2lhbzE2NDk1MTI=\"\n"
    })
    requests.push({
        url: `https://www.demoblaze.com/config.json`,
        status: 200,
        contentType: "application/json",
        headers: {
            "age": "0",
            "cache-control": "public, max-age=10",
            "content-encoding": "gzip",
            "content-type": "application/json",
            "date": "Sat, 02 Apr 2022 15:09:31 GMT",
            "etag": "\"TTo8pA\"",
            "expires": "Sat, 02 Apr 2022 15:09:41 GMT",
            "server": "Google Frontend",
            "x-cloud-trace-context": "64a4dd24d8ba3eae7e229eab4f466540",
            "x-unit-story": "1648912170956",
            "access-control-allow-origin": "*"
        },
        body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"
    })
    requests.push({
        url: `https://api.demoblaze.com/check`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "101",
            "content-type": "application/json",
            "x-unit-story": "1648912171107",
            "access-control-allow-origin": "*"
        },
        body: "{\"Item\":{\"expiration\":1649512,\"token\":\"Y2lhbzE2NDk1MTI=\",\"username\":\"ciao\"}}\n"
    })
    requests.push({
        url: `https://api.demoblaze.com/entries`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "1055",
            "content-type": "application/json",
            "x-unit-story": "1648912171108",
            "access-control-allow-origin": "*"
        },
        body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/index.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "501",
            "content-type": "binary/octet-stream",
            "date": "Sat, 02 Apr 2022 14:58:56 GMT",
            "expires": "Sat, 02 Apr 2022 15:58:56 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdtfbVP4Rf1rG-Eml9EojnlDZEpJI346ch6sliXv7k-veMF1bLBS6E6fRXzqMaBbTGkQnC8MWYBtXfc-6HnB144ZsMRmEw",
            "x-unit-story": "1648912171126",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "5302",
            "content-type": "binary/octet-stream",
            "date": "Sat, 02 Apr 2022 14:58:56 GMT",
            "expires": "Sat, 02 Apr 2022 15:58:56 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycducS6U1ySj_GAxh4cARWpJHDO7as65HRXEHLGN-Zqt_bER_a33O8g6vrH-al2IMRbY8YtwHqrMWbK5aiOO9sFCMay3b_Q",
            "x-unit-story": "1648912171131",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
    })
    requests.push({
        url: `https://api.demoblaze.com/entries`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "1060",
            "content-type": "application/json",
            "x-unit-story": "1648912175103",
            "access-control-allow-origin": "*"
        },
        body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/index.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "501",
            "content-type": "binary/octet-stream",
            "date": "Sat, 02 Apr 2022 14:58:56 GMT",
            "expires": "Sat, 02 Apr 2022 15:58:56 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdtfbVP4Rf1rG-Eml9EojnlDZEpJI346ch6sliXv7k-veMF1bLBS6E6fRXzqMaBbTGkQnC8MWYBtXfc-6HnB144ZsMRmEw",
            "x-unit-story": "1648912175127",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "5302",
            "content-type": "binary/octet-stream",
            "date": "Sat, 02 Apr 2022 14:58:56 GMT",
            "expires": "Sat, 02 Apr 2022 15:58:56 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycducS6U1ySj_GAxh4cARWpJHDO7as65HRXEHLGN-Zqt_bER_a33O8g6vrH-al2IMRbY8YtwHqrMWbK5aiOO9sFCMay3b_Q",
            "x-unit-story": "1648912175133",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
    })
    await page.route('**/*', (route) => {
        let responseOptions = {} as any
        const index = requests.findIndex(r => r.url == route.request().url())
        if (index >= 0) {
            responseOptions = requests.splice(index, 1)[0]
            route.fulfill(responseOptions)
        } else {
            route.continue()
        }
    });
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(1)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648912157984}"}');
    await page.evaluate(sessionStorage => {
        for (const key in sessionStorage) {
            window.sessionStorage.setItem(key, sessionStorage[key]);
        }
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648911538795,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
        for (const key in localStorage) {
            window.localStorage.setItem(key, localStorage[key]);
        }
    }, localStorage);
    await page.waitForTimeout(7)
    await page.waitForTimeout(9)
    await page.waitForTimeout(10)
    await page.mouse.move(1042, 74);
    await page.waitForTimeout(1164)
    await page.mouse.move(1262, 83);
    await page.waitForTimeout(33)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(1182)
    await page.mouse.move(1271, 77);
    await page.waitForTimeout(679)
    await page.mouse.move(1275, 70);
    await page.waitForTimeout(888)
    await page.mouse.move(1275, 70);
    await page.mouse.down();
    await page.waitForTimeout(290)
    await page.evaluate(() => window.scroll(0, 1.3333333730697632));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 11.333333015441895));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 15.333333015441895));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 22));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 28));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 38.66666793823242));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 48.66666793823242));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0, 63.33333206176758));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 78));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 88.66666412353516));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 94.66666412353516));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 105.33333587646484));
    await page.waitForTimeout(64)
    await page.evaluate(() => window.scroll(0, 111.33333587646484));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 115.33333587646484));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 122));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 128));
    await page.waitForTimeout(75)
    await page.mouse.up();
    await page.waitForTimeout(21)
    await page.mouse.move(1274, 112);
    await page.waitForTimeout(50)
    await page.mouse.move(1270, 113);
    await page.waitForTimeout(100)
    await page.mouse.move(1256, 114);
    await page.waitForTimeout(202)
    await page.mouse.move(1125, 134);
    await page.waitForTimeout(252)
    await page.mouse.move(1110, 141);
    await page.waitForTimeout(203)
    await page.mouse.move(1084, 141);
    await page.waitForTimeout(847)
    await page.evaluate(() => window.scroll(0, 126.66666412353516));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 102.66666412353516));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 74));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 31.33333396911621));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 28));
    await page.waitForTimeout(98)
    await page.evaluate(() => window.scroll(0, 26.66666603088379));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 20.66666603088379));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 4.666666507720947));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 0));
    await page.waitForTimeout(98)
    await page.mouse.move(1080, 139);
    await page.waitForTimeout(201)
    await page.mouse.move(999, 77);
    await page.waitForTimeout(250)
    await page.mouse.move(993, 70);
    await page.waitForTimeout(50)
    await page.mouse.move(989, 61);
    await page.waitForTimeout(100)
    await page.mouse.move(988, 53);
    await page.waitForTimeout(450)
    await page.mouse.move(997, 32);
    await page.waitForTimeout(1170)
    await page.mouse.move(997, 32);
    await page.mouse.down();
    await page.waitForTimeout(44)
    await page.mouse.up();
    await page.waitForTimeout(285)
    await page.mouse.move(995, 32);
    await page.waitForTimeout(150)
    await page.mouse.move(899, 61);
    await page.waitForTimeout(202)
    await page.mouse.move(821, 91);
    await page.waitForTimeout(0)

    await page.waitForTimeout(51)
    await page.mouse.move(772, 113);
    await page.waitForTimeout(103)
    await page.mouse.move(716, 141);
    await page.waitForTimeout(154)
    await page.mouse.move(694, 151);
    await page.waitForTimeout(544)
    await page.mouse.move(672, 161);
    await page.waitForTimeout(483)
    await page.mouse.move(672, 161);
    await page.mouse.down();
    await page.waitForTimeout(59)
    await page.mouse.up();
    await page.waitForTimeout(316)
    await page.mouse.move(668, 161);
    await page.waitForTimeout(251)
    await page.mouse.move(569, 187);
    await page.waitForTimeout(801)
    selector = 'input#loginusername.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('ciao' !== text) {
            await page.fill(selector, 'ciao')
        }
    }
    await page.waitForTimeout(199)
    await page.mouse.move(504, 252);
    await page.waitForTimeout(516)
    await page.mouse.move(487, 283);
    await page.waitForTimeout(306)
    await page.mouse.move(487, 284);
    await page.mouse.down();
    await page.waitForTimeout(43)
    await page.mouse.up();
    await page.waitForTimeout(924)
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(9)
    selector = 'input#loginpassword.form-control[type="password"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('*' !== text) {
            await page.fill(selector, '*')
        }
    }
    await page.waitForTimeout(123)
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(4)
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(6)
    selector = 'input#loginpassword.form-control[type="password"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('**' !== text) {
            await page.fill(selector, '**')
        }
    }
    await page.waitForTimeout(102)
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(16)
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(16)
    selector = 'input#loginpassword.form-control[type="password"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('***' !== text) {
            await page.fill(selector, '***')
        }
    }
    await page.waitForTimeout(75)
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(24)
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(1)
    selector = 'input#loginpassword.form-control[type="password"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('****' !== text) {
            await page.fill(selector, '****')
        }
    }
    await page.waitForTimeout(84)
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(482)
    await page.mouse.move(494, 289);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(665, 345);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(858, 365);
    await page.waitForTimeout(366)
    await page.mouse.move(876, 385);
    await page.waitForTimeout(51)
    await page.mouse.move(908, 374);
    await page.waitForTimeout(265)
    await page.mouse.move(904, 385);
    await page.waitForTimeout(365)
    await page.mouse.move(864, 385);
    await page.waitForTimeout(100)
    await page.mouse.move(851, 387);
    await page.waitForTimeout(151)
    await page.mouse.move(849, 387);
    await page.waitForTimeout(183)
    await page.mouse.move(845, 389);
    await page.waitForTimeout(41)
    await page.mouse.move(848, 387);
    await page.mouse.down();
    await page.waitForTimeout(8)
    selector = 'input#loginpassword.form-control[type="password"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('****' !== text) {
            await page.fill(selector, '****')
        }
    }
    await page.waitForTimeout(38)
    await page.mouse.up();
    await page.waitForTimeout(1)
    await page.waitForTimeout(659)
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(2)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648912157984}"}');
    await page.evaluate(sessionStorage => {
        for (const key in sessionStorage) {
            window.sessionStorage.setItem(key, sessionStorage[key]);
        }
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648911538795,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
        for (const key in localStorage) {
            window.localStorage.setItem(key, localStorage[key]);
        }
    }, localStorage);
    await page.waitForTimeout(186)
    await page.waitForTimeout(151)
    await page.waitForTimeout(1)
    await page.waitForTimeout(18)
    await page.waitForTimeout(5)
    await page.waitForTimeout(38)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(201)
    await page.mouse.move(843, 389);
    await page.waitForTimeout(51)
    await page.mouse.move(843, 385);
    await page.waitForTimeout(102)
    await page.mouse.move(844, 371);
    await page.waitForTimeout(903)
    await page.mouse.move(964, 149);
    await page.waitForTimeout(299)
    await context.addCookies([{
        name: 'user',
        value: '27f9a36c-f07b-ee5f-d1e5-b731aec5bcfc',
        url: 'https://www.demoblaze.com/index.html'
    }, {name: 'tokenp_', value: 'Y2lhbzE2NDk1MTI=', url: 'https://www.demoblaze.com/index.html'}])
    await page.waitForTimeout(655)
    await page.mouse.move(996, 114);
    await page.waitForTimeout(203)
    await page.mouse.move(1024, 81);
    await page.waitForTimeout(254)
    await page.mouse.move(1024, 74);
    await page.waitForTimeout(51)
    await page.mouse.move(1024, 69);
    await page.waitForTimeout(270)
    await page.mouse.move(1023, 65);
    await page.waitForTimeout(503)
    await page.mouse.move(971, 57);
    await page.waitForTimeout(554)
    await page.mouse.move(968, 55);
    await page.waitForTimeout(206)
    await page.mouse.move(960, 39);
    await page.waitForTimeout(1502)
    await page.mouse.move(960, 39);
    await page.mouse.down();
    await page.waitForTimeout(30)
    await page.mouse.up();
    await page.waitForTimeout(65)
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(1)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648912157984}"}');
    await page.evaluate(sessionStorage => {
        for (const key in sessionStorage) {
            window.sessionStorage.setItem(key, sessionStorage[key]);
        }
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648911538795,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
        for (const key in localStorage) {
            window.localStorage.setItem(key, localStorage[key]);
        }
    }, localStorage);
    await page.waitForTimeout(1)
    await page.waitForTimeout(24)
    await page.waitForTimeout(6)
    await page.waitForTimeout(59)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(474)
    await page.mouse.move(962, 39);
    await page.waitForTimeout(0)

    await page.waitForTimeout(49)
    await page.mouse.move(990, 35);
    await page.waitForTimeout(202)
    await page.mouse.move(1031, 30);
    await page.waitForTimeout(253)
    await page.mouse.move(1044, 25);
    await page.waitForTimeout(50)
    await page.mouse.move(1056, 21);
    await page.waitForTimeout(100)
    await page.mouse.move(1075, 12);
    await page.waitForTimeout(70)
    await page.mouse.move(1099, 0);
    await page.waitForTimeout(34)
    await context.addCookies([{
        name: 'user',
        value: '27f9a36c-f07b-ee5f-d1e5-b731aec5bcfc',
        url: 'https://www.demoblaze.com/index.html'
    }])
    await browser.close()
})
