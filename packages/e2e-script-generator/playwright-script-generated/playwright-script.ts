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
    let requests:any[] = []
    requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:07:57 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:08:07 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","x-unit-story":"1648656476519","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
requests.push({url: `https://api.demoblaze.com/entries`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","x-unit-story":"1648656476728","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"})
    requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","x-unit-story":"1648656476756","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","x-unit-story":"1648656476764","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
    requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:07:57 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:08:07 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","x-unit-story":"1648656486002","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
requests.push({url: `https://api.demoblaze.com/view`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"201","content-type":"application/json","x-unit-story":"1648656486013","access-control-allow-origin":"*"},  body: "{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"}\n"})
    requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","x-unit-story":"1648656486053","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","x-unit-story":"1648656486064","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
    requests.push({url: `https://api.demoblaze.com/addtocart`,status: 200, contentType: "text/html; charset=utf-8", headers: {"content-length":"0","content-type":"text/html; charset=utf-8","x-unit-story":"1648656489675","access-control-allow-origin":"*"},  body: ""})
requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:10:05 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:10:15 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","x-unit-story":"1648656604142","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
    requests.push({url: `https://api.demoblaze.com/entries`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","x-unit-story":"1648656604313","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"})
requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","x-unit-story":"1648656604380","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
    requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","x-unit-story":"1648656604392","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:10:05 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:10:15 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","x-unit-story":"1648656606631","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
    requests.push({url: `https://api.demoblaze.com/viewcart`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"136","content-type":"application/json","x-unit-story":"1648656606639","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cookie\":\"user=d666f6a5-9c08-2456-20a7-38f17bfabb3a\",\"id\":\"8b4f05ac-192a-ee94-384e-5dd497480ba0\",\"prod_id\":2}]}\n"})
requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","x-unit-story":"1648656606686","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
    requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","x-unit-story":"1648656606697","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
requests.push({url: `https://api.demoblaze.com/view`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"201","content-type":"application/json","x-unit-story":"1648656607053","access-control-allow-origin":"*"},  body: "{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"}\n"})
    requests.push({url: `https://api.demoblaze.com/deletecart`,status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","x-unit-story":"1648656622838","access-control-allow-origin":"*"},  body: "\"Item deleted.\"\n"})
requests.push({url: `https://api.demoblaze.com/deletecart`,status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","x-unit-story":"1648656629912","access-control-allow-origin":"*"},  body: "\"Item deleted.\"\n"})
    requests.push({url: `https://api.demoblaze.com/deletecart`,status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","x-unit-story":"1648656632539","access-control-allow-origin":"*"},  body: "\"Item deleted.\"\n"})
requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Wed, 30 Mar 2022 16:10:37 GMT","etag":"\"TTo8pA\"","expires":"Wed, 30 Mar 2022 16:10:47 GMT","server":"Google Frontend","x-cloud-trace-context":"3e504617e45082686b161b5d8f8cdf0e","x-unit-story":"1648656636786","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
    requests.push({url: `https://api.demoblaze.com/entries`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","x-unit-story":"1648656637000","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"})
requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 15:32:49 GMT","expires":"Wed, 30 Mar 2022 16:32:49 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdu6WdfXKrFEVif230OBHj7EMP6-sW101bvvxZzsQPTQ7xjnFtMD2PQ-kbLYu_CYpUhHqoPSUf5Kny4CQHejkLbc7d_QdQ","x-unit-story":"1648656637034","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
    requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Wed, 30 Mar 2022 16:06:10 GMT","expires":"Wed, 30 Mar 2022 17:06:10 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsr2NmhS81ilGvQh6WkE3HgI_R3lbLB0Bwk472IVpHQREwtKnG_hAV35udRMsokVaR_IqJFOm65Y9PaoNRs3kE","x-unit-story":"1648656637039","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
    await page.route('**/*', (route) => {  
        let responseOptions = {} as any
        const index = requests.findIndex(r => r.url == route.request().url())
        if(index >= 0){
            responseOptions = requests.splice(index, 1)[0]
            route.fulfill(responseOptions)
        }else {
            route.continue()
        }
    });
await page.goto('https://www.demoblaze.com/');
await page.waitForTimeout(3)
sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
await page.evaluate(sessionStorage => {
  for (const key in sessionStorage) {
    window.sessionStorage.setItem(key, sessionStorage[key]);}
}, sessionStorage);
await page.waitForTimeout(0)
localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
await page.evaluate(localStorage => {
  for (const key in localStorage) {
    window.localStorage.setItem(key, localStorage[key]);}
}, localStorage);
await page.waitForTimeout(166)
await page.mouse.move(1028,94);
await page.waitForTimeout(0)

await page.waitForTimeout(1)
await page.evaluate(() => window.scroll(0,42));
await page.waitForTimeout(37)
await page.waitForTimeout(146)
await page.evaluate(() => window.scroll(0,0));
await page.waitForTimeout(63)
await page.waitForTimeout(28)
await page.waitForTimeout(8)
await page.waitForTimeout(50)
await page.setViewportSize({ width: 1202, height: 607 });
await page.waitForTimeout(911)
await page.mouse.move(1024,94);
await page.waitForTimeout(50)
await page.mouse.move(1017,93);
await page.waitForTimeout(100)
await page.mouse.move(927,84);
await page.waitForTimeout(300)
await page.mouse.move(736,76);
await page.waitForTimeout(1183)
await page.mouse.move(736,78);
await page.waitForTimeout(1182)
await page.mouse.move(736,96);
await page.waitForTimeout(1048)
await page.evaluate(() => window.scroll(0,1.3333333730697632));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,14));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,54));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,90.66666412353516));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,100));
await page.waitForTimeout(1266)
await page.evaluate(() => window.scroll(0,101.33333587646484));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,125.33333587646484));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,168.6666717529297));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,190.6666717529297));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,200));
await page.waitForTimeout(566)
await page.mouse.move(732,97);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(656,123);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(580,154);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(577,156);
await page.waitForTimeout(0)

