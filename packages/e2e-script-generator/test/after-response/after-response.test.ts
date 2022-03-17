import {AfterResponse} from "../../src/significant-events/after-response";
import {HttpCall} from "../../src/significant-events/http-interfaces/http-call";

test(`Test after-response class`, async () => {
    const event = {
        "name": "after-response",
        "type": "http",
        "timestamp": 1646910428448,
        "request": {
            "headers": {
                "Accept": [
                    "application/json, text/javascript, */*; q=0.01"
                ],
                "X-Requested-With": [
                    "XMLHttpRequest"
                ]
            },
            "method": "GET",
            "path": "config.json",
            "timestamp": 1646910428275,
            "url": "https://www.demoblaze.com/config.json",
            "body": null
        },
        "status": 200,
        "response": {
            "body": "{\n    \"API_URL\": \"https://api.demoblaze.com\",\n    \"HLS_URL\": \"https://hls.demoblaze.com\"\n}",
            "headers": {
                "age": "0",
                "cache-control": "public, max-age=10",
                "content-encoding": "gzip",
                "content-type": "application/json",
                "date": "Thu, 10 Mar 2022 11:07:09 GMT",
                "etag": "\"TTo8pA\"",
                "expires": "Thu, 10 Mar 2022 11:07:19 GMT",
                "server": "Google Frontend",
                "x-cloud-trace-context": "b05b4f862966346d4325b904a49fac77"
            },
            "status": 200,
            "timestamp": 1646910428448
        },
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    } as HttpCall
    const afterResponseEvent = new AfterResponse(event)
    const playwrightInstruction: string = afterResponseEvent.getPlaywrightInstruction()
    console.log(playwrightInstruction)
})