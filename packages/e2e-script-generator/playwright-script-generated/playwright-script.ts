const { chromium } = require('playwright')
(async () => {
    let localStorage;
    let sessionStorage;
    let selector;
    let element;
    let text;
    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/'}])
    const page = await context.newPage()
    let ts = 1648656476312
    await page.route('**/*', (route) => {  
        let mocked = false;    
        let responseOptions = {} as any
            
        if (ts >= (1648656476482 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:07:57 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:08:07 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","access-control-allow-origin":"*","x-unit-story":"1648656476482"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
        mocked = true
        }

        if (ts >= (1648656485974 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:07:57 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:08:07 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","access-control-allow-origin":"*","x-unit-story":"1648656485974"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
        mocked = true
        }

        if (ts >= (1648656604103 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:10:05 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:10:15 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","access-control-allow-origin":"*","x-unit-story":"1648656604103"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
        mocked = true
        }

        if (ts >= (1648656606598 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:10:05 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:10:15 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","access-control-allow-origin":"*","x-unit-story":"1648656606598"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
        mocked = true
        }

        if (ts >= (1648656636759 - 10) && route.request().url() == "https://www.demoblaze.com/config.json" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:10:37 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:10:47 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","access-control-allow-origin":"*","x-unit-story":"1648656636759"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"}
        mocked = true
        }

        if (ts >= (1648656476665 - 10) && route.request().url() == "https://api.demoblaze.com/entries" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656476665"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"}
        mocked = true
        }

        if (ts >= (1648656604103 - 10) && route.request().url() == "https://api.demoblaze.com/entries" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656604103"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"}
        mocked = true
        }

        if (ts >= (1648656636759 - 10) && route.request().url() == "https://api.demoblaze.com/entries" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656636759"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"}
        mocked = true
        }

        if (ts >= (1648656476665 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","access-control-allow-origin":"*","x-unit-story":"1648656476665"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
        mocked = true
        }

        if (ts >= (1648656485974 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","access-control-allow-origin":"*","x-unit-story":"1648656485974"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
        mocked = true
        }

        if (ts >= (1648656604103 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","access-control-allow-origin":"*","x-unit-story":"1648656604103"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
        mocked = true
        }

        if (ts >= (1648656606598 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","access-control-allow-origin":"*","x-unit-story":"1648656606598"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
        mocked = true
        }

        if (ts >= (1648656636759 - 10) && route.request().url() == "https://hls.demoblaze.com/index.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","access-control-allow-origin":"*","x-unit-story":"1648656636759"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"}
        mocked = true
        }

        if (ts >= (1648656476665 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","access-control-allow-origin":"*","x-unit-story":"1648656476665"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
        mocked = true
        }

        if (ts >= (1648656485974 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","access-control-allow-origin":"*","x-unit-story":"1648656485974"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
        mocked = true
        }

        if (ts >= (1648656604103 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","access-control-allow-origin":"*","x-unit-story":"1648656604103"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
        mocked = true
        }

        if (ts >= (1648656606598 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","access-control-allow-origin":"*","x-unit-story":"1648656606598"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
        mocked = true
        }

        if (ts >= (1648656636759 - 10) && route.request().url() == "https://hls.demoblaze.com/about_demo_hls_600k.m3u8" ) {
        responseOptions = {status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","access-control-allow-origin":"*","x-unit-story":"1648656636759"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"}
        mocked = true
        }

        if (ts >= (1648656485974 - 10) && route.request().url() == "https://api.demoblaze.com/view" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"201","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656485974"},  body: "{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"}\n"}
        mocked = true
        }

        if (ts >= (1648656607035 - 10) && route.request().url() == "https://api.demoblaze.com/view" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"201","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656607035"},  body: "{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"}\n"}
        mocked = true
        }

        if (ts >= (1648656489674 - 10) && route.request().url() == "https://api.demoblaze.com/addtocart" ) {
        responseOptions = {status: 200, contentType: "text/html; charset=utf-8", headers: {"content-length":"0","content-type":"text/html; charset=utf-8","access-control-allow-origin":"*","x-unit-story":"1648656489674"},  body: ""}
        mocked = true
        }

        if (ts >= (1648656606598 - 10) && route.request().url() == "https://api.demoblaze.com/viewcart" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"136","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656606598"},  body: "{\"Items\":[{\"cookie\":\"user=d666f6a5-9c08-2456-20a7-38f17bfabb3a\",\"id\":\"8b4f05ac-192a-ee94-384e-5dd497480ba0\",\"prod_id\":2}]}\n"}
        mocked = true
        }

        if (ts >= (1648656622836 - 10) && route.request().url() == "https://api.demoblaze.com/deletecart" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656622836"},  body: "\"Item deleted.\"\n"}
        mocked = true
        }

        if (ts >= (1648656629910 - 10) && route.request().url() == "https://api.demoblaze.com/deletecart" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656629910"},  body: "\"Item deleted.\"\n"}
        mocked = true
        }

        if (ts >= (1648656632537 - 10) && route.request().url() == "https://api.demoblaze.com/deletecart" ) {
        responseOptions = {status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","access-control-allow-origin":"*","x-unit-story":"1648656632537"},  body: "\"Item deleted.\"\n"}
        mocked = true
        }
            
        if(mocked) {
            route.fulfill(responseOptions)
        } else {
            route.continue()
        }
    });
    ts = 1648656476312
    await page.goto('https://www.demoblaze.com/');
    await page.waitForTimeout(3)
    ts = 1648656476315
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    ts = 1648656476315
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(166)
    ts = 1648656476481
    await page.mouse.move(1028,94);

    await page.waitForTimeout(1)
    ts = 1648656476482
    await page.evaluate(() => window.scroll(0,42));
    await page.waitForTimeout(37)
    await page.waitForTimeout(146)
    ts = 1648656476665
    await page.evaluate(() => window.scroll(0,0));
    await page.waitForTimeout(63)
    await page.waitForTimeout(28)
    await page.waitForTimeout(8)
    await page.waitForTimeout(50)
    ts = 1648656476814
    await page.setViewportSize({ width: 1202, height: 607 });
    await page.waitForTimeout(911)
    ts = 1648656477725
    await page.mouse.move(1024,94);
    await page.mouse.move(1017,93);
    await page.waitForTimeout(100)
    ts = 1648656477825
    await page.mouse.move(927,84);
    await page.mouse.move(736,76);
    await page.waitForTimeout(1183)
    ts = 1648656479008
    await page.mouse.move(736,78);
    await page.mouse.move(736,96);
    await page.waitForTimeout(1048)
    ts = 1648656480056
    await page.evaluate(() => window.scroll(0,1.3333333730697632));
    await page.waitForTimeout(50)
    ts = 1648656480106
    await page.evaluate(() => window.scroll(0,14));
    await page.waitForTimeout(50)
    ts = 1648656480156
    await page.evaluate(() => window.scroll(0,54));
    await page.waitForTimeout(50)
    ts = 1648656480206
    await page.evaluate(() => window.scroll(0,90.66666412353516));
    await page.waitForTimeout(50)
    ts = 1648656480256
    await page.evaluate(() => window.scroll(0,100));
    await page.waitForTimeout(1266)
    ts = 1648656481522
    await page.evaluate(() => window.scroll(0,101.33333587646484));
    await page.waitForTimeout(50)
    ts = 1648656481572
    await page.evaluate(() => window.scroll(0,125.33333587646484));
    await page.waitForTimeout(50)
    ts = 1648656481622
    await page.evaluate(() => window.scroll(0,168.6666717529297));
    await page.waitForTimeout(50)
    ts = 1648656481672
    await page.evaluate(() => window.scroll(0,190.6666717529297));
    await page.waitForTimeout(50)
    ts = 1648656481722
    await page.evaluate(() => window.scroll(0,200));
    await page.waitForTimeout(566)
    ts = 1648656482288
    await page.mouse.move(732,97);

    await page.waitForTimeout(50)
    ts = 1648656482338
    await page.mouse.move(656,123);

    await page.waitForTimeout(50)
    ts = 1648656482388
    await page.mouse.move(580,154);

    await page.waitForTimeout(50)
    ts = 1648656482438
    await page.mouse.move(577,156);

    await page.waitForTimeout(483)
    ts = 1648656482921
    await page.evaluate(() => window.scroll(0,201.3333282470703));
    await page.waitForTimeout(52)
    ts = 1648656482973
    await page.evaluate(() => window.scroll(0,214));
    await page.waitForTimeout(51)
    ts = 1648656483024
    await page.evaluate(() => window.scroll(0,268.6666564941406));
    await page.waitForTimeout(52)
    ts = 1648656483076
    await page.evaluate(() => window.scroll(0,296.6666564941406));
    await page.waitForTimeout(50)
    ts = 1648656483126
    await page.evaluate(() => window.scroll(0,300));
    await page.waitForTimeout(362)
    ts = 1648656483488
    await page.mouse.move(578,156);

    await page.waitForTimeout(49)
    ts = 1648656483537
    await page.mouse.move(595,164);

    await page.waitForTimeout(50)
    ts = 1648656483587
    await page.mouse.move(611,173);
    await page.mouse.move(670,257);
    await page.waitForTimeout(456)
    ts = 1648656484043
    await page.mouse.move(672,272);

    await page.waitForTimeout(50)
    ts = 1648656484093
    await page.mouse.move(674,284);

    await page.waitForTimeout(51)
    ts = 1648656484144
    await page.mouse.move(674,290);
    await page.mouse.move(674,298);
    await page.waitForTimeout(1318)
    ts = 1648656485462
    await page.mouse.move(674, 299);
    await page.mouse.down();
    await page.waitForTimeout(92)
    ts = 1648656485554
    await page.mouse.up();
    await page.waitForTimeout(266)
    ts = 1648656485820
    await page.goto('https://www.demoblaze.com/prod.html?idp_=2');
    await page.waitForTimeout(1)
    ts = 1648656485821
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    ts = 1648656485821
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(153)
    ts = 1648656485974
    await page.mouse.move(674,299);

    await page.waitForTimeout(28)
    await page.waitForTimeout(11)
    await page.waitForTimeout(40)
    await page.waitForTimeout(11)
    await page.waitForTimeout(41)
    ts = 1648656486105
    await page.setViewportSize({ width: 1202, height: 607 });
    await page.waitForTimeout(716)
    ts = 1648656486821
    await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/prod.html?idp_=2'}])
    await page.waitForTimeout(1279)
    ts = 1648656488100
    await page.mouse.move(674,302);

    await page.waitForTimeout(50)
    ts = 1648656488150
    await page.mouse.move(669,314);
    await page.mouse.move(652,342);
    await page.waitForTimeout(150)
    ts = 1648656488300
    await page.mouse.move(645,352);
    await page.mouse.move(636,367);
    await page.waitForTimeout(100)
    ts = 1648656488400
    await page.mouse.move(626,380);

    await page.waitForTimeout(50)
    ts = 1648656488450
    await page.mouse.move(618,392);
    await page.mouse.move(609,406);
    await page.waitForTimeout(152)
    ts = 1648656488602
    await page.mouse.move(603,416);
    await page.mouse.move(582,447);
    await page.waitForTimeout(960)
    ts = 1648656489562
    await page.mouse.move(582, 447);
    await page.mouse.down();
    await page.waitForTimeout(112)
    ts = 1648656489674
    await page.mouse.up();
    await page.waitForTimeout(1)
    await page.waitForTimeout(1824)
    ts = 1648656491499
    await page.mouse.move(582,446);
    await page.mouse.move(584,432);
    await page.waitForTimeout(348)
    ts = 1648656491847
    await page.mouse.move(586,428);
    await page.mouse.move(591,414);
    await page.waitForTimeout(383)
    ts = 1648656492230
    await page.mouse.move(592,413);
    await page.mouse.move(608,394);
    await page.waitForTimeout(108318)
    ts = 1648656600548
    await page.mouse.move(796,98);

    await page.waitForTimeout(50)
    ts = 1648656600598
    await page.mouse.move(797,99);
    await page.mouse.move(440,90);
    await page.waitForTimeout(1221)
    ts = 1648656601819
    await page.mouse.move(422,81);

    await page.waitForTimeout(51)
    ts = 1648656601870
    await page.mouse.move(410,73);

    await page.waitForTimeout(0)
    ts = 1648656601870
    await page.mouse.move(410,73);
    await page.mouse.move(427,36);
    await page.waitForTimeout(50)
    ts = 1648656601920
    await page.mouse.move(402,56);
    await page.mouse.move(424,36);
    await page.waitForTimeout(585)
    ts = 1648656602505
    await page.mouse.move(475,58);
    await page.mouse.move(494,57);
    await page.waitForTimeout(551)
    ts = 1648656603056
    await page.mouse.move(488,56);
    await page.mouse.move(446,48);
    await page.waitForTimeout(459)
    ts = 1648656603515
    await page.mouse.move(424, 35);
    await page.mouse.down();
    await page.waitForTimeout(0)
    ts = 1648656603515
    await page.mouse.move(424, 35);
    await page.mouse.down();
    await page.waitForTimeout(59)
    ts = 1648656603574
    await page.mouse.up();
    await page.waitForTimeout(0)
    ts = 1648656603574
    await page.mouse.up();
    await page.waitForTimeout(348)
    ts = 1648656603922
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(3)
    ts = 1648656603925
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    ts = 1648656603925
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(178)
    ts = 1648656604103
    await page.mouse.move(424,38);
    await page.mouse.move(938,63);
    await page.waitForTimeout(39)
    await page.waitForTimeout(171)
    await page.waitForTimeout(67)
    await page.waitForTimeout(12)
    await page.waitForTimeout(42)
    ts = 1648656604434
    await page.setViewportSize({ width: 1202, height: 607 });
    await page.waitForTimeout(208)
    ts = 1648656604642
    await page.mouse.move(490,80);
    await page.mouse.move(923,80);
    await page.waitForTimeout(281)
    ts = 1648656604923
    await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/index.html'}])
    await page.waitForTimeout(946)
    ts = 1648656605869
    await page.mouse.move(938,57);
    await page.mouse.move(938,45);
    await page.waitForTimeout(100)
    ts = 1648656605969
    await page.mouse.move(937,38);
    await page.mouse.move(936,36);
    await page.waitForTimeout(153)
    ts = 1648656606122
    await page.mouse.move(936, 36);
    await page.mouse.down();
    await page.waitForTimeout(47)
    ts = 1648656606169
    await page.mouse.up();
    await page.waitForTimeout(261)
    ts = 1648656606430
    await page.goto('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(1)
    ts = 1648656606431
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    ts = 1648656606431
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(167)
    ts = 1648656606598
    await page.mouse.move(936,36);
    await page.mouse.move(930,58);
    await page.waitForTimeout(33)
    await page.waitForTimeout(8)
    await page.waitForTimeout(47)
    await page.waitForTimeout(11)
    await page.waitForTimeout(45)
    ts = 1648656606742
    await page.setViewportSize({ width: 1202, height: 607 });
    await page.waitForTimeout(293)
    ts = 1648656607035
    await page.mouse.move(921,74);
    await page.mouse.move(910,86);
    await page.waitForTimeout(18)
    await page.waitForTimeout(82)
    ts = 1648656607135
    await page.mouse.move(902,92);
    await page.mouse.move(897,96);
    await page.waitForTimeout(100)
    ts = 1648656607235
    await page.mouse.move(895,96);
    await page.mouse.move(884,104);
    await page.waitForTimeout(151)
    ts = 1648656607386
    await page.mouse.move(874,111);

    await page.waitForTimeout(46)
    ts = 1648656607432
    await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/cart.html'}])
    await page.waitForTimeout(113)
    ts = 1648656607545
    await page.mouse.move(838,149);

    await page.waitForTimeout(54)
    ts = 1648656607599
    await page.mouse.move(838,150);
    await page.mouse.move(824,160);
    await page.waitForTimeout(235)
    ts = 1648656607834
    await page.mouse.move(767,179);

    await page.waitForTimeout(51)
    ts = 1648656607885
    await page.mouse.move(636,203);

    await page.waitForTimeout(51)
    ts = 1648656607936
    await page.mouse.move(576,213);
    await page.mouse.move(524,228);
    await page.waitForTimeout(50)
    ts = 1648656607986
    await page.mouse.move(418,226);
    await page.mouse.move(397,228);
    await page.waitForTimeout(281)
    ts = 1648656608267
    await page.mouse.move(680,223);
    await page.mouse.move(779,214);
    await page.waitForTimeout(221)
    ts = 1648656608488
    await page.mouse.move(831,213);
    await page.mouse.move(889,217);
    await page.waitForTimeout(150)
    ts = 1648656608638
    await page.mouse.move(914,217);
    await page.mouse.move(924,212);
    await page.waitForTimeout(152)
    ts = 1648656608790
    await page.mouse.move(928,208);
    await page.mouse.move(900,194);
    await page.waitForTimeout(832)
    ts = 1648656609622
    await page.mouse.move(898, 194);
    await page.mouse.down();
    await page.waitForTimeout(63)
    ts = 1648656609685
    await page.mouse.up();
    await page.waitForTimeout(314)
    ts = 1648656609999
    await page.mouse.move(895,194);
    await page.mouse.move(842,191);
    await page.waitForTimeout(149)
    ts = 1648656610148
    await page.mouse.move(768,182);

    await page.waitForTimeout(50)
    ts = 1648656610198
    await page.mouse.move(726,178);
    await page.mouse.move(662,176);
    await page.waitForTimeout(250)
    ts = 1648656610448
    await page.mouse.move(656,186);
    await page.mouse.move(652,187);
    await page.waitForTimeout(90)
    ts = 1648656610538
    await page.mouse.move(654, 186);
    await page.mouse.down();
    await page.waitForTimeout(62)
    ts = 1648656610600
    await page.mouse.up();
    await page.waitForTimeout(730)
    ts = 1648656611330
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(122)
    ts = 1648656611452
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(5)
    ts = 1648656611457
    await page.keyboard.down('KeyP');
    await page.waitForTimeout(8)
    ts = 1648656611465
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('P' !== text){
            await page.fill(selector,'P')
        }
    }
    await page.waitForTimeout(111)
    ts = 1648656611576
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(3)
    ts = 1648656611579
    await page.keyboard.up('KeyP');
    await page.waitForTimeout(78)
    ts = 1648656611657
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(12)
    ts = 1648656611669
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(12)
    ts = 1648656611681
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Pi' !== text){
            await page.fill(selector,'Pi')
        }
    }
    await page.waitForTimeout(82)
    ts = 1648656611763
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(16)
    ts = 1648656611779
    await page.keyboard.down('KeyE');
    await page.waitForTimeout(3)
    ts = 1648656611782
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Pie' !== text){
            await page.fill(selector,'Pie')
        }
    }
    await page.waitForTimeout(83)
    ts = 1648656611865
    await page.keyboard.down('KeyR');
    await page.waitForTimeout(16)
    ts = 1648656611881
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Pier' !== text){
            await page.fill(selector,'Pier')
        }
    }
    await page.waitForTimeout(49)
    ts = 1648656611930
    await page.keyboard.up('KeyE');
    await page.waitForTimeout(45)
    ts = 1648656611975
    await page.keyboard.up('KeyR');
    await page.waitForTimeout(127)
    ts = 1648656612102
    await page.keyboard.down('Tab');
    await page.waitForTimeout(12)
    ts = 1648656612114
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Pier' !== text){
            await page.fill(selector,'Pier')
        }
    }
    await page.waitForTimeout(101)
    ts = 1648656612215
    await page.keyboard.up('Tab');
    await page.waitForTimeout(665)
    ts = 1648656612880
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(17)
    ts = 1648656612897
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('c' !== text){
            await page.fill(selector,'c')
        }
    }
    await page.waitForTimeout(52)
    ts = 1648656612949
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(15)
    ts = 1648656612964
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ci' !== text){
            await page.fill(selector,'ci')
        }
    }
    await page.waitForTimeout(32)
    ts = 1648656612996
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(64)
    ts = 1648656613060
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(15)
    ts = 1648656613075
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(4)
    ts = 1648656613079
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('cia' !== text){
            await page.fill(selector,'cia')
        }
    }
    await page.waitForTimeout(71)
    ts = 1648656613150
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(13)
    ts = 1648656613163
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ciao' !== text){
            await page.fill(selector,'ciao')
        }
    }
    await page.waitForTimeout(10)
    ts = 1648656613173
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(86)
    ts = 1648656613259
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(19)
    ts = 1648656613278
    await page.keyboard.down('Tab');
    await page.waitForTimeout(4)
    ts = 1648656613282
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ciao' !== text){
            await page.fill(selector,'ciao')
        }
    }
    await page.waitForTimeout(86)
    ts = 1648656613368
    await page.keyboard.up('Tab');
    await page.waitForTimeout(93)
    ts = 1648656613461
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(2)
    ts = 1648656613463
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('c' !== text){
            await page.fill(selector,'c')
        }
    }
    await page.waitForTimeout(110)
    ts = 1648656613573
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(6)
    ts = 1648656613579
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(1)
    ts = 1648656613580
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ci' !== text){
            await page.fill(selector,'ci')
        }
    }
    await page.waitForTimeout(77)
    ts = 1648656613657
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(6)
    ts = 1648656613663
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('cia' !== text){
            await page.fill(selector,'cia')
        }
    }
    await page.waitForTimeout(7)
    ts = 1648656613670
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(95)
    ts = 1648656613765
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(3)
    ts = 1648656613768
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(11)
    ts = 1648656613779
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ciao' !== text){
            await page.fill(selector,'ciao')
        }
    }
    await page.waitForTimeout(73)
    ts = 1648656613852
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(5)
    ts = 1648656613857
    await page.keyboard.down('Tab');
    await page.waitForTimeout(7)
    ts = 1648656613864
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ciao' !== text){
            await page.fill(selector,'ciao')
        }
    }
    await page.waitForTimeout(81)
    ts = 1648656613945
    await page.keyboard.up('Tab');
    await page.waitForTimeout(64)
    ts = 1648656614009
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(3)
    ts = 1648656614012
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('c' !== text){
            await page.fill(selector,'c')
        }
    }
    await page.waitForTimeout(98)
    ts = 1648656614110
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(9)
    ts = 1648656614119
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(10)
    ts = 1648656614129
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ci' !== text){
            await page.fill(selector,'ci')
        }
    }
    await page.waitForTimeout(71)
    ts = 1648656614200
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(13)
    ts = 1648656614213
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('cia' !== text){
            await page.fill(selector,'cia')
        }
    }
    await page.waitForTimeout(1)
    ts = 1648656614214
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(82)
    ts = 1648656614296
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(26)
    ts = 1648656614322
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(7)
    ts = 1648656614329
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ciao' !== text){
            await page.fill(selector,'ciao')
        }
    }
    await page.waitForTimeout(75)
    ts = 1648656614404
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(676)
    ts = 1648656615080
    await page.mouse.move(650,189);
    await page.mouse.move(564,94);
    await page.waitForTimeout(152)
    ts = 1648656615232
    await page.mouse.move(658,191);
    await page.mouse.move(550,124);
    await page.waitForTimeout(179)
    ts = 1648656615411
    await page.mouse.move(660,192);
    await page.mouse.move(542,203);
    await page.waitForTimeout(200)
    ts = 1648656615611
    await page.mouse.move(602,137);

    await page.waitForTimeout(332)
    ts = 1648656615943
    await page.mouse.move(544,236);
    await page.mouse.move(545,220);
    await page.waitForTimeout(201)
    ts = 1648656616144
    await page.mouse.move(544,215);
    await page.mouse.move(532,216);
    await page.waitForTimeout(305)
    ts = 1648656616449
    await page.mouse.move(479,335);

    await page.waitForTimeout(51)
    ts = 1648656616500
    await page.mouse.move(411,405);
    await page.mouse.move(523,406);
    await page.waitForTimeout(50)
    ts = 1648656616550
    await page.mouse.move(375,426);
    await page.mouse.move(516,419);
    await page.waitForTimeout(51)
    ts = 1648656616601
    await page.mouse.move(360,448);

    await page.waitForTimeout(51)
    ts = 1648656616652
    await page.mouse.move(338,467);
    await page.mouse.move(491,554);
    await page.waitForTimeout(51)
    ts = 1648656616703
    await page.mouse.move(333,458);

    await page.waitForTimeout(52)
    ts = 1648656616755
    await page.mouse.move(334,454);
    await page.mouse.move(334,452);
    await page.waitForTimeout(152)
    ts = 1648656616907
    await page.mouse.move(402,480);
    await page.mouse.move(559,478);
    await page.waitForTimeout(170)
    ts = 1648656617077
    await page.mouse.move(497,537);

    await page.waitForTimeout(103)
    ts = 1648656617180
    await page.mouse.move(505,473);
    await page.mouse.move(546,474);
    await page.waitForTimeout(368)
    ts = 1648656617548
    await page.mouse.move(524, 406);
    await page.mouse.down();
    await page.waitForTimeout(11)
    ts = 1648656617559
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ciao' !== text){
            await page.fill(selector,'ciao')
        }
    }
    await page.waitForTimeout(46)
    ts = 1648656617605
    await page.mouse.up();
    await page.waitForTimeout(1487)
    ts = 1648656619092
    selector = 'input#month.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('October' !== text){
            await page.fill(selector,'October')
        }
    }
    await page.waitForTimeout(233)
    ts = 1648656619325
    await page.mouse.move(494,482);
    await page.mouse.move(511,485);
    await page.waitForTimeout(170)
    ts = 1648656619495
    await page.mouse.move(494, 498);
    await page.mouse.down();
    await page.waitForTimeout(57)
    ts = 1648656619552
    await page.mouse.up();
    await page.waitForTimeout(557)
    ts = 1648656620109
    selector = 'input#year.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('1990' !== text){
            await page.fill(selector,'1990')
        }
    }
    await page.waitForTimeout(234)
    ts = 1648656620343
    await page.mouse.move(568,418);

    await page.waitForTimeout(52)
    ts = 1648656620395
    await page.mouse.move(612,382);

    await page.waitForTimeout(51)
    ts = 1648656620446
    await page.mouse.move(619,378);
    await page.mouse.move(785,498);
    await page.waitForTimeout(101)
    ts = 1648656620547
    await page.mouse.move(624,375);
    await page.mouse.move(787,474);
    await page.waitForTimeout(50)
    ts = 1648656620597
    await page.mouse.move(633,375);
    await page.mouse.move(690,416);
    await page.waitForTimeout(153)
    ts = 1648656620750
    await page.mouse.move(770,518);
    await page.mouse.move(766,510);
    await page.waitForTimeout(440)
    ts = 1648656621190
    await page.mouse.move(790,500);
    await page.mouse.move(788,476);
    await page.waitForTimeout(503)
    ts = 1648656621693
    await page.mouse.move(776,536);
    await page.mouse.move(766,508);
    await page.waitForTimeout(448)
    ts = 1648656622141
    await page.mouse.move(766,502);

    await page.waitForTimeout(50)
    ts = 1648656622191
    await page.mouse.move(766,500);
    await page.mouse.move(765,496);
    await page.waitForTimeout(52)
    ts = 1648656622243
    await page.evaluate(() => window.scroll(0,4.666666507720947));
    await page.waitForTimeout(51)
    ts = 1648656622294
    await page.evaluate(() => window.scroll(0,29.33333396911621));
    await page.waitForTimeout(51)
    ts = 1648656622345
    await page.evaluate(() => window.scroll(0,63.33333206176758));
    await page.waitForTimeout(51)
    ts = 1648656622396
    await page.evaluate(() => window.scroll(0,80.66666412353516));
    await page.waitForTimeout(51)
    ts = 1648656622447
    await page.evaluate(() => window.scroll(0,81.33333587646484));
    await page.waitForTimeout(25)
    ts = 1648656622472
    await page.mouse.move(764,496);

    await page.waitForTimeout(50)
    ts = 1648656622522
    await page.mouse.move(764,507);

    await page.waitForTimeout(50)
    ts = 1648656622572
    await page.mouse.move(764,523);
    await page.mouse.move(761,541);
    await page.waitForTimeout(203)
    ts = 1648656622775
    await page.mouse.move(764, 543);
    await page.mouse.down();
    await page.waitForTimeout(61)
    ts = 1648656622836
    await page.mouse.up();
    await page.waitForTimeout(2)
    await page.waitForTimeout(1782)
    ts = 1648656624620
    await page.mouse.move(759,541);
    await page.mouse.move(754,526);
    await page.waitForTimeout(1016)
    ts = 1648656625636
    await page.mouse.move(760,517);
    await page.mouse.move(766,512);
    await page.waitForTimeout(100)
    ts = 1648656625736
    await page.mouse.move(795,468);
    await page.mouse.move(756,476);
    await page.waitForTimeout(150)
    ts = 1648656625886
    await page.mouse.move(798,415);
    await page.mouse.move(782,435);
    await page.waitForTimeout(51)
    ts = 1648656625937
    await page.mouse.move(797,411);
    await page.mouse.move(793,410);
    await page.waitForTimeout(515)
    ts = 1648656626452
    await page.mouse.move(752,482);
    await page.mouse.move(725,489);
    await page.waitForTimeout(100)
    ts = 1648656626552
    await page.mouse.move(748,490);
    await page.mouse.move(724,498);
    await page.waitForTimeout(434)
    ts = 1648656626986
    await page.mouse.move(732,511);
    await page.mouse.move(722,517);
    await page.waitForTimeout(1315)
    ts = 1648656628301
    await page.mouse.move(720,534);
    await page.mouse.move(720,543);
    await page.waitForTimeout(152)
    ts = 1648656628453
    await page.mouse.move(718,545);
    await page.mouse.move(718,557);
    await page.waitForTimeout(51)
    ts = 1648656628504
    await page.mouse.move(714,545);
    await page.mouse.move(715,556);
    await page.waitForTimeout(52)
    ts = 1648656628556
    await page.mouse.move(706,541);
    await page.mouse.move(707,548);
    await page.waitForTimeout(1310)
    ts = 1648656629866
    await page.mouse.move(728, 557);
    await page.mouse.down();
    await page.waitForTimeout(44)
    ts = 1648656629910
    await page.mouse.up();
    await page.waitForTimeout(2)
    await page.waitForTimeout(524)
    ts = 1648656630436
    await page.mouse.move(713,556);
    await page.mouse.move(788,521);
    await page.waitForTimeout(229)
    ts = 1648656630665
    await page.mouse.move(716,548);
    await page.mouse.move(784,544);
    await page.waitForTimeout(200)
    ts = 1648656630865
    await page.mouse.move(766,498);
    await page.mouse.move(774,504);
    await page.waitForTimeout(1596)
    ts = 1648656632461
    await page.mouse.move(784, 544);
    await page.mouse.down();
    await page.waitForTimeout(76)
    ts = 1648656632537
    await page.mouse.up();
    await page.waitForTimeout(2)
    await page.waitForTimeout(741)
    ts = 1648656633280
    await page.mouse.move(784,540);
    await page.mouse.move(784,534);
    await page.waitForTimeout(101)
    ts = 1648656633381
    await page.mouse.move(784,506);
    await page.mouse.move(778,434);
    await page.waitForTimeout(50)
    ts = 1648656633431
    await page.mouse.move(782,474);

    await page.waitForTimeout(100)
    ts = 1648656633531
    await page.mouse.move(774,398);
    await page.mouse.move(797,332);
    await page.waitForTimeout(515)
    ts = 1648656634046
    await page.mouse.move(816,318);

    await page.waitForTimeout(50)
    ts = 1648656634096
    await page.mouse.move(833,291);

    await page.waitForTimeout(50)
    ts = 1648656634146
    await page.mouse.move(856,254);
    await page.mouse.move(846,191);
    await page.waitForTimeout(300)
    ts = 1648656634446
    await page.mouse.move(840,190);

    await page.waitForTimeout(0)
    ts = 1648656634446
    await page.mouse.move(840,190);
    await page.mouse.move(596,464);
    await page.waitForTimeout(50)
    ts = 1648656634496
    await page.mouse.move(811,188);
    await page.mouse.move(684,502);
    await page.waitForTimeout(505)
    ts = 1648656635001
    await page.mouse.move(729,384);

    await page.waitForTimeout(51)
    ts = 1648656635052
    await page.mouse.move(766,474);
    await page.mouse.move(633,476);
    await page.waitForTimeout(51)
    ts = 1648656635103
    await page.mouse.move(794,524);
    await page.mouse.move(746,532);
    await page.waitForTimeout(102)
    ts = 1648656635205
    await page.mouse.move(798,561);
    await page.mouse.move(796,562);
    await page.waitForTimeout(748)
    ts = 1648656635953
    await page.mouse.move(608,462);
    await page.mouse.move(596,464);
    await page.waitForTimeout(280)
    ts = 1648656636233
    await page.mouse.move(594, 464);
    await page.mouse.down();
    await page.waitForTimeout(0)
    ts = 1648656636233
    await page.mouse.move(594, 464);
    await page.mouse.down();
    await page.waitForTimeout(94)
    ts = 1648656636327
    await page.mouse.up();
    await page.waitForTimeout(0)
    ts = 1648656636327
    await page.mouse.up();
    await page.waitForTimeout(245)
    ts = 1648656636572
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(1)
    ts = 1648656636573
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    ts = 1648656636573
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(186)
    ts = 1648656636759
    await page.mouse.move(594,464);

    await page.waitForTimeout(27)
    await page.waitForTimeout(214)
    await page.waitForTimeout(34)
    await page.waitForTimeout(5)
    await page.waitForTimeout(45)
    ts = 1648656637084
    await page.setViewportSize({ width: 1202, height: 607 });
    await page.waitForTimeout(276)
    ts = 1648656637360
    await page.mouse.move(596,461);

    await page.waitForTimeout(50)
    ts = 1648656637410
    await page.mouse.move(611,446);
    await page.mouse.move(642,428);
    await page.waitForTimeout(100)
    ts = 1648656637510
    await page.mouse.move(724,386);

    await page.waitForTimeout(51)
    ts = 1648656637561
    await page.mouse.move(740,377);

    await page.waitForTimeout(13)
    ts = 1648656637574
    await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/index.html'}])
    await page.waitForTimeout(89)
    ts = 1648656637663
    await page.mouse.move(954,212);
    await page.mouse.move(1057,80);
    await page.waitForTimeout(202)
    ts = 1648656637865
    await page.mouse.move(1085,45);
    await page.mouse.move(1120,0);
    await browser.close()
}
)