await page.waitForTimeout(483)
await page.evaluate(() => window.scroll(0,201.3333282470703));
await page.waitForTimeout(52)
await page.evaluate(() => window.scroll(0,214));
await page.waitForTimeout(51)
await page.evaluate(() => window.scroll(0,268.6666564941406));
await page.waitForTimeout(52)
await page.evaluate(() => window.scroll(0,296.6666564941406));
await page.waitForTimeout(50)
await page.evaluate(() => window.scroll(0,300));
await page.waitForTimeout(362)
await page.mouse.move(578,156);
await page.waitForTimeout(0)

await page.waitForTimeout(49)
await page.mouse.move(595,164);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(611,173);
await page.waitForTimeout(406)
await page.mouse.move(670,257);
await page.waitForTimeout(456)
await page.mouse.move(672,272);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(674,284);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(674,290);
await page.waitForTimeout(101)
await page.mouse.move(674,298);
await page.waitForTimeout(1318)
await page.mouse.move(674, 299);
await page.mouse.down();
await page.waitForTimeout(92)
await page.mouse.up();
await page.waitForTimeout(266)
await page.goto('https://www.demoblaze.com/prod.html?idp_=2');
await page.waitForTimeout(1)
sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
await page.evaluate(sessionStorage => {
  for (const key in sessionStorage) {
    window.sessionStorage.setItem(key, sessionStorage[key]);}
}, sessionStorage);
await page.waitForTimeout(0)
localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
await page.evaluate(localStorage => {
  for (const key in localStorage) {
    window.localStorage.setItem(key, localStorage[key]);}
}, localStorage);
await page.waitForTimeout(153)
await page.mouse.move(674,299);
await page.waitForTimeout(0)

