import {chromium} from "playwright"

jest.setTimeout(3000 * 100)
test("Product-purchase on https://www.demoblaze.com/index.html", async () => {
    let localStorage;
    let sessionStorage;
    let selector;
    let element;
    let text;
    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    await context.addCookies([{
        name: 'user',
        value: 'e8dd9e79-aa42-ab15-1517-e6529af9f914',
        url: 'https://www.demoblaze.com/index.html'
    }])
    const page = await context.newPage()
    let requests: any[] = []
    requests.push({
        url: `https://www.demoblaze.com/config.json`,
        status: 200,
        contentType: "application/json",
        headers: {
            "age": "0",
            "cache-control": "public, max-age=10",
            "content-encoding": "gzip",
            "content-type": "application/json",
            "date": "Sun, 03 Apr 2022 10:41:55 GMT",
            "etag": "\"TTo8pA\"",
            "expires": "Sun, 03 Apr 2022 10:42:05 GMT",
            "server": "Google Frontend",
            "x-cloud-trace-context": "648c3b5c2def45a753a1219478d3bb14",
            "x-unit-story": "1648982514725",
            "access-control-allow-origin": "*"
        },
        body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"
    })
    requests.push({
        url: `https://api.demoblaze.com/entries`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "1055",
            "content-type": "application/json",
            "x-unit-story": "1648982514965",
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
            "date": "Sun, 03 Apr 2022 10:41:42 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:42 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdteilDnukEHQUOe0f5yIO0OtdokieI4u5hpJ5JdTFzRbX4RgjmBMDnDkQadovxobLvw6XJlUwm8JLtWM-kbgYoVoqxtLw",
            "x-unit-story": "1648982514997",
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
            "date": "Sun, 03 Apr 2022 10:41:43 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:43 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycduT-PYx2hWkSWE5yDk-2C_TGOE3RnSmHTzLdidvp8WZEiwwGooMPt_r8VUu09mxEK20g7tudjXZ-hHUVPL7baY5jUXwzg",
            "x-unit-story": "1648982515006",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
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
            "date": "Sun, 03 Apr 2022 10:41:55 GMT",
            "etag": "\"TTo8pA\"",
            "expires": "Sun, 03 Apr 2022 10:42:05 GMT",
            "server": "Google Frontend",
            "x-cloud-trace-context": "648c3b5c2def45a753a1219478d3bb14",
            "x-unit-story": "1648982523885",
            "access-control-allow-origin": "*"
        },
        body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"
    })
    requests.push({
        url: `https://api.demoblaze.com/view`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "261",
            "content-type": "application/json",
            "x-unit-story": "1648982523895",
            "access-control-allow-origin": "*"
        },
        body: "{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"}\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/index.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "501",
            "content-type": "binary/octet-stream",
            "date": "Sun, 03 Apr 2022 10:41:42 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:42 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdteilDnukEHQUOe0f5yIO0OtdokieI4u5hpJ5JdTFzRbX4RgjmBMDnDkQadovxobLvw6XJlUwm8JLtWM-kbgYoVoqxtLw",
            "x-unit-story": "1648982523970",
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
            "date": "Sun, 03 Apr 2022 10:41:43 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:43 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycduT-PYx2hWkSWE5yDk-2C_TGOE3RnSmHTzLdidvp8WZEiwwGooMPt_r8VUu09mxEK20g7tudjXZ-hHUVPL7baY5jUXwzg",
            "x-unit-story": "1648982523979",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
    })
    requests.push({
        url: `https://api.demoblaze.com/addtocart`,
        status: 200,
        contentType: "text/html; charset=utf-8",
        headers: {
            "content-length": "0",
            "content-type": "text/html; charset=utf-8",
            "x-unit-story": "1648982526575",
            "access-control-allow-origin": "*"
        },
        body: ""
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
            "date": "Sun, 03 Apr 2022 10:42:10 GMT",
            "etag": "\"TTo8pA\"",
            "expires": "Sun, 03 Apr 2022 10:42:20 GMT",
            "server": "Google Frontend",
            "x-cloud-trace-context": "8be01e101f8942271755c2aced6b897e",
            "x-unit-story": "1648982530441",
            "access-control-allow-origin": "*"
        },
        body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"
    })
    requests.push({
        url: `https://api.demoblaze.com/viewcart`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "135",
            "content-type": "application/json",
            "x-unit-story": "1648982530592",
            "access-control-allow-origin": "*"
        },
        body: "{\"Items\":[{\"cookie\":\"user=e8dd9e79-aa42-ab15-1517-e6529af9f914\",\"id\":\"bc2370bc-51b9-af57-1b68-2443d363b47d\",\"prod_id\":8}]}\n"
    })
    requests.push({
        url: `https://hls.demoblaze.com/index.m3u8`,
        status: 200,
        contentType: "binary/octet-stream",
        headers: {
            "cache-control": "public, max-age=3600",
            "content-length": "501",
            "content-type": "binary/octet-stream",
            "date": "Sun, 03 Apr 2022 10:41:42 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:42 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdteilDnukEHQUOe0f5yIO0OtdokieI4u5hpJ5JdTFzRbX4RgjmBMDnDkQadovxobLvw6XJlUwm8JLtWM-kbgYoVoqxtLw",
            "x-unit-story": "1648982530628",
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
            "date": "Sun, 03 Apr 2022 10:41:43 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:43 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycduT-PYx2hWkSWE5yDk-2C_TGOE3RnSmHTzLdidvp8WZEiwwGooMPt_r8VUu09mxEK20g7tudjXZ-hHUVPL7baY5jUXwzg",
            "x-unit-story": "1648982530638",
            "access-control-allow-origin": "*"
        },
        body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"
    })
    requests.push({
        url: `https://api.demoblaze.com/view`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "261",
            "content-type": "application/json",
            "x-unit-story": "1648982531041",
            "access-control-allow-origin": "*"
        },
        body: "{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"}\n"
    })
    requests.push({
        url: `https://api.demoblaze.com/deletecart`,
        status: 200,
        contentType: "application/json",
        headers: {
            "content-length": "16",
            "content-type": "application/json",
            "x-unit-story": "1648982564424",
            "access-control-allow-origin": "*"
        },
        body: "\"Item deleted.\"\n"
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
            "date": "Sun, 03 Apr 2022 10:42:46 GMT",
            "etag": "\"TTo8pA\"",
            "expires": "Sun, 03 Apr 2022 10:42:56 GMT",
            "server": "Google Frontend",
            "x-cloud-trace-context": "08c7d6054abfa2041f8b193a9639d3d9",
            "x-unit-story": "1648982566197",
            "access-control-allow-origin": "*"
        },
        body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"
    })
    requests.push({
        url: `https://api.demoblaze.com/entries`,
        status: 200,
        contentType: "application/json",
        headers: {
            "cache-control": "private",
            "content-length": "1055",
            "content-type": "application/json",
            "x-unit-story": "1648982566351",
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
            "date": "Sun, 03 Apr 2022 10:41:42 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:42 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:35 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycdteilDnukEHQUOe0f5yIO0OtdokieI4u5hpJ5JdTFzRbX4RgjmBMDnDkQadovxobLvw6XJlUwm8JLtWM-kbgYoVoqxtLw",
            "x-unit-story": "1648982566383",
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
            "date": "Sun, 03 Apr 2022 10:41:43 GMT",
            "expires": "Sun, 03 Apr 2022 11:41:43 GMT",
            "last-modified": "Fri, 13 Sep 2019 14:27:34 GMT",
            "server": "UploadServer",
            "x-guploader-uploadid": "ADPycduT-PYx2hWkSWE5yDk-2C_TGOE3RnSmHTzLdidvp8WZEiwwGooMPt_r8VUu09mxEK20g7tudjXZ-hHUVPL7baY5jUXwzg",
            "x-unit-story": "1648982566389",
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
    await page.waitForTimeout(4)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648982514569}"}');
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
    await page.waitForTimeout(96)
    await page.mouse.move(1058, 79);
    await page.waitForTimeout(0)

    await page.waitForTimeout(47)
    await page.waitForTimeout(3)
    await page.mouse.move(1058, 77);
    await page.waitForTimeout(0)

    await page.waitForTimeout(62)
    await page.mouse.move(1042, 61);
    await page.waitForTimeout(1708)
    await page.mouse.move(1257, 74);
    await page.waitForTimeout(175)
    await page.waitForTimeout(32)
    await page.waitForTimeout(9)
    await page.waitForTimeout(49)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(1493)
    await page.mouse.move(1264, 74);
    await page.waitForTimeout(0)

    await page.waitForTimeout(945)
    await page.mouse.move(1270, 74);
    await page.mouse.down();
    await page.waitForTimeout(82)
    await page.evaluate(() => window.scroll(0, 1.3333333730697632));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 11.333333015441895));
    await page.waitForTimeout(59)
    await page.evaluate(() => window.scroll(0, 28));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 44.66666793823242));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 63.33333206176758));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 82));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 105.33333587646484));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 134.6666717529297));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0, 157.3333282470703));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 190.6666717529297));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 213.3333282470703));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0, 251.3333282470703));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 282));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 303.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 320));
    await page.waitForTimeout(59)
    await page.evaluate(() => window.scroll(0, 338.6666564941406));
    await page.waitForTimeout(55)
    await page.evaluate(() => window.scroll(0, 355.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 376));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 392.6666564941406));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0, 413.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 434.6666564941406));
    await page.waitForTimeout(60)
    await page.evaluate(() => window.scroll(0, 457.3333435058594));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 490.6666564941406));
    await page.waitForTimeout(63)
    await page.evaluate(() => window.scroll(0, 516));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 553.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 590.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 616));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 636.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 655.3333129882812));
    await page.waitForTimeout(100)
    await page.mouse.up();
    await page.waitForTimeout(33)
    await page.mouse.move(1279, 285);
    await page.waitForTimeout(133)
    await page.mouse.move(1268, 283);
    await page.waitForTimeout(183)
    await page.mouse.move(1249, 281);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(1109, 279);
    await page.waitForTimeout(1133)
    await page.mouse.move(937, 303);
    await page.waitForTimeout(256)
    await page.mouse.move(930, 279);
    await page.waitForTimeout(661)
    await page.mouse.move(926, 288);
    await page.waitForTimeout(59)
    await page.mouse.move(911, 279);
    await page.waitForTimeout(551)
    await page.mouse.move(908, 287);
    await page.waitForTimeout(52)
    await page.mouse.move(886, 279);
    await page.waitForTimeout(449)
    await page.mouse.move(888, 287);
    await page.waitForTimeout(600)
    await page.mouse.move(931, 288);
    await page.waitForTimeout(0)

    await page.waitForTimeout(216)
    await page.mouse.move(905, 358);
    await page.waitForTimeout(0)

    await page.waitForTimeout(57)
    await page.mouse.move(898, 374);
    await page.waitForTimeout(0)

    await page.waitForTimeout(55)
    await page.mouse.move(877, 399);
    await page.waitForTimeout(310)
    await page.mouse.move(825, 429);
    await page.waitForTimeout(1320)
    await page.evaluate(() => window.scroll(0, 670));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 686));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 722));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 734));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 745.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0, 752));
    await page.waitForTimeout(58)
    await page.evaluate(() => window.scroll(0, 759.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0, 763.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0, 764));
    await page.waitForTimeout(104)
    await page.mouse.move(817, 437);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(791, 469);
    await page.waitForTimeout(304)
    await page.mouse.move(744, 552);
    await page.waitForTimeout(836)
    await page.mouse.move(744, 552);
    await page.mouse.down();
    await page.waitForTimeout(32)
    await page.mouse.up();
    await page.waitForTimeout(283)
    await page.goto('https://www.demoblaze.com/prod.html?idp_=8');
    await page.waitForTimeout(1)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648982514569}"}');
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
    await page.waitForTimeout(129)
    await page.waitForTimeout(10)
    await page.waitForTimeout(75)
    await page.waitForTimeout(9)
    await page.waitForTimeout(62)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(718)
    await context.addCookies([{
        name: 'user',
        value: 'e8dd9e79-aa42-ab15-1517-e6529af9f914',
        url: 'https://www.demoblaze.com/prod.html?idp_=8'
    }])
    await page.waitForTimeout(909)
    await page.mouse.move(742, 549);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(732, 533);
    await page.waitForTimeout(0)

    await page.waitForTimeout(85)
    await page.mouse.move(704, 507);
    await page.waitForTimeout(265)
    await page.mouse.move(644, 466);
    await page.waitForTimeout(315)
    await page.mouse.move(632, 454);
    await page.waitForTimeout(216)
    await page.mouse.move(626, 449);
    await page.waitForTimeout(414)
    await page.mouse.move(626, 449);
    await page.mouse.down();
    await page.waitForTimeout(41)
    await page.mouse.up();
    await page.waitForTimeout(2)
    await page.waitForTimeout(1962)
    await page.mouse.move(828, 89);
    await page.waitForTimeout(0)

    await page.waitForTimeout(395)
    await page.mouse.move(827, 89);
    await page.waitForTimeout(100)
    await page.mouse.move(730, 79);
    await page.waitForTimeout(150)
    await page.mouse.move(662, 53);
    await page.waitForTimeout(506)
    await page.mouse.move(656, 38);
    await page.waitForTimeout(50)
    await page.mouse.move(612, 27);
    await page.waitForTimeout(50)
    await page.mouse.move(605, 17);
    await page.waitForTimeout(100)
    await page.mouse.move(604, 13);
    await page.waitForTimeout(150)
    await page.mouse.move(630, 13);
    await page.waitForTimeout(533)
    await page.mouse.move(657, 39);
    await page.waitForTimeout(0)

    await page.waitForTimeout(40)
    await page.mouse.move(657, 39);
    await page.mouse.down();
    await page.waitForTimeout(76)
    await page.mouse.up();
    await page.waitForTimeout(272)
    await page.goto('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(3)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648982514569}"}');
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
    await page.waitForTimeout(191)
    await page.mouse.move(693, 142);
    await page.waitForTimeout(0)

    await page.waitForTimeout(85)
    await page.mouse.move(691, 197);
    await page.waitForTimeout(0)

    await page.waitForTimeout(9)
    await page.waitForTimeout(41)
    await page.mouse.move(685, 210);
    await page.waitForTimeout(1006)
    await page.mouse.move(907, 220);
    await page.waitForTimeout(110)
    await page.waitForTimeout(36)
    await page.waitForTimeout(10)
    await page.waitForTimeout(65)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(338)
    await page.waitForTimeout(117)
    await context.addCookies([{
        name: 'user',
        value: 'e8dd9e79-aa42-ab15-1517-e6529af9f914',
        url: 'https://www.demoblaze.com/cart.html'
    }])
    await page.waitForTimeout(408)
    await page.mouse.move(906, 219);
    await page.waitForTimeout(52)
    await page.mouse.move(906, 217);
    await page.waitForTimeout(663)
    await page.mouse.move(906, 215);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(911, 208);
    await page.waitForTimeout(151)
    await page.mouse.move(918, 198);
    await page.waitForTimeout(1140)
    await page.mouse.move(918, 198);
    await page.mouse.down();
    await page.waitForTimeout(80)
    await page.mouse.up();
    await page.waitForTimeout(513)
    await page.mouse.move(917, 198);
    await page.waitForTimeout(100)
    await page.mouse.move(874, 197);
    await page.waitForTimeout(153)
    await page.mouse.move(839, 193);
    await page.waitForTimeout(1702)
    await page.mouse.move(579, 217);
    await page.waitForTimeout(961)
    await page.mouse.move(624, 200);
    await page.mouse.down();
    await page.waitForTimeout(75)
    await page.mouse.up();
    await page.waitForTimeout(1576)
    selector = 'input#name.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Mark' !== text) {
            await page.fill(selector, 'Mark')
        }
    }
    await page.waitForTimeout(232)
    await page.mouse.move(514, 259);
    await page.waitForTimeout(100)
    await page.mouse.move(504, 274);
    await page.waitForTimeout(150)
    await page.mouse.move(496, 286);
    await page.waitForTimeout(766)
    await page.mouse.move(484, 312);
    await page.waitForTimeout(316)
    await page.mouse.move(484, 307);
    await page.mouse.down();
    await page.waitForTimeout(74)
    await page.mouse.up();
    await page.waitForTimeout(676)
    selector = 'input#country.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Germany' !== text) {
            await page.fill(selector, 'Germany')
        }
    }
    await page.waitForTimeout(182)
    await page.mouse.move(481, 390);
    await page.waitForTimeout(1117)
    await page.mouse.move(469, 406);
    await page.waitForTimeout(151)
    await page.mouse.move(483, 422);
    await page.waitForTimeout(249)
    await page.mouse.move(483, 421);
    await page.waitForTimeout(884)
    await page.mouse.move(469, 406);
    await page.mouse.down();
    await page.waitForTimeout(61)
    await page.mouse.up();
    await page.waitForTimeout(1167)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(108)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(406)
    await page.keyboard.down('Shift')
    await page.keyboard.down('KeyL')
    await page.waitForTimeout(4)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('L' !== text) {
            await page.fill(selector, 'L')
        }
    }
    await page.waitForTimeout(88)
    await page.keyboard.up('KeyL')
    await page.keyboard.up('Shift')
    await page.waitForTimeout(738)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(90)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(1994)
    await page.keyboard.down('Backspace');
    await page.waitForTimeout(5)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('' !== text) {
            await page.fill(selector, '')
        }
    }
    await page.waitForTimeout(103)
    await page.keyboard.up('Backspace');
    await page.waitForTimeout(1305)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(77)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(792)
    await page.keyboard.down('Shift')
    await page.keyboard.down('KeyB')
    await page.waitForTimeout(4)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('B' !== text) {
            await page.fill(selector, 'B')
        }
    }
    await page.waitForTimeout(98)
    await page.keyboard.up('KeyB')
    await page.keyboard.up('Shift')
    await page.waitForTimeout(171)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(96)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(437)
    await page.keyboard.down('KeyE');
    await page.waitForTimeout(2)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Be' !== text) {
            await page.fill(selector, 'Be')
        }
    }
    await page.waitForTimeout(142)
    await page.keyboard.up('KeyE');
    await page.waitForTimeout(80)
    await page.keyboard.down('KeyR');
    await page.waitForTimeout(7)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Ber' !== text) {
            await page.fill(selector, 'Ber')
        }
    }
    await page.waitForTimeout(106)
    await page.keyboard.up('KeyR');
    await page.waitForTimeout(133)
    await page.keyboard.down('KeyL');
    await page.waitForTimeout(11)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Berl' !== text) {
            await page.fill(selector, 'Berl')
        }
    }
    await page.waitForTimeout(126)
    await page.keyboard.up('KeyL');
    await page.waitForTimeout(162)
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(12)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Berli' !== text) {
            await page.fill(selector, 'Berli')
        }
    }
    await page.waitForTimeout(102)
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(89)
    await page.keyboard.down('KeyN');
    await page.waitForTimeout(8)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Berlin' !== text) {
            await page.fill(selector, 'Berlin')
        }
    }
    await page.waitForTimeout(90)
    await page.keyboard.up('KeyN');
    await page.waitForTimeout(560)
    await page.mouse.move(474, 420);
    await page.waitForTimeout(57)
    await page.mouse.move(476, 423);
    await page.waitForTimeout(110)
    await page.mouse.move(478, 445);
    await page.waitForTimeout(106)
    await page.mouse.move(481, 477);
    await page.waitForTimeout(156)
    await page.mouse.move(480, 488);
    await page.waitForTimeout(151)
    await page.mouse.move(479, 491);
    await page.waitForTimeout(88)
    await page.mouse.move(479, 491);
    await page.mouse.down();
    await page.waitForTimeout(12)
    selector = 'input#city.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('Berlin' !== text) {
            await page.fill(selector, 'Berlin')
        }
    }
    await page.waitForTimeout(47)
    await page.mouse.up();
    await page.waitForTimeout(620)
    await page.keyboard.down('Digit1');
    await page.waitForTimeout(16)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('1' !== text) {
            await page.fill(selector, '1')
        }
    }
    await page.waitForTimeout(98)
    await page.keyboard.up('Digit1');
    await page.waitForTimeout(114)
    await page.keyboard.down('Digit2');
    await page.waitForTimeout(4)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('12' !== text) {
            await page.fill(selector, '12')
        }
    }
    await page.waitForTimeout(102)
    await page.keyboard.up('Digit2');
    await page.waitForTimeout(132)
    await page.keyboard.down('Digit3');
    await page.waitForTimeout(16)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('123' !== text) {
            await page.fill(selector, '123')
        }
    }
    await page.waitForTimeout(86)
    await page.keyboard.up('Digit3');
    await page.waitForTimeout(162)
    await page.keyboard.down('Digit4');
    await page.waitForTimeout(2)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('1234' !== text) {
            await page.fill(selector, '1234')
        }
    }
    await page.waitForTimeout(88)
    await page.keyboard.up('Digit4');
    await page.waitForTimeout(130)
    await page.keyboard.down('Digit5');
    await page.waitForTimeout(15)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('12345' !== text) {
            await page.fill(selector, '12345')
        }
    }
    await page.waitForTimeout(82)
    await page.keyboard.up('Digit5');
    await page.waitForTimeout(518)
    await page.keyboard.down('Digit6');
    await page.waitForTimeout(16)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('123456' !== text) {
            await page.fill(selector, '123456')
        }
    }
    await page.waitForTimeout(55)
    await page.keyboard.up('Digit6');
    await page.waitForTimeout(495)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 1.3333333730697632)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 25.33333396911621)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 70.66666412353516)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 131.3333282470703)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(54)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 183.3333282470703)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(54)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 212.6666717529297)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(56)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 240.6666717529297)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(52)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 258.6666564941406)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(17)
    await page.mouse.move(477, 488);
    await page.waitForTimeout(0)

    await page.waitForTimeout(34)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0, 264.6666564941406)
    }, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
    await page.waitForTimeout(16)
    await page.mouse.move(464, 442);
    await page.waitForTimeout(52)
    await page.mouse.move(455, 423);
    await page.waitForTimeout(108)
    await page.mouse.move(433, 381);
    await page.waitForTimeout(54)
    await page.mouse.move(433, 372);
    await page.waitForTimeout(104)
    await page.mouse.move(444, 342);
    await page.waitForTimeout(422)
    await page.mouse.move(463, 314);
    await page.waitForTimeout(290)
    await page.mouse.move(462, 314);
    await page.mouse.down();
    await page.waitForTimeout(4)
    selector = 'input#card.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('123456' !== text) {
            await page.fill(selector, '123456')
        }
    }
    await page.waitForTimeout(86)
    await page.mouse.up();
    await page.waitForTimeout(846)
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(11)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('o' !== text) {
            await page.fill(selector, 'o')
        }
    }
    await page.waitForTimeout(121)
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(8)
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(13)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('oc' !== text) {
            await page.fill(selector, 'oc')
        }
    }
    await page.waitForTimeout(107)
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(106)
    await page.keyboard.down('KeyT');
    await page.waitForTimeout(11)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('oct' !== text) {
            await page.fill(selector, 'oct')
        }
    }
    await page.waitForTimeout(67)
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(2)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('octo' !== text) {
            await page.fill(selector, 'octo')
        }
    }
    await page.waitForTimeout(14)
    await page.keyboard.up('KeyT');
    await page.waitForTimeout(95)
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(1)
    await page.keyboard.down('KeyB');
    await page.waitForTimeout(12)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('octob' !== text) {
            await page.fill(selector, 'octob')
        }
    }
    await page.waitForTimeout(95)
    await page.keyboard.up('KeyB');
    await page.waitForTimeout(81)
    await page.keyboard.down('KeyE');
    await page.waitForTimeout(16)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('octobe' !== text) {
            await page.fill(selector, 'octobe')
        }
    }
    await page.waitForTimeout(220)
    await page.keyboard.up('KeyE');
    await page.waitForTimeout(524)
    await page.keyboard.down('KeyR');
    await page.waitForTimeout(6)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('october' !== text) {
            await page.fill(selector, 'october')
        }
    }
    await page.waitForTimeout(148)
    await page.keyboard.up('KeyR');
    await page.waitForTimeout(917)
    await page.mouse.move(462, 315);
    await page.waitForTimeout(677)
    await page.mouse.move(414, 336);
    await page.waitForTimeout(279)
    await page.mouse.move(388, 337);
    await page.waitForTimeout(88)
    await page.mouse.move(388, 337);
    await page.waitForTimeout(496)
    await page.mouse.move(414, 336);
    await page.mouse.down();
    await page.waitForTimeout(126)
    await page.mouse.up();
    await page.waitForTimeout(601)
    await page.keyboard.down('Backspace');
    await page.waitForTimeout(13)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('ctober' !== text) {
            await page.fill(selector, 'ctober')
        }
    }
    await page.waitForTimeout(79)
    await page.keyboard.up('Backspace');
    await page.waitForTimeout(269)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(97)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(238)
    await page.keyboard.down('Shift')
    await page.keyboard.down('KeyO')
    await page.waitForTimeout(17)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('October' !== text) {
            await page.fill(selector, 'October')
        }
    }
    await page.waitForTimeout(75)
    await page.keyboard.up('KeyO')
    await page.keyboard.up('Shift')
    await page.waitForTimeout(483)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(91)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(160)
    await page.mouse.move(414, 341);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(416, 386);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(418, 410);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(419, 425);
    await page.waitForTimeout(262)
    await page.mouse.move(421, 431);
    await page.waitForTimeout(167)
    await page.mouse.move(421, 431);
    await page.mouse.down();
    await page.waitForTimeout(16)
    selector = 'input#month.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('October' !== text) {
            await page.fill(selector, 'October')
        }
    }
    await page.waitForTimeout(45)
    await page.mouse.up();
    await page.waitForTimeout(714)
    await page.keyboard.down('Digit1');
    await page.waitForTimeout(1)
    selector = 'input#year.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('1' !== text) {
            await page.fill(selector, '1')
        }
    }
    await page.waitForTimeout(117)
    await page.keyboard.up('Digit1');
    await page.waitForTimeout(143)
    await page.keyboard.down('Digit9');
    await page.waitForTimeout(13)
    selector = 'input#year.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('19' !== text) {
            await page.fill(selector, '19')
        }
    }
    await page.waitForTimeout(90)
    await page.keyboard.up('Digit9');
    await page.waitForTimeout(100)
    await page.keyboard.down('Digit9');
    await page.waitForTimeout(10)
    selector = 'input#year.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('199' !== text) {
            await page.fill(selector, '199')
        }
    }
    await page.waitForTimeout(78)
    await page.keyboard.up('Digit9');
    await page.waitForTimeout(1562)
    await page.keyboard.down('Digit2');
    await page.waitForTimeout(8)
    selector = 'input#year.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('1992' !== text) {
            await page.fill(selector, '1992')
        }
    }
    await page.waitForTimeout(79)
    await page.keyboard.up('Digit2');
    await page.waitForTimeout(454)
    await page.mouse.move(437, 431);
    await page.waitForTimeout(263)
    await page.mouse.move(724, 436);
    await page.waitForTimeout(316)
    await page.mouse.move(738, 463);
    await page.waitForTimeout(0)

    await page.waitForTimeout(51)
    await page.mouse.move(748, 477);
    await page.waitForTimeout(50)
    await page.mouse.move(749, 483);
    await page.waitForTimeout(100)
    await page.mouse.move(756, 499);
    await page.waitForTimeout(105)
    await page.mouse.move(772, 518);
    await page.waitForTimeout(159)
    await page.mouse.move(782, 529);
    await page.waitForTimeout(0)

    await page.waitForTimeout(56)
    await page.mouse.move(788, 537);
    await page.waitForTimeout(152)
    await page.mouse.move(796, 554);
    await page.waitForTimeout(468)
    await page.mouse.move(796, 555);
    await page.mouse.down();
    await page.waitForTimeout(16)
    selector = 'input#year.form-control[type="text"]'
    if (!selector.includes('password')) {
        element = await page.locator(selector);
        text = await element.inputValue();
        if ('1992' !== text) {
            await page.fill(selector, '1992')
        }
    }
    await page.waitForTimeout(60)
    await page.mouse.up();
    await page.waitForTimeout(1)
    await page.waitForTimeout(389)
    await page.mouse.move(793, 555);
    await page.waitForTimeout(616)
    await page.mouse.move(609, 473);
    await page.waitForTimeout(816)
    await page.mouse.move(609, 473);
    await page.mouse.down();
    await page.waitForTimeout(76)
    await page.mouse.up();
    await page.waitForTimeout(315)
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(2)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648982514569}"}');
    await page.evaluate(sessionStorage => {
        for (const key in sessionStorage) {
            window.sessionStorage.setItem(key, sessionStorage[key]);
        }
    }, sessionStorage);
    await page.waitForTimeout(1)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648911538795,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
        for (const key in localStorage) {
            window.localStorage.setItem(key, localStorage[key]);
        }
    }, localStorage);
    await page.waitForTimeout(103)
    await page.mouse.move(580, 469);
    await page.waitForTimeout(501)
    await page.mouse.move(606, 469);
    await page.waitForTimeout(71)
    await page.waitForTimeout(154)
    await page.waitForTimeout(32)
    await page.waitForTimeout(6)
    await page.waitForTimeout(47)
    await page.setViewportSize({width: 1280, height: 619});
    await page.waitForTimeout(244)
    await page.mouse.move(624, 468);
    await page.waitForTimeout(51)
    await page.mouse.move(630, 467);
    await page.waitForTimeout(102)
    await page.mouse.move(646, 464);
    await page.waitForTimeout(0)

    await page.waitForTimeout(54)
    await page.mouse.move(676, 448);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(712, 424);
    await page.waitForTimeout(51)
    await page.mouse.move(756, 389);
    await page.waitForTimeout(101)
    await page.mouse.move(816, 343);
    await page.waitForTimeout(523)
    await page.mouse.move(830, 139);
    await page.waitForTimeout(35)
    await context.addCookies([{
        name: 'user',
        value: 'e8dd9e79-aa42-ab15-1517-e6529af9f914',
        url: 'https://www.demoblaze.com/index.html'
    }])
    await page.waitForTimeout(538)
    await page.mouse.move(541, 25);
    await page.waitForTimeout(58)
    await page.mouse.move(496, 5);
    await browser.close()
})
