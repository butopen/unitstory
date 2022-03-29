

test("temp test", async () => {
    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    let element;
    let text;
    await context.addCookies([{name: 'user', value: '358a17c3-0a36-bb39-84ae-1ec0dcd229f8', url: 'https://www.demoblaze.com/'}])
    const page = await context.newPage()
    let ts = 1648484515164

    await page.route('**/*', (route) => {  
    let mocked = false;    
    let responseOptions = {} as any
            

        
        
        if (ts >= (1648484515166 - 10) && route.request().url() == "https://api.demoblaze.com/entries" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648484515166"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"}
            mocked = true
        }

        if (ts >= (1648484533046 - 10) && route.request().url() == "https://api.demoblaze.com/entries" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1060","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648484533046"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"}
            mocked = true
        }

        if (ts >= (1648484538159 - 10) && route.request().url() == "https://api.demoblaze.com/entries" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648484538159"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"}
            mocked = true
        }


        
        
        if (ts >= (1648484515166 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
            responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Mon, 28 Mar 2022 16:21:50 GMT","expires":"Mon, 28 Mar 2022 17:21:50 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu21t6xxyUUwFowZIzY_VupavWLlTEAsc_1_5Hmdw19aid67lV7cdZaUCvJC2k8mwiTybVTICIE0Ux3HWXgi7A","access-control-allow-origin":"*","x-unit-story":"1648484515166"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
            mocked = true
        }

        if (ts >= (1648484533046 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
            responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Mon, 28 Mar 2022 16:21:50 GMT","expires":"Mon, 28 Mar 2022 17:21:50 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu21t6xxyUUwFowZIzY_VupavWLlTEAsc_1_5Hmdw19aid67lV7cdZaUCvJC2k8mwiTybVTICIE0Ux3HWXgi7A","access-control-allow-origin":"*","x-unit-story":"1648484533046"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
            mocked = true
        }

        if (ts >= (1648484538159 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
            responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Mon, 28 Mar 2022 16:21:50 GMT","expires":"Mon, 28 Mar 2022 17:21:50 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu21t6xxyUUwFowZIzY_VupavWLlTEAsc_1_5Hmdw19aid67lV7cdZaUCvJC2k8mwiTybVTICIE0Ux3HWXgi7A","access-control-allow-origin":"*","x-unit-story":"1648484538159"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
            mocked = true
        }


        
        
        if (ts >= (1648484515166 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
            responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Mon, 28 Mar 2022 16:21:50 GMT","expires":"Mon, 28 Mar 2022 17:21:50 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdueKILrtAL0TJH31wC7aYm1m_CZ8deWAPNhIVOjVe25Jzmmr92UmMM9iF2ExGsWFYLqlbzh8UdvMV7_9-F0sog","access-control-allow-origin":"*","x-unit-story":"1648484515166"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
            mocked = true
        }

        if (ts >= (1648484533046 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
            responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Mon, 28 Mar 2022 16:21:50 GMT","expires":"Mon, 28 Mar 2022 17:21:50 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdueKILrtAL0TJH31wC7aYm1m_CZ8deWAPNhIVOjVe25Jzmmr92UmMM9iF2ExGsWFYLqlbzh8UdvMV7_9-F0sog","access-control-allow-origin":"*","x-unit-story":"1648484533046"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
            mocked = true
        }

        if (ts >= (1648484538159 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
            responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Mon, 28 Mar 2022 16:21:50 GMT","expires":"Mon, 28 Mar 2022 17:21:50 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdueKILrtAL0TJH31wC7aYm1m_CZ8deWAPNhIVOjVe25Jzmmr92UmMM9iF2ExGsWFYLqlbzh8UdvMV7_9-F0sog","access-control-allow-origin":"*","x-unit-story":"1648484538159"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
            mocked = true
        }


        
        
        if (ts >= (1648484532444 - 10) && route.request().url() == "https://api.demoblaze.com/login" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"57","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648484532444"},  body: "\"Auth_token: Y2lhbzE2NDkwODQ=\"\n"}
            mocked = true
        }


        
        
        if (ts >= (1648484533046 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Mon, 28 Mar 2022 16:22:13 GMT","etag":"\"TTo8pA\"","expires":"Mon, 28 Mar 2022 16:22:23 GMT","server":"Google Frontend","x-cloud-trace-context":"aad2aef161ff4826cd4a4a9e92cca913","access-control-allow-origin":"*","x-unit-story":"1648484533046"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
            mocked = true
        }

        if (ts >= (1648484538159 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Mon, 28 Mar 2022 16:22:13 GMT","etag":"\"TTo8pA\"","expires":"Mon, 28 Mar 2022 16:22:23 GMT","server":"Google Frontend","x-cloud-trace-context":"aad2aef161ff4826cd4a4a9e92cca913","access-control-allow-origin":"*","x-unit-story":"1648484538159"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
            mocked = true
        }


        
        
        if (ts >= (1648484533046 - 10) && route.request().url() == "https://api.demoblaze.com/check" ) {
            responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"101","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648484533046"},  body: "{\"Item\":{\"expiration\":1649084,\"token\":\"Y2lhbzE2NDkwODQ=\",\"username\":\"ciao\"}}\n"}
            mocked = true
        }
            if(mocked)
    route.fulfill(responseOptions)
            else {
                route.continue()
            }
    });
            
    ts = 1648484515164
    await page.goto('https://www.demoblaze.com/');
    await page.waitForTimeout(2)
    ts = 1648484515166
    const sessionStorage1648484515166 = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648484515157}"}');
    await page.evaluate(sessionStorage1648484515166 => {
      for (const key in sessionStorage1648484515166) {
        window.sessionStorage.setItem(key, sessionStorage1648484515166[key]);}
    }, sessionStorage1648484515166);
    await page.waitForTimeout(0)
    ts = 1648484515166
    const localStorage1648484515166 = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648478161599,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage1648484515166 => {
      for (const key in localStorage1648484515166) {
        window.localStorage.setItem(key, localStorage1648484515166[key]);}
    }, localStorage1648484515166);
    await page.waitForTimeout(2)
    await page.waitForTimeout(29)
    await page.waitForTimeout(8)
    await page.waitForTimeout(59)
    ts = 1648484515264
    await page.mouse.move(1724,100);await page.mouse.move(1700,97);
    await page.waitForTimeout(15)
    ts = 1648484515279
    await page.setViewportSize({ width: 1920, height: 979 });
    await page.waitForTimeout(1942)
    ts = 1648484517221
    await page.mouse.move(1678,95);await page.mouse.move(1399,36);
    await page.waitForTimeout(657)
    ts = 1648484517878
    await page.mouse.move(1384,33);await page.mouse.move(1331,26);
    await page.waitForTimeout(252)
    ts = 1648484518130
    await page.mouse.move(1317,26);await page.mouse.move(1298,28);
    await page.waitForTimeout(1470)
    ts = 1648484519600
    await page.mouse.move(1295, 28);
    await page.mouse.down();
    await page.waitForTimeout(108)
    ts = 1648484519708
    await page.mouse.up();
    await page.waitForTimeout(460)
    ts = 1648484520168
    await page.mouse.move(1291,28);await page.mouse.move(1288,29);
    await page.waitForTimeout(123)
    ts = 1648484520291
    await page.mouse.move(1175,71);
    await page.waitForTimeout(50)
    ts = 1648484520341
    await page.mouse.move(1150,82);
    await page.waitForTimeout(51)
    ts = 1648484520392
    await page.mouse.move(1119,100);
    await page.waitForTimeout(51)
    ts = 1648484520443
    await page.mouse.move(1075,126);await page.mouse.move(1036,147);
    await page.waitForTimeout(102)
    ts = 1648484520545
    await page.mouse.move(1014,154);await page.mouse.move(975,159);
    await page.waitForTimeout(509)
    ts = 1648484521054
    await page.mouse.move(975, 159);
    await page.mouse.down();
    await page.waitForTimeout(48)
    ts = 1648484521102
    await page.mouse.up();
    await page.waitForTimeout(1348)
    ts = 1648484522450
    await page.mouse.move(972,161);await page.mouse.move(921,172);
    await page.waitForTimeout(721)
    ts = 1648484523171
    await page.mouse.move(920,172);await page.mouse.move(904,172);
    await page.waitForTimeout(1198)
    ts = 1648484524369
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(14)
    ts = 1648484524383
    element = await page.locator('input#loginusername.form-control[type="text"]');
    text = await element.inputValue();
    if('c' !== text){
        await page.fill('input#loginusername.form-control[type="text"]','c')
    }
    await page.waitForTimeout(125)
    ts = 1648484524508
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(46)
    ts = 1648484524554
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(11)
    ts = 1648484524565
    element = await page.locator('input#loginusername.form-control[type="text"]');
    text = await element.inputValue();
    if('ci' !== text){
        await page.fill('input#loginusername.form-control[type="text"]','ci')
    }
    await page.waitForTimeout(129)
    ts = 1648484524694
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(459)
    ts = 1648484525153
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(12)
    ts = 1648484525165
    element = await page.locator('input#loginusername.form-control[type="text"]');
    text = await element.inputValue();
    if('cia' !== text){
        await page.fill('input#loginusername.form-control[type="text"]','cia')
    }
    await page.waitForTimeout(91)
    ts = 1648484525256
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(508)
    ts = 1648484525764
    await page.mouse.move(900,176);await page.mouse.move(890,183);
    await page.waitForTimeout(868)
    ts = 1648484526632
    element = await page.locator('input#loginusername.form-control[type="text"]');
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill('input#loginusername.form-control[type="text"]','ciao')
    }
    await page.waitForTimeout(248)
    ts = 1648484526880
    await page.mouse.move(798,258);
    await page.waitForTimeout(549)
    ts = 1648484527429
    await page.mouse.move(799,258);await page.mouse.move(812,257);
    await page.waitForTimeout(980)
    ts = 1648484528409
    await page.mouse.move(814, 257);
    await page.mouse.down();
    await page.waitForTimeout(42)
    ts = 1648484528451
    await page.mouse.up();
    await page.waitForTimeout(1624)
    ts = 1648484530075
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(3)
    ts = 1648484530078
    element = await page.locator('input#loginpassword.form-control[type="password"]');
    text = await element.inputValue();
    if('*' !== text){
        await page.fill('input#loginpassword.form-control[type="password"]','*')
    }
    await page.waitForTimeout(128)
    ts = 1648484530206
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(4)
    ts = 1648484530210
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(1)
    ts = 1648484530211
    element = await page.locator('input#loginpassword.form-control[type="password"]');
    text = await element.inputValue();
    if('**' !== text){
        await page.fill('input#loginpassword.form-control[type="password"]','**')
    }
    await page.waitForTimeout(145)
    ts = 1648484530356
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(351)
    ts = 1648484530707
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(3)
    ts = 1648484530710
    element = await page.locator('input#loginpassword.form-control[type="password"]');
    text = await element.inputValue();
    if('***' !== text){
        await page.fill('input#loginpassword.form-control[type="password"]','***')
    }
    await page.waitForTimeout(132)
    ts = 1648484530842
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(143)
    ts = 1648484530985
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(8)
    ts = 1648484530993
    element = await page.locator('input#loginpassword.form-control[type="password"]');
    text = await element.inputValue();
    if('****' !== text){
        await page.fill('input#loginpassword.form-control[type="password"]','****')
    }
    await page.waitForTimeout(79)
    ts = 1648484531072
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(521)
    ts = 1648484531593
    await page.mouse.move(820,257);await page.mouse.move(1130,394);
    await page.waitForTimeout(792)
    ts = 1648484532385
    await page.mouse.move(1133, 399);
    await page.mouse.down();
    await page.waitForTimeout(7)
    ts = 1648484532392
    element = await page.locator('input#loginpassword.form-control[type="password"]');
    text = await element.inputValue();
    if('****' !== text){
        await page.fill('input#loginpassword.form-control[type="password"]','****')
    }
    await page.waitForTimeout(52)
    ts = 1648484532444
    await page.mouse.up();
    await page.waitForTimeout(1)
    await page.waitForTimeout(598)
    ts = 1648484533043
    await page.goto('https://www.demoblaze.com/');
    await page.waitForTimeout(3)
    ts = 1648484533046
    const sessionStorage1648484533046 = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648484515157}"}');
    await page.evaluate(sessionStorage1648484533046 => {
      for (const key in sessionStorage1648484533046) {
        window.sessionStorage.setItem(key, sessionStorage1648484533046[key]);}
    }, sessionStorage1648484533046);
    await page.waitForTimeout(0)
    ts = 1648484533046
    const localStorage1648484533046 = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648478161599,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage1648484533046 => {
      for (const key in localStorage1648484533046) {
        window.localStorage.setItem(key, localStorage1648484533046[key]);}
    }, localStorage1648484533046);
    await page.waitForTimeout(161)
    await page.waitForTimeout(148)
    await page.waitForTimeout(2)
    await page.waitForTimeout(39)
    await page.waitForTimeout(51)
    await page.waitForTimeout(48)
    ts = 1648484533495
    await page.setViewportSize({ width: 1920, height: 979 });
    await page.waitForTimeout(551)
    ts = 1648484534046
    await context.addCookies([{name: 'user', value: '358a17c3-0a36-bb39-84ae-1ec0dcd229f8', url: 'https://www.demoblaze.com/'}, {name: 'tokenp_', value: 'Y2lhbzE2NDkwODQ=', url: 'https://www.demoblaze.com/'}])
    await page.waitForTimeout(378)
    ts = 1648484534424
    await page.mouse.move(1136,398);await page.mouse.move(1148,385);
    await page.waitForTimeout(221)
    ts = 1648484534645
    await page.mouse.move(1153,379);await page.mouse.move(1174,204);
    await page.waitForTimeout(455)
    ts = 1648484535100
    await page.mouse.move(1162,126);await page.mouse.move(1161,82);
    await page.waitForTimeout(253)
    ts = 1648484535353
    await page.mouse.move(1162,75);await page.mouse.move(1167,59);
    await page.waitForTimeout(203)
    ts = 1648484535556
    await page.mouse.move(1173,49);await page.mouse.move(1200,35);
    await page.waitForTimeout(659)
    ts = 1648484536215
    await page.mouse.move(1206,32);await page.mouse.move(1239,28);
    await page.waitForTimeout(1646)
    ts = 1648484537861
    await page.mouse.move(1240, 28);
    await page.mouse.down();
    await page.waitForTimeout(72)
    ts = 1648484537933
    await page.mouse.up();
    await page.waitForTimeout(225)
    ts = 1648484538158
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(1)
    ts = 1648484538159
    const sessionStorage1648484538159 = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648484515157}"}');
    await page.evaluate(sessionStorage1648484538159 => {
      for (const key in sessionStorage1648484538159) {
        window.sessionStorage.setItem(key, sessionStorage1648484538159[key]);}
    }, sessionStorage1648484538159);
    await page.waitForTimeout(0)
    ts = 1648484538159
    const localStorage1648484538159 = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648478161599,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage1648484538159 => {
      for (const key in localStorage1648484538159) {
        window.localStorage.setItem(key, localStorage1648484538159[key]);}
    }, localStorage1648484538159);
    await page.waitForTimeout(16)
    await page.waitForTimeout(8)
    await page.waitForTimeout(50)
    await page.waitForTimeout(18)
    await page.waitForTimeout(61)
    ts = 1648484538312
    await page.setViewportSize({ width: 1920, height: 979 });
    await page.waitForTimeout(91)
    ts = 1648484538403
    await page.mouse.move(1240,27);await page.mouse.move(1240,19);
    await page.waitForTimeout(150)
    ts = 1648484538553
    await page.mouse.move(1239,15);await page.mouse.move(1227,1);
    await page.waitForTimeout(607)
    ts = 1648484539160
    await context.addCookies([{name: 'user', value: '358a17c3-0a36-bb39-84ae-1ec0dcd229f8', url: 'https://www.demoblaze.com/index.html'}])
    await browser.close()
})