await page.waitForTimeout(28)
await page.waitForTimeout(11)
await page.waitForTimeout(40)
await page.waitForTimeout(11)
await page.waitForTimeout(41)
await page.setViewportSize({ width: 1202, height: 607 });
await page.waitForTimeout(716)
await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/prod.html?idp_=2'}])
await page.waitForTimeout(1279)
await page.mouse.move(674,302);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(669,314);
await page.waitForTimeout(100)
await page.mouse.move(652,342);
await page.waitForTimeout(150)
await page.mouse.move(645,352);
await page.waitForTimeout(50)
await page.mouse.move(636,367);
await page.waitForTimeout(100)
await page.mouse.move(626,380);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(618,392);
await page.waitForTimeout(102)
await page.mouse.move(609,406);
await page.waitForTimeout(152)
await page.mouse.move(603,416);
await page.waitForTimeout(256)
await page.mouse.move(582,447);
await page.waitForTimeout(960)
await page.mouse.move(582, 447);
await page.mouse.down();
await page.waitForTimeout(112)
await page.mouse.up();
await page.waitForTimeout(1)
await page.waitForTimeout(1824)
await page.mouse.move(582,446);
await page.waitForTimeout(298)
await page.mouse.move(584,432);
await page.waitForTimeout(348)
await page.mouse.move(586,428);
await page.waitForTimeout(316)
await page.mouse.move(591,414);
await page.waitForTimeout(383)
await page.mouse.move(592,413);
await page.waitForTimeout(539)
await page.mouse.move(608,394);
await page.waitForTimeout(108318)
await page.mouse.move(796,98);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(797,99);
await page.waitForTimeout(1170)
await page.mouse.move(440,90);
await page.waitForTimeout(1221)
await page.mouse.move(422,81);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(410,73);
await page.waitForTimeout(0)

await page.waitForTimeout(0)
await page.mouse.move(410,73);
await page.waitForTimeout(1545)
await page.mouse.move(427,36);
await page.waitForTimeout(50)
await page.mouse.move(402,56);
await page.waitForTimeout(1884)
await page.mouse.move(424,36);
await page.waitForTimeout(585)
await page.mouse.move(475,58);
await page.waitForTimeout(500)
await page.mouse.move(494,57);
await page.waitForTimeout(551)
await page.mouse.move(488,56);
await page.waitForTimeout(155)
await page.mouse.move(446,48);
await page.waitForTimeout(459)
await page.mouse.move(424, 35);
await page.mouse.down();
await page.waitForTimeout(0)
await page.mouse.move(424, 35);
await page.mouse.down();
await page.waitForTimeout(59)
await page.mouse.up();
await page.waitForTimeout(0)
await page.mouse.up();
await page.waitForTimeout(348)
await page.goto('https://www.demoblaze.com/index.html');
await page.waitForTimeout(3)
sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
await page.evaluate(sessionStorage => {
  for (const key in sessionStorage) {
    window.sessionStorage.setItem(key, sessionStorage[key]);}
}, sessionStorage);
await page.waitForTimeout(0)
localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
await page.evaluate(localStorage => {
  for (const key in localStorage) {
    window.localStorage.setItem(key, localStorage[key]);}
}, localStorage);
await page.waitForTimeout(178)
await page.mouse.move(424,38);
await page.waitForTimeout(1716)
await page.mouse.move(938,63);
await page.waitForTimeout(39)
await page.waitForTimeout(171)
await page.waitForTimeout(67)
await page.waitForTimeout(12)
await page.waitForTimeout(42)
await page.setViewportSize({ width: 1202, height: 607 });
await page.waitForTimeout(208)
await page.mouse.move(490,80);
await page.waitForTimeout(1027)
await page.mouse.move(923,80);
await page.waitForTimeout(281)
await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/index.html'}])
await page.waitForTimeout(946)
await page.mouse.move(938,57);
await page.waitForTimeout(50)
await page.mouse.move(938,45);
await page.waitForTimeout(100)
await page.mouse.move(937,38);
await page.waitForTimeout(50)
await page.mouse.move(936,36);
await page.waitForTimeout(153)
await page.mouse.move(936, 36);
await page.mouse.down();
await page.waitForTimeout(47)
await page.mouse.up();
await page.waitForTimeout(261)
await page.goto('https://www.demoblaze.com/cart.html');
await page.waitForTimeout(1)
sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
await page.evaluate(sessionStorage => {
  for (const key in sessionStorage) {
    window.sessionStorage.setItem(key, sessionStorage[key]);}
}, sessionStorage);
await page.waitForTimeout(0)
localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
await page.evaluate(localStorage => {
  for (const key in localStorage) {
    window.localStorage.setItem(key, localStorage[key]);}
}, localStorage);
await page.waitForTimeout(167)
await page.mouse.move(936,36);
await page.waitForTimeout(387)
await page.mouse.move(930,58);
await page.waitForTimeout(33)
await page.waitForTimeout(8)
await page.waitForTimeout(47)
await page.waitForTimeout(11)
await page.waitForTimeout(45)
await page.setViewportSize({ width: 1202, height: 607 });
await page.waitForTimeout(293)
await page.mouse.move(921,74);
await page.waitForTimeout(50)
await page.mouse.move(910,86);
await page.waitForTimeout(18)
await page.waitForTimeout(82)
await page.mouse.move(902,92);
await page.waitForTimeout(50)
await page.mouse.move(897,96);
await page.waitForTimeout(100)
await page.mouse.move(895,96);
await page.waitForTimeout(101)
await page.mouse.move(884,104);
await page.waitForTimeout(151)
await page.mouse.move(874,111);
await page.waitForTimeout(0)

