import {chromium} from "playwright"

jest.setTimeout(3000 * 100)
test("temp test", async () => {
    let localStorage;
    let sessionStorage;
    let selector;
    let element;
    let text;
    const browser = await chromium.launch({headless: false, slowMo: 0, devtools: false})
    const context = await browser.newContext()
    await context.addCookies([{name: 'user', value: '8ad378e2-d16b-253c-a559-ad175baebea8', url: 'https://www.demoblaze.com/'}])
    const page = await context.newPage()
    let requests:any[] = []
    requests.push({url: `https://api.demoblaze.com/entries`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1055","content-type":"application/json","x-unit-story":"1649515912897","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"})
requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:19 GMT","expires":"Sat, 09 Apr 2022 15:51:19 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdtAv7EmfH64vvaZDk3hiG-AuTLWkgMUu1jYL4GMWcrppVfB-Le70vmhr0K32H_RnQ4iGUCHLCidEudLmRD0VZDlaI7HttaE","x-unit-story":"1649515912939","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
    requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:25 GMT","expires":"Sat, 09 Apr 2022 15:51:25 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsOOxJGh22feCg1FPwgw_wLuuufBYy2HPKnetgsdMFz9NIu-eIugwoH8RuN7e4zq3sWYobP31p1u1ksuggBKFTu_A","x-unit-story":"1649515912949","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Sat, 09 Apr 2022 14:52:04 GMT","etag":"\"TTo8pA\"","expires":"Sat, 09 Apr 2022 14:52:14 GMT","server":"Google Frontend","x-cloud-trace-context":"22e7a5ab94dfab8f68398924b18c01cd","x-unit-story":"1649515923108","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
    requests.push({url: `https://api.demoblaze.com/view`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"236","content-type":"application/json","x-unit-story":"1649515923289","access-control-allow-origin":"*"},  body: "{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"}\n"})
requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:19 GMT","expires":"Sat, 09 Apr 2022 15:51:19 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdtAv7EmfH64vvaZDk3hiG-AuTLWkgMUu1jYL4GMWcrppVfB-Le70vmhr0K32H_RnQ4iGUCHLCidEudLmRD0VZDlaI7HttaE","x-unit-story":"1649515923319","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
    requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:25 GMT","expires":"Sat, 09 Apr 2022 15:51:25 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsOOxJGh22feCg1FPwgw_wLuuufBYy2HPKnetgsdMFz9NIu-eIugwoH8RuN7e4zq3sWYobP31p1u1ksuggBKFTu_A","x-unit-story":"1649515923325","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
requests.push({url: `https://api.demoblaze.com/addtocart`,status: 200, contentType: "text/html; charset=utf-8", headers: {"content-length":"0","content-type":"text/html; charset=utf-8","x-unit-story":"1649515925348","access-control-allow-origin":"*"},  body: ""})
    requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Sat, 09 Apr 2022 14:52:04 GMT","etag":"\"TTo8pA\"","expires":"Sat, 09 Apr 2022 14:52:14 GMT","server":"Google Frontend","x-cloud-trace-context":"22e7a5ab94dfab8f68398924b18c01cd","x-unit-story":"1649515930031","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
requests.push({url: `https://api.demoblaze.com/viewcart`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"136","content-type":"application/json","x-unit-story":"1649515930040","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cookie\":\"user=8ad378e2-d16b-253c-a559-ad175baebea8\",\"id\":\"b309b54c-792c-4275-a5d8-00642922464f\",\"prod_id\":1}]}\n"})
    requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:19 GMT","expires":"Sat, 09 Apr 2022 15:51:19 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdtAv7EmfH64vvaZDk3hiG-AuTLWkgMUu1jYL4GMWcrppVfB-Le70vmhr0K32H_RnQ4iGUCHLCidEudLmRD0VZDlaI7HttaE","x-unit-story":"1649515930060","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:25 GMT","expires":"Sat, 09 Apr 2022 15:51:25 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsOOxJGh22feCg1FPwgw_wLuuufBYy2HPKnetgsdMFz9NIu-eIugwoH8RuN7e4zq3sWYobP31p1u1ksuggBKFTu_A","x-unit-story":"1649515930066","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
    requests.push({url: `https://api.demoblaze.com/view`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"236","content-type":"application/json","x-unit-story":"1649515930601","access-control-allow-origin":"*"},  body: "{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"}\n"})
requests.push({url: `https://api.demoblaze.com/deletecart`,status: 200, contentType: "application/json", headers: {"content-length":"16","content-type":"application/json","x-unit-story":"1649515945510","access-control-allow-origin":"*"},  body: "\"Item deleted.\"\n"})
    requests.push({url: `https://www.demoblaze.com/config.json`,status: 200, contentType: "application/json", headers: {"age":"0","cache-control":"public, max-age=10","content-encoding":"gzip","content-length":"84","content-type":"application/json","date":"Sat, 09 Apr 2022 14:52:27 GMT","etag":"\"TTo8pA\"","expires":"Sat, 09 Apr 2022 14:52:37 GMT","server":"Google Frontend","x-cloud-trace-context":"22e7a5ab94dfab8f68398924b18c01cd","x-unit-story":"1649515946885","access-control-allow-origin":"*"},  body: "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}"})
requests.push({url: `https://api.demoblaze.com/entries`,status: 200, contentType: "application/json", headers: {"cache-control":"private","content-length":"1060","content-type":"application/json","x-unit-story":"1649515947091","access-control-allow-origin":"*"},  body: "{\"Items\":[{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\\n processor and it comes with 3GB of RAM. The phone packs 32GB of \\ninternal storage cannot be expanded. \",\"id\":1,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":360.0,\"title\":\"Samsung galaxy s6\"},{\"cat\":\"phone\",\"desc\":\"The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM. \",\"id\":2,\"img\":\"imgs/Lumia_1520.jpg\",\"price\":820.0,\"title\":\"Nokia lumia 1520\"},{\"cat\":\"phone\",\"desc\":\"The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.\",\"id\":3,\"img\":\"imgs/Nexus_6.jpg\",\"price\":650.0,\"title\":\"Nexus 6\"},{\"cat\":\"phone\",\"desc\":\"The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB \\nof RAM. The phone packs 32GB of internal storage that can be expanded up\\n to 200GB via a microSD card.\",\"id\":4,\"img\":\"imgs/galaxy_s6.jpg\",\"price\":800.0,\"title\":\"Samsung galaxy s7\"},{\"cat\":\"phone\",\"desc\":\"It comes with 1GB of RAM. The phone packs 16GB of internal storage \\ncannot be expanded. As far as the cameras are concerned, the Apple \\niPhone 6 packs a 8-megapixel primary camera on the rear and a \\n1.2-megapixel front shooter for selfies.\",\"id\":5,\"img\":\"imgs/iphone_6.jpg\",\"price\":790.0,\"title\":\"Iphone 6 32gb\"},{\"cat\":\"phone\",\"desc\":\"Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone\\n comes with a 5.20-inch touchscreen display with a resolution of 1080 \\npixels by 1920 pixels at a PPI of 424 pixels per inch.\",\"id\":6,\"img\":\"imgs/xperia_z5.jpg\",\"price\":320.0,\"title\":\"Sony xperia z5\"},{\"cat\":\"phone\",\"desc\":\"The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 \\nprocessor and it comes with 3GB of RAM. The phone packs 32GB of internal\\n storage that can be expanded up to 128GB via a microSD card. \",\"id\":7,\"img\":\"imgs/HTC_M9.jpg\",\"price\":700.0,\"title\":\"HTC One M9\"},{\"cat\":\"notebook\",\"desc\":\"Sony is so confident that the VAIO S is a superior ultraportable laptop \\nthat the company proudly compares the notebook to Apple's 13-inch \\nMacBook Pro. And in a lot of ways this notebook is better, thanks to a \\nlighter weight.\",\"id\":8,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i5\"},{\"cat\":\"notebook\",\"desc\":\"REVIEW\\n \\nSony is so confident that the VAIO S is a superior \\nultraportable laptop that the company proudly compares the notebook to \\nApple's 13-inch MacBook Pro. And in a lot of ways this notebook is \\nbetter, thanks to a lighter weight, higher-resolution display, more \\nstorage space, and a Blu-ray drive. \",\"id\":9,\"img\":\"imgs/sony_vaio_5.jpg\",\"price\":790.0,\"title\":\"Sony vaio i7\\n\"}],\"LastEvaluatedKey\":{\"id\":\"9\"}}\n"})
    requests.push({url: `https://hls.demoblaze.com/index.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"501","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:19 GMT","expires":"Sat, 09 Apr 2022 15:51:19 GMT","last-modified":"Fri, 13 Sep 2019 14:27:35 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdtAv7EmfH64vvaZDk3hiG-AuTLWkgMUu1jYL4GMWcrppVfB-Le70vmhr0K32H_RnQ4iGUCHLCidEudLmRD0VZDlaI7HttaE","x-unit-story":"1649515947137","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=8674000,RESOLUTION=1024x576,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_2M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=7633000,RESOLUTION=960x540,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1-5M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3733000,RESOLUTION=640x360,CODECS=\"avc1.4d001f,mp4a.40.2\"\nabout_demo_hls_1M.m3u8\n#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2624000,RESOLUTION=480x270,CODECS=\"avc1.42001e,mp4a.40.2\"\nabout_demo_hls_600k.m3u8\n"})
requests.push({url: `https://hls.demoblaze.com/about_demo_hls_600k.m3u8`,status: 200, contentType: "binary/octet-stream", headers: {"cache-control":"public, max-age=3600","content-length":"5302","content-type":"binary/octet-stream","date":"Sat, 09 Apr 2022 14:51:25 GMT","expires":"Sat, 09 Apr 2022 15:51:25 GMT","last-modified":"Fri, 13 Sep 2019 14:27:34 GMT","server":"UploadServer","x-guploader-uploadid":"ADPycdsOOxJGh22feCg1FPwgw_wLuuufBYy2HPKnetgsdMFz9NIu-eIugwoH8RuN7e4zq3sWYobP31p1u1ksuggBKFTu_A","x-unit-story":"1649515947147","access-control-allow-origin":"*"},  body: "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:13\n#EXTINF:12.046444,\nabout_demo_hls_600k00000.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00001.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00002.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00003.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00004.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00005.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00006.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00007.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00008.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00009.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00010.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00011.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00012.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00013.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00014.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00015.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00016.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00017.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00018.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00019.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00020.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00021.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00022.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00023.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00024.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00025.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00026.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00027.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00028.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00029.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00030.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00031.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00032.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00033.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00034.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00035.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00036.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00037.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00038.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00039.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00040.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00041.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00042.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00043.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00044.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00045.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00046.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00047.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00048.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00049.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00050.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00051.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00052.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00053.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00054.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00055.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00056.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00057.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00058.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00059.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00060.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00061.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00062.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00063.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00064.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00065.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00066.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00067.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00068.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00069.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00070.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00071.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00072.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00073.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00074.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00075.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00076.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00077.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00078.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00079.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00080.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00081.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00082.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00083.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00084.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00085.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00086.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00087.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00088.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00089.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00090.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00091.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00092.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00093.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00094.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00095.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00096.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00097.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00098.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00099.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00100.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00101.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00102.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00103.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00104.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00105.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00106.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00107.ts\n#EXTINF:12.000000,\nabout_demo_hls_600k00108.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00109.ts\n#EXTINF:9.000000,\nabout_demo_hls_600k00110.ts\n#EXTINF:10.133333,\nabout_demo_hls_600k00111.ts\n#EXT-X-ENDLIST\n"})
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
    await page.waitForTimeout(2)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1649515912892}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1649515879450,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(3)
    await page.waitForTimeout(27)
    await page.mouse.move(1012,94);
    await page.waitForTimeout(1865)
    await page.mouse.move(1012,93);
    await page.waitForTimeout(15)
    await page.waitForTimeout(10)
    await page.waitForTimeout(53)
    await page.setViewportSize({ width: 1280, height: 619 });
    await page.waitForTimeout(1837)
    await page.mouse.move(1022,76);
    await page.waitForTimeout(50)
    await page.mouse.move(1027,63);
    await page.waitForTimeout(100)
    await page.mouse.move(1042,31);
    await page.waitForTimeout(100)
    await page.mouse.move(1048,19);
    await page.waitForTimeout(150)
    await page.mouse.move(1050,16);
    await page.waitForTimeout(1029)
    await page.mouse.move(1260,26);
    await page.waitForTimeout(1082)
    await page.mouse.move(1275,29);
    await page.waitForTimeout(50)
    await page.mouse.move(1276,29);
    await page.waitForTimeout(239)
    await page.mouse.move(1276, 29);
    await page.mouse.down();
    await page.waitForTimeout(28)
    await page.evaluate(() => window.scroll(0,3.3333332538604736));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,20));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,38.66666793823242));
    await page.waitForTimeout(60)
    await page.evaluate(() => window.scroll(0,61.33333206176758));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0,84.66666412353516));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0,107.33333587646484));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,128));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,148.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,172));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,198.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,218));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,240.6666717529297));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,253.3333282470703));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,282));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,311.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,328));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,366));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,386.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,401.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,430));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,449.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,472));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,494.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,511.3333435058594));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,530));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,549.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0,566));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0,588.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,611.3333129882812));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0,636.6666870117188));
    await page.waitForTimeout(54)
    await page.evaluate(() => window.scroll(0,661.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0,680));
    await page.waitForTimeout(49)
    await page.evaluate(() => window.scroll(0,701.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0,724));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,755.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,772));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,801.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,826));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,842.6666870117188));
    await page.waitForTimeout(56)
    await page.evaluate(() => window.scroll(0,861.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0,878));
    await page.waitForTimeout(57)
    await page.evaluate(() => window.scroll(0,909.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,957.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,986.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1038.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1057.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1080.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1114));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1147.3333740234375));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0,1188.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1212.6666259765625));
    await page.waitForTimeout(498)
    await page.evaluate(() => window.scroll(0,1211.3333740234375));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1182.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1090.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,1036.6666259765625));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,997.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,955.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,924));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,884.6666870117188));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0,803.3333129882812));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,736.6666870117188));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,663.3333129882812));
    await page.waitForTimeout(53)
    await page.evaluate(() => window.scroll(0,605.3333129882812));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0,544.6666870117188));
    await page.waitForTimeout(59)
    await page.evaluate(() => window.scroll(0,516));
    await page.waitForTimeout(52)
    await page.evaluate(() => window.scroll(0,490.6666564941406));
    await page.waitForTimeout(50)
    await page.evaluate(() => window.scroll(0,468));
    await page.waitForTimeout(51)
    await page.evaluate(() => window.scroll(0,461.3333435058594));
    await page.waitForTimeout(206)
    await page.mouse.up();
    await page.waitForTimeout(27)
    await page.mouse.move(1279,176);
    await page.waitForTimeout(66)
    await page.mouse.move(1276,176);
    await page.waitForTimeout(117)
    await page.mouse.move(1232,177);
    await page.waitForTimeout(53)
    await page.mouse.move(1207,177);
    await page.waitForTimeout(107)
    await page.mouse.move(1124,175);
    await page.waitForTimeout(50)
    await page.mouse.move(1017,167);
    await page.waitForTimeout(101)
    await page.mouse.move(945,165);
    await page.waitForTimeout(0)

    await page.waitForTimeout(51)
    await page.mouse.move(872,163);
    await page.waitForTimeout(577)
    await page.mouse.move(476,145);
    await page.waitForTimeout(1349)
    await page.mouse.move(474, 145);
    await page.mouse.down();
    await page.waitForTimeout(106)
    await page.mouse.up();
    await page.waitForTimeout(711)
    await page.goto('https://www.demoblaze.com/prod.html?idp_=1');
    await page.waitForTimeout(1)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1649515912892}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1649515879450,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(30)
    await page.waitForTimeout(181)
    await page.waitForTimeout(30)
    await page.waitForTimeout(6)
    await page.waitForTimeout(39)
    await page.setViewportSize({ width: 1280, height: 619 });
    await page.waitForTimeout(385)
    await page.mouse.move(476,145);
    await page.waitForTimeout(50)
    await page.mouse.move(487,145);
    await page.waitForTimeout(110)
    await page.mouse.move(498,145);
    await page.waitForTimeout(56)
    await page.mouse.move(516,149);
    await page.waitForTimeout(106)
    await page.mouse.move(534,153);
    await page.waitForTimeout(200)
    await page.mouse.move(600,166);
    await page.waitForTimeout(118)
    await context.addCookies([{name: 'user', value: '8ad378e2-d16b-253c-a559-ad175baebea8', url: 'https://www.demoblaze.com/prod.html?idp_=1'}])
    await page.waitForTimeout(132)
    await page.mouse.move(608,170);
    await page.waitForTimeout(644)
    await page.mouse.move(644,411);
    await page.waitForTimeout(200)
    await page.mouse.move(651,223);
    await page.waitForTimeout(0)

    await page.waitForTimeout(109)
    await page.mouse.move(656,270);
    await page.waitForTimeout(60)
    await page.mouse.move(656,298);
    await page.waitForTimeout(111)
    await page.mouse.move(656,323);
    await page.waitForTimeout(0)

    await page.waitForTimeout(63)
    await page.mouse.move(650,368);
    await page.waitForTimeout(0)

    await page.waitForTimeout(216)
    await page.mouse.move(642,429);
    await page.waitForTimeout(100)
    await page.mouse.move(638,449);
    await page.waitForTimeout(353)
    await page.mouse.move(638, 449);
    await page.mouse.down();
    await page.waitForTimeout(78)
    await page.mouse.up();
    await page.waitForTimeout(3)
    await page.waitForTimeout(1852)
    await page.mouse.move(806,85);
    await page.waitForTimeout(0)

    await page.waitForTimeout(58)
    await page.mouse.move(806,86);
    await page.waitForTimeout(1803)
    await page.mouse.move(690,79);
    await page.waitForTimeout(1436)
    await page.mouse.move(804,90);
    await page.waitForTimeout(264)
    await page.mouse.move(761,91);
    await page.waitForTimeout(423)
    await page.mouse.move(685,77);
    await page.waitForTimeout(268)
    await page.mouse.move(655,40);
    await page.waitForTimeout(299)
    await page.mouse.move(655, 40);
    await page.mouse.down();
    await page.waitForTimeout(58)
    await page.mouse.up();
    await page.waitForTimeout(303)
    await page.goto('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(1)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1649515912892}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1649515879450,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(227)
    await page.mouse.move(655,40);
    await page.waitForTimeout(371)
    await page.mouse.move(658,42);
    await page.waitForTimeout(26)
    await page.waitForTimeout(9)
    await page.waitForTimeout(20)
    await page.waitForTimeout(6)
    await page.waitForTimeout(38)
    await page.setViewportSize({ width: 1280, height: 619 });
    await page.waitForTimeout(323)
    await page.mouse.move(682,61);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(710,83);
    await page.waitForTimeout(52)
    await page.mouse.move(714,86);
    await page.waitForTimeout(110)
    await page.mouse.move(730,107);
    await page.waitForTimeout(0)

    await page.waitForTimeout(14)
    await page.waitForTimeout(41)
    await page.mouse.move(752,141);
    await page.waitForTimeout(255)
    await page.mouse.move(767,177);
    await page.waitForTimeout(139)
    await context.addCookies([{name: 'user', value: '8ad378e2-d16b-253c-a559-ad175baebea8', url: 'https://www.demoblaze.com/cart.html'}])
    await page.waitForTimeout(166)
    await page.mouse.move(772,187);
    await page.waitForTimeout(0)

    await page.waitForTimeout(51)
    await page.mouse.move(781,200);
    await page.waitForTimeout(161)
    await page.mouse.move(833,247);
    await page.waitForTimeout(212)
    await page.mouse.move(887,280);
    await page.waitForTimeout(465)
    await page.mouse.move(952,275);
    await page.waitForTimeout(515)
    await page.mouse.move(958,251);
    await page.waitForTimeout(50)
    await page.mouse.move(958,248);
    await page.waitForTimeout(100)
    await page.mouse.move(959,241);
    await page.waitForTimeout(100)
    await page.mouse.move(960,219);
    await page.waitForTimeout(150)
    await page.mouse.move(956,206);
    await page.waitForTimeout(101)
    await page.mouse.move(952,195);
    await page.waitForTimeout(156)
    await page.mouse.move(950, 193);
    await page.mouse.down();
    await page.waitForTimeout(59)
    await page.mouse.up();
    await page.waitForTimeout(568)
    await page.mouse.move(946,193);
    await page.waitForTimeout(50)
    await page.mouse.move(904,203);
    await page.waitForTimeout(100)
    await page.mouse.move(824,220);
    await page.waitForTimeout(310)
    await page.mouse.move(623,222);
    await page.waitForTimeout(359)
    await page.mouse.move(608,215);
    await page.waitForTimeout(101)
    await page.mouse.move(593,203);
    await page.waitForTimeout(178)
    await page.mouse.move(592, 199);
    await page.mouse.down();
    await page.waitForTimeout(45)
    await page.mouse.up();
    await page.waitForTimeout(840)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(131)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(204)
    await page.keyboard.down('Shift')
    await page.keyboard.down('KeyC')
    await page.waitForTimeout(8)
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('C' !== text){
            await page.fill(selector,'C')
        }
    }
    await page.waitForTimeout(120)
    await page.keyboard.up('KeyC')
    await page.keyboard.up('Shift')
    await page.waitForTimeout(46)
    await page.keyboard.down('CapsLock');
    await page.waitForTimeout(107)
    await page.keyboard.up('CapsLock');
    await page.waitForTimeout(18)
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(9)
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Ci' !== text){
            await page.fill(selector,'Ci')
        }
    }
    await page.waitForTimeout(120)
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(59)
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(4)
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Cia' !== text){
            await page.fill(selector,'Cia')
        }
    }
    await page.waitForTimeout(99)
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(15)
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(3)
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Ciao' !== text){
            await page.fill(selector,'Ciao')
        }
    }
    await page.waitForTimeout(88)
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(190)
    await page.keyboard.down('Tab');
    await page.waitForTimeout(4)
    selector = 'input#name.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('Ciao' !== text){
            await page.fill(selector,'Ciao')
        }
    }
    await page.waitForTimeout(114)
    await page.keyboard.up('Tab');
    await page.waitForTimeout(275)
    await page.keyboard.down('KeyI');
    await page.waitForTimeout(11)
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('i' !== text){
            await page.fill(selector,'i')
        }
    }
    await page.waitForTimeout(90)
    await page.keyboard.up('KeyI');
    await page.waitForTimeout(914)
    await page.keyboard.down('KeyA');
    await page.waitForTimeout(12)
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('ia' !== text){
            await page.fill(selector,'ia')
        }
    }
    await page.waitForTimeout(124)
    await page.keyboard.up('KeyA');
    await page.waitForTimeout(15)
    await page.keyboard.down('KeyO');
    await page.waitForTimeout(11)
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(81)
    await page.keyboard.up('KeyO');
    await page.waitForTimeout(468)
    await page.mouse.move(578,209);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(546,251);
    await page.waitForTimeout(100)
    await page.mouse.move(546,270);
    await page.waitForTimeout(284)
    await page.mouse.move(546,272);
    await page.waitForTimeout(50)
    await page.mouse.move(545,279);
    await page.waitForTimeout(103)
    await page.mouse.move(545,281);
    await page.waitForTimeout(331)
    await page.mouse.move(444,297);
    await page.waitForTimeout(133)
    await page.mouse.move(546, 297);
    await page.mouse.down();
    await page.waitForTimeout(254)
    await page.mouse.move(334,297);
    await page.waitForTimeout(654)
    await page.mouse.move(372,323);
    await page.waitForTimeout(30)
    await page.mouse.up();
    await page.waitForTimeout(290)
    await page.keyboard.down('ControlLeft');
    await page.waitForTimeout(231)
    await page.keyboard.down('KeyC');
    await page.waitForTimeout(138)
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(7)
    await page.keyboard.up('KeyC');
    await page.waitForTimeout(13)
    await page.mouse.move(458,374);
    await page.waitForTimeout(0)

    await page.waitForTimeout(54)
    await page.mouse.move(486,391);
    await page.waitForTimeout(179)
    await page.mouse.move(488,391);
    await page.waitForTimeout(209)
    await page.mouse.move(488, 391);
    await page.mouse.down();
    await page.waitForTimeout(5)
    selector = 'input#country.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(71)
    await page.mouse.up();
    await page.waitForTimeout(307)
    await page.keyboard.down('ControlLeft');
    await page.waitForTimeout(245)
    await page.keyboard.down('KeyV');
    await page.waitForTimeout(8)
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(101)
    await page.keyboard.up('KeyV');
    await page.waitForTimeout(34)
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(115)
    await page.mouse.move(490,391);
    await page.waitForTimeout(316)
    await page.mouse.move(606,381);
    await page.waitForTimeout(516)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,1.3333333730697632)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,25.33333396911621)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,68.66666412353516)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,96.66666412353516)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(50)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,102)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(54)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,128.6666717529297)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(57)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,174.6666717529297)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(55)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,198.6666717529297)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(51)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,200)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(182)
    await page.mouse.move(604,380);
    await page.waitForTimeout(0)

    await page.waitForTimeout(51)
    await page.mouse.move(592,363);
    await page.waitForTimeout(99)
    await page.mouse.move(569,333);
    await page.waitForTimeout(149)
    await page.mouse.move(567,326);
    await page.waitForTimeout(0)

    await page.waitForTimeout(50)
    await page.mouse.move(566,316);
    await page.waitForTimeout(100)
    await page.mouse.move(563,299);
    await page.waitForTimeout(158)
    await page.mouse.move(563,297);
    await page.waitForTimeout(808)
    await page.mouse.move(557,307);
    await page.waitForTimeout(34)
    await page.mouse.move(563, 296);
    await page.mouse.down();
    await page.waitForTimeout(12)
    selector = 'input#city.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(48)
    await page.mouse.up();
    await page.waitForTimeout(336)
    await page.keyboard.down('ControlLeft');
    await page.waitForTimeout(198)
    await page.keyboard.down('KeyV');
    await page.waitForTimeout(14)
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(118)
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(2)
    await page.keyboard.up('KeyV');
    await page.waitForTimeout(96)
    await page.mouse.move(539,339);
    await page.waitForTimeout(50)
    await page.mouse.move(525,365);
    await page.waitForTimeout(100)
    await page.mouse.move(521,386);
    await page.waitForTimeout(908)
    await page.mouse.move(520,409);
    await page.waitForTimeout(161)
    await page.mouse.move(520, 405);
    await page.mouse.down();
    await page.waitForTimeout(5)
    selector = 'input#card.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(59)
    await page.mouse.up();
    await page.waitForTimeout(325)
    await page.keyboard.down('ControlLeft');
    await page.waitForTimeout(164)
    await page.keyboard.down('KeyV');
    await page.waitForTimeout(6)
    selector = 'input#month.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(137)
    await page.keyboard.up('KeyV');
    await page.waitForTimeout(3)
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(99)
    await page.mouse.move(518,433);
    await page.waitForTimeout(0)

    await page.waitForTimeout(52)
    await page.mouse.move(516,441);
    await page.waitForTimeout(160)
    await page.mouse.move(513,475);
    await page.waitForTimeout(212)
    await page.mouse.move(516,482);
    await page.waitForTimeout(608)
    await page.mouse.move(748,499);
    await page.waitForTimeout(32)
    await page.mouse.move(518, 488);
    await page.mouse.down();
    await page.waitForTimeout(10)
    selector = 'input#month.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(50)
    await page.mouse.up();
    await page.waitForTimeout(89)
    await page.keyboard.down('ControlLeft');
    await page.waitForTimeout(165)
    await page.keyboard.down('KeyV');
    await page.waitForTimeout(12)
    selector = 'input#year.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(115)
    await page.keyboard.up('KeyV');
    await page.waitForTimeout(14)
    await page.keyboard.up('ControlLeft');
    await page.waitForTimeout(222)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,199.3333282470703)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(60)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,191.3333282470703)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(55)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,181.3333282470703)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(51)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,198.6666717529297)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(55)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,248)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(55)
    await page.evaluate(async (s) => {
        const element = document.querySelector(s)!
        element.scroll(0,264.6666564941406)
    }, 'div#orderModal.modal.fade.show[tabindex="-\\31 "][role="dialog"][aria-labelledby="orderModalLabel"][style="display\\:\\ block\\;"]');
    await page.waitForTimeout(23)
    await page.mouse.move(749,500);
    await page.waitForTimeout(50)
    await page.mouse.move(770,519);
    await page.waitForTimeout(105)
    await page.mouse.move(775,524);
    await page.waitForTimeout(228)
    await page.mouse.move(782,533);
    await page.waitForTimeout(278)
    await page.mouse.move(786,547);
    await page.waitForTimeout(156)
    await page.mouse.move(792,548);
    await page.waitForTimeout(65)
    await page.mouse.move(788, 553);
    await page.mouse.down();
    await page.waitForTimeout(4)
    selector = 'input#year.form-control[type="text"]'
    if(!selector.includes('password')){
        element = await page.locator(selector);
        text = await element.inputValue();
        if('iao' !== text){
            await page.fill(selector,'iao')
        }
    }
    await page.waitForTimeout(42)
    await page.mouse.up();
    await page.waitForTimeout(2)
    await page.waitForTimeout(287)
    await page.mouse.move(791,545);
    await page.waitForTimeout(516)
    await page.mouse.move(619,457);
    await page.waitForTimeout(510)
    await page.mouse.move(619, 457);
    await page.mouse.down();
    await page.waitForTimeout(43)
    await page.mouse.up();
    await page.waitForTimeout(303)
    await page.goto('https://www.demoblaze.com/index.html');
    await page.waitForTimeout(3)
    sessionStorage = JSON.parse('{"BL_BUGLINK":"{\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"tabIsDuplicated\\":\\"duplicated\\",\\"version\\":3,\\"tabId\\":1649515912892}"}');
    await page.evaluate(sessionStorage => {
      for (const key in sessionStorage) {
        window.sessionStorage.setItem(key, sessionStorage[key]);}
    }, sessionStorage);
    await page.waitForTimeout(0)
    localStorage = JSON.parse('{"BL_BUGLINK":"{\\"sid\\":1649515879450,\\"version\\":1}","BL_CROSS_TAB_KEY":"{\\"version\\":3}"}');
    await page.evaluate(localStorage => {
      for (const key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);}
    }, localStorage);
    await page.waitForTimeout(162)
    await page.mouse.move(619,451);
    await page.waitForTimeout(361)
    await page.mouse.move(627,426);
    await page.waitForTimeout(67)
    await page.waitForTimeout(206)
    await page.waitForTimeout(46)
    await page.waitForTimeout(10)
    await page.waitForTimeout(70)
    await page.setViewportSize({ width: 1280, height: 619 });
    await page.waitForTimeout(12)
    await page.mouse.move(627,419);
    await page.waitForTimeout(162)
    await page.mouse.move(626,390);
    await page.waitForTimeout(217)
    await page.mouse.move(626,373);
    await page.waitForTimeout(1182)
    await page.mouse.move(862,121);
    await page.waitForTimeout(211)
    await context.addCookies([{name: 'user', value: '8ad378e2-d16b-253c-a559-ad175baebea8', url: 'https://www.demoblaze.com/index.html'}])
    await page.waitForTimeout(1022)
    await page.mouse.move(892,110);
    await page.waitForTimeout(0)

    await page.waitForTimeout(55)
    await page.mouse.move(1022,47);
    await page.waitForTimeout(0)

    await page.waitForTimeout(53)
    await page.mouse.move(1059,25);
    await page.waitForTimeout(58)
    await page.mouse.move(1068,23);
    await page.waitForTimeout(107)
    await page.mouse.move(1089,12);
    await page.waitForTimeout(752)
    await page.mouse.move(1200,1);
    await browser.close()
})