await page.waitForTimeout(46)
await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/cart.html'}])
await page.waitForTimeout(113)
await page.mouse.move(838,149);
await page.waitForTimeout(0)

await page.waitForTimeout(54)
await page.mouse.move(838,150);
await page.waitForTimeout(185)
await page.mouse.move(824,160);
await page.waitForTimeout(235)
await page.mouse.move(767,179);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(636,203);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(576,213);
await page.waitForTimeout(281)
await page.mouse.move(524,228);
await page.waitForTimeout(50)
await page.mouse.move(418,226);
await page.waitForTimeout(181)
await page.mouse.move(397,228);
await page.waitForTimeout(281)
await page.mouse.move(680,223);
await page.waitForTimeout(153)
await page.mouse.move(779,214);
await page.waitForTimeout(221)
await page.mouse.move(831,213);
await page.waitForTimeout(100)
await page.mouse.move(889,217);
await page.waitForTimeout(150)
await page.mouse.move(914,217);
await page.waitForTimeout(102)
await page.mouse.move(924,212);
await page.waitForTimeout(152)
await page.mouse.move(928,208);
await page.waitForTimeout(413)
await page.mouse.move(900,194);
await page.waitForTimeout(832)
await page.mouse.move(898, 194);
await page.mouse.down();
await page.waitForTimeout(63)
await page.mouse.up();
await page.waitForTimeout(314)
await page.mouse.move(895,194);
await page.waitForTimeout(99)
await page.mouse.move(842,191);
await page.waitForTimeout(149)
await page.mouse.move(768,182);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(726,178);
await page.waitForTimeout(200)
await page.mouse.move(662,176);
await page.waitForTimeout(250)
await page.mouse.move(656,186);
await page.waitForTimeout(348)
await page.mouse.move(652,187);
await page.waitForTimeout(90)
await page.mouse.move(654, 186);
await page.mouse.down();
await page.waitForTimeout(62)
await page.mouse.up();
await page.waitForTimeout(730)
await page.keyboard.down('CapsLock');
await page.waitForTimeout(122)
await page.keyboard.up('CapsLock');
await page.waitForTimeout(5)
await page.keyboard.down('KeyP');
await page.waitForTimeout(8)
selector = 'input#name.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('P' !== text){
        await page.fill(selector,'P')
    }
}
await page.waitForTimeout(111)
await page.keyboard.down('CapsLock');
await page.waitForTimeout(3)
await page.keyboard.up('KeyP');
await page.waitForTimeout(78)
await page.keyboard.up('CapsLock');
await page.waitForTimeout(12)
await page.keyboard.down('KeyI');
await page.waitForTimeout(12)
selector = 'input#name.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('Pi' !== text){
        await page.fill(selector,'Pi')
    }
}
await page.waitForTimeout(82)
await page.keyboard.up('KeyI');
await page.waitForTimeout(16)
await page.keyboard.down('KeyE');
await page.waitForTimeout(3)
selector = 'input#name.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('Pie' !== text){
        await page.fill(selector,'Pie')
    }
}
await page.waitForTimeout(83)
await page.keyboard.down('KeyR');
await page.waitForTimeout(16)
selector = 'input#name.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('Pier' !== text){
        await page.fill(selector,'Pier')
    }
}
await page.waitForTimeout(49)
await page.keyboard.up('KeyE');
await page.waitForTimeout(45)
await page.keyboard.up('KeyR');
await page.waitForTimeout(127)
await page.keyboard.down('Tab');
await page.waitForTimeout(12)
selector = 'input#name.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('Pier' !== text){
        await page.fill(selector,'Pier')
    }
}
await page.waitForTimeout(101)
await page.keyboard.up('Tab');
await page.waitForTimeout(665)
await page.keyboard.down('KeyC');
await page.waitForTimeout(17)
selector = 'input#country.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('c' !== text){
        await page.fill(selector,'c')
    }
}
await page.waitForTimeout(52)
await page.keyboard.down('KeyI');
await page.waitForTimeout(15)
selector = 'input#country.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ci' !== text){
        await page.fill(selector,'ci')
    }
}
await page.waitForTimeout(32)
await page.keyboard.up('KeyC');
await page.waitForTimeout(64)
await page.keyboard.up('KeyI');
await page.waitForTimeout(15)
await page.keyboard.down('KeyA');
await page.waitForTimeout(4)
selector = 'input#country.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('cia' !== text){
        await page.fill(selector,'cia')
    }
}
await page.waitForTimeout(71)
await page.keyboard.down('KeyO');
await page.waitForTimeout(13)
selector = 'input#country.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill(selector,'ciao')
    }
}
await page.waitForTimeout(10)
await page.keyboard.up('KeyA');
await page.waitForTimeout(86)
await page.keyboard.up('KeyO');
await page.waitForTimeout(19)
await page.keyboard.down('Tab');
await page.waitForTimeout(4)
selector = 'input#country.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill(selector,'ciao')
    }
}
await page.waitForTimeout(86)
await page.keyboard.up('Tab');
await page.waitForTimeout(93)
await page.keyboard.down('KeyC');
await page.waitForTimeout(2)
selector = 'input#city.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('c' !== text){
        await page.fill(selector,'c')
    }
}
await page.waitForTimeout(110)
await page.keyboard.down('KeyI');
await page.waitForTimeout(6)
await page.keyboard.up('KeyC');
await page.waitForTimeout(1)
selector = 'input#city.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ci' !== text){
        await page.fill(selector,'ci')
    }
}
await page.waitForTimeout(77)
await page.keyboard.down('KeyA');
await page.waitForTimeout(6)
selector = 'input#city.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('cia' !== text){
        await page.fill(selector,'cia')
    }
}
await page.waitForTimeout(7)
await page.keyboard.up('KeyI');
await page.waitForTimeout(95)
await page.keyboard.down('KeyO');
await page.waitForTimeout(3)
await page.keyboard.up('KeyA');
await page.waitForTimeout(11)
selector = 'input#city.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill(selector,'ciao')
    }
}
await page.waitForTimeout(73)
await page.keyboard.up('KeyO');
await page.waitForTimeout(5)
await page.keyboard.down('Tab');
await page.waitForTimeout(7)
selector = 'input#city.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill(selector,'ciao')
    }
}
await page.waitForTimeout(81)
await page.keyboard.up('Tab');
await page.waitForTimeout(64)
await page.keyboard.down('KeyC');
await page.waitForTimeout(3)
selector = 'input#card.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('c' !== text){
        await page.fill(selector,'c')
    }
}
await page.waitForTimeout(98)
await page.keyboard.up('KeyC');
await page.waitForTimeout(9)
await page.keyboard.down('KeyI');
await page.waitForTimeout(10)
selector = 'input#card.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ci' !== text){
        await page.fill(selector,'ci')
    }
}
await page.waitForTimeout(71)
await page.keyboard.down('KeyA');
await page.waitForTimeout(13)
selector = 'input#card.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('cia' !== text){
        await page.fill(selector,'cia')
    }
}
await page.waitForTimeout(1)
await page.keyboard.up('KeyI');
await page.waitForTimeout(82)
await page.keyboard.up('KeyA');
await page.waitForTimeout(26)
await page.keyboard.down('KeyO');
await page.waitForTimeout(7)
selector = 'input#card.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill(selector,'ciao')
    }
}
await page.waitForTimeout(75)
await page.keyboard.up('KeyO');
await page.waitForTimeout(676)
await page.mouse.move(650,189);
await page.waitForTimeout(709)
await page.mouse.move(564,94);
await page.waitForTimeout(49)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,1.3333333730697632)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(49)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,25.33333396911621)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(50)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,54)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(4)
await page.mouse.move(658,191);
await page.waitForTimeout(608)
await page.mouse.move(550,124);
await page.waitForTimeout(46)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,90.66666412353516)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,100)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(82)
await page.mouse.move(660,192);
await page.waitForTimeout(481)
await page.mouse.move(542,203);
await page.waitForTimeout(200)
await page.mouse.move(602,137);
await page.waitForTimeout(0)

await page.waitForTimeout(332)
await page.mouse.move(544,236);
await page.waitForTimeout(151)
await page.mouse.move(545,220);
await page.waitForTimeout(102)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,101.33333587646484)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(52)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,125.33333587646484)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(47)
await page.mouse.move(544,215);
await page.waitForTimeout(254)
await page.mouse.move(532,216);
await page.waitForTimeout(5)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,168.6666717529297)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(50)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,196.6666717529297)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,200)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(199)
await page.mouse.move(479,335);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(411,405);
await page.waitForTimeout(1190)
await page.mouse.move(523,406);
await page.waitForTimeout(50)
await page.mouse.move(375,426);
await page.waitForTimeout(886)
await page.mouse.move(516,419);
await page.waitForTimeout(51)
await page.mouse.move(360,448);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(338,467);
await page.waitForTimeout(375)
await page.mouse.move(491,554);
await page.waitForTimeout(51)
await page.mouse.move(333,458);
await page.waitForTimeout(0)

await page.waitForTimeout(52)
await page.mouse.move(334,454);
await page.waitForTimeout(50)
await page.mouse.move(334,452);
await page.waitForTimeout(152)
await page.mouse.move(402,480);
await page.waitForTimeout(1323)
await page.mouse.move(559,478);
await page.waitForTimeout(170)
await page.mouse.move(497,537);
await page.waitForTimeout(0)

await page.waitForTimeout(103)
await page.mouse.move(505,473);
await page.waitForTimeout(1101)
await page.mouse.move(546,474);
await page.waitForTimeout(368)
await page.mouse.move(524, 406);
await page.mouse.down();
await page.waitForTimeout(11)
selector = 'input#card.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('ciao' !== text){
        await page.fill(selector,'ciao')
    }
}
await page.waitForTimeout(46)
await page.mouse.up();
await page.waitForTimeout(1487)
selector = 'input#month.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('October' !== text){
        await page.fill(selector,'October')
    }
}
await page.waitForTimeout(233)
await page.mouse.move(494,482);
await page.waitForTimeout(967)
await page.mouse.move(511,485);
await page.waitForTimeout(170)
await page.mouse.move(494, 498);
await page.mouse.down();
await page.waitForTimeout(57)
await page.mouse.up();
await page.waitForTimeout(557)
selector = 'input#year.form-control[type="text"]'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('1990' !== text){
        await page.fill(selector,'1990')
    }
}
await page.waitForTimeout(234)
await page.mouse.move(568,418);
await page.waitForTimeout(0)

await page.waitForTimeout(31)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,201.3333282470703)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(21)
await page.mouse.move(612,382);
await page.waitForTimeout(0)

await page.waitForTimeout(29)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,218)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(22)
await page.mouse.move(619,378);
await page.waitForTimeout(1044)
await page.mouse.move(785,498);
await page.waitForTimeout(29)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,225.3333282470703)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(49)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,119.33333587646484)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(23)
await page.mouse.move(624,375);
await page.waitForTimeout(893)
await page.mouse.move(787,474);
await page.waitForTimeout(27)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,9.333333015441895)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(23)
await page.mouse.move(633,375);
await page.waitForTimeout(102)
await page.mouse.move(690,416);
await page.waitForTimeout(30)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,0)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(123)
await page.mouse.move(770,518);
await page.waitForTimeout(1289)
await page.mouse.move(766,510);
await page.waitForTimeout(340)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,1.3333333730697632)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(50)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,14.666666984558105)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(50)
await page.mouse.move(790,500);
await page.waitForTimeout(100)
await page.mouse.move(788,476);
await page.waitForTimeout(1)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,16)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,14.666666984558105)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,40)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,79.33333587646484)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,99.33333587646484)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,100)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(247)
await page.mouse.move(776,536);
await page.waitForTimeout(397)
await page.mouse.move(766,508);
await page.waitForTimeout(297)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,101.33333587646484)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(50)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,124.66666412353516)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,184)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(50)
await page.mouse.move(766,502);
await page.waitForTimeout(0)

await page.waitForTimeout(1)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,252)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(49)
await page.mouse.move(766,500);
await page.waitForTimeout(217)
await page.mouse.move(765,496);
await page.waitForTimeout(1)
await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(0,276.6666564941406)
}, 'div#orderModal.modal.fade.show[tabindex="-1"][role="dialog"][aria-labelledby="orderModalLabel"][style="display: block;"]');
await page.waitForTimeout(51)
await page.evaluate(() => window.scroll(0,4.666666507720947));
await page.waitForTimeout(51)
await page.evaluate(() => window.scroll(0,29.33333396911621));
await page.waitForTimeout(51)
await page.evaluate(() => window.scroll(0,63.33333206176758));
await page.waitForTimeout(51)
await page.evaluate(() => window.scroll(0,80.66666412353516));
await page.waitForTimeout(51)
await page.evaluate(() => window.scroll(0,81.33333587646484));
await page.waitForTimeout(25)
await page.mouse.move(764,496);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(764,507);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(764,523);
await page.waitForTimeout(1499)
await page.mouse.move(761,541);
await page.waitForTimeout(203)
await page.mouse.move(764, 543);
await page.mouse.down();
await page.waitForTimeout(61)
await page.mouse.up();
await page.waitForTimeout(2)
await page.waitForTimeout(1782)
await page.mouse.move(759,541);
await page.waitForTimeout(966)
await page.mouse.move(754,526);
await page.waitForTimeout(1016)
await page.mouse.move(760,517);
await page.waitForTimeout(50)
await page.mouse.move(766,512);
await page.waitForTimeout(100)
await page.mouse.move(795,468);
await page.waitForTimeout(666)
await page.mouse.move(756,476);
await page.waitForTimeout(150)
await page.mouse.move(798,415);
await page.waitForTimeout(204)
await page.mouse.move(782,435);
await page.waitForTimeout(51)
await page.mouse.move(797,411);
await page.waitForTimeout(102)
await page.mouse.move(793,410);
await page.waitForTimeout(515)
await page.mouse.move(752,482);
await page.waitForTimeout(1699)
await page.mouse.move(725,489);
await page.waitForTimeout(100)
await page.mouse.move(748,490);
await page.waitForTimeout(1649)
await page.mouse.move(724,498);
await page.waitForTimeout(434)
await page.mouse.move(732,511);
await page.waitForTimeout(1265)
await page.mouse.move(722,517);
await page.waitForTimeout(1315)
await page.mouse.move(720,534);
await page.waitForTimeout(101)
await page.mouse.move(720,543);
await page.waitForTimeout(152)
await page.mouse.move(718,545);
await page.waitForTimeout(1880)
await page.mouse.move(718,557);
await page.waitForTimeout(51)
await page.mouse.move(714,545);
await page.waitForTimeout(1879)
await page.mouse.move(715,556);
await page.waitForTimeout(52)
await page.mouse.move(706,541);
await page.waitForTimeout(1060)
await page.mouse.move(707,548);
await page.waitForTimeout(1310)
await page.mouse.move(728, 557);
await page.mouse.down();
await page.waitForTimeout(44)
await page.mouse.up();
await page.waitForTimeout(2)
await page.waitForTimeout(524)
await page.mouse.move(713,556);
await page.waitForTimeout(864)
await page.mouse.move(788,521);
await page.waitForTimeout(229)
await page.mouse.move(716,548);
await page.waitForTimeout(1599)
await page.mouse.move(784,544);
await page.waitForTimeout(200)
await page.mouse.move(766,498);
await page.waitForTimeout(285)
await page.mouse.move(774,504);
await page.waitForTimeout(1596)
await page.mouse.move(784, 544);
await page.mouse.down();
await page.waitForTimeout(76)
await page.mouse.up();
await page.waitForTimeout(2)
await page.waitForTimeout(741)
await page.mouse.move(784,540);
await page.waitForTimeout(50)
await page.mouse.move(784,534);
await page.waitForTimeout(101)
await page.mouse.move(784,506);
await page.waitForTimeout(100)
await page.mouse.move(778,434);
await page.waitForTimeout(50)
await page.mouse.move(782,474);
await page.waitForTimeout(0)

await page.waitForTimeout(100)
await page.mouse.move(774,398);
await page.waitForTimeout(465)
await page.mouse.move(797,332);
await page.waitForTimeout(515)
await page.mouse.move(816,318);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(833,291);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(856,254);
await page.waitForTimeout(250)
await page.mouse.move(846,191);
await page.waitForTimeout(300)
await page.mouse.move(840,190);
await page.waitForTimeout(0)

await page.waitForTimeout(0)
await page.mouse.move(840,190);
await page.waitForTimeout(1708)
await page.mouse.move(596,464);
await page.waitForTimeout(50)
await page.mouse.move(811,188);
await page.waitForTimeout(1356)
await page.mouse.move(684,502);
await page.waitForTimeout(505)
await page.mouse.move(729,384);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(766,474);
await page.waitForTimeout(851)
await page.mouse.move(633,476);
await page.waitForTimeout(51)
await page.mouse.move(794,524);
await page.waitForTimeout(698)
await page.mouse.move(746,532);
await page.waitForTimeout(102)
await page.mouse.move(798,561);
await page.waitForTimeout(90)
await page.mouse.move(796,562);
await page.waitForTimeout(748)
await page.mouse.move(608,462);
await page.waitForTimeout(201)
await page.mouse.move(596,464);
await page.waitForTimeout(280)
await page.mouse.move(594, 464);
await page.mouse.down();
await page.waitForTimeout(0)
await page.mouse.move(594, 464);
await page.mouse.down();
await page.waitForTimeout(94)
await page.mouse.up();
await page.waitForTimeout(0)
await page.mouse.up();
await page.waitForTimeout(245)
await page.goto('https://www.demoblaze.com/index.html');
await page.waitForTimeout(1)
sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1648656476313}"}');
await page.evaluate(sessionStorage => {
  for (const key in sessionStorage) {
    window.sessionStorage.setItem(key, sessionStorage[key]);}
}, sessionStorage);
await page.waitForTimeout(0)
localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1648629413598,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
await page.evaluate(localStorage => {
  for (const key in localStorage) {
    window.localStorage.setItem(key, localStorage[key]);}
}, localStorage);
await page.waitForTimeout(186)
await page.mouse.move(594,464);
await page.waitForTimeout(0)

await page.waitForTimeout(27)
await page.waitForTimeout(214)
await page.waitForTimeout(34)
await page.waitForTimeout(5)
await page.waitForTimeout(45)
await page.setViewportSize({ width: 1202, height: 607 });
await page.waitForTimeout(276)
await page.mouse.move(596,461);
await page.waitForTimeout(0)

await page.waitForTimeout(50)
await page.mouse.move(611,446);
await page.waitForTimeout(50)
await page.mouse.move(642,428);
await page.waitForTimeout(100)
await page.mouse.move(724,386);
await page.waitForTimeout(0)

await page.waitForTimeout(51)
await page.mouse.move(740,377);
await page.waitForTimeout(0)

await page.waitForTimeout(13)
await context.addCookies([{name: 'user', value: 'd666f6a5-9c08-2456-20a7-38f17bfabb3a', url: 'https://www.demoblaze.com/index.html'}])
await page.waitForTimeout(89)
await page.mouse.move(954,212);
await page.waitForTimeout(152)
await page.mouse.move(1057,80);
await page.waitForTimeout(202)
await page.mouse.move(1085,45);
await page.waitForTimeout(203)
await page.mouse.move(1120,0);
await browser.close()
}
)
