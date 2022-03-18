import {BLCookieEvent} from "@butopen/user-events-model";
import {CookieEvent} from "../../src/significant-events/cookie";

test(`Test cookie class`, async () => {
    const event = {
        "cookie": "user=29f23fdb-f2ea-4bb0-8860-7b98d7917d4f; tokenp_=Y2lhbzE2NDc1MTA=",
        "name": "cookie-data",
        "type": "cookie",
        "timestamp": 1646910429054,
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    } as BLCookieEvent & { url: string, sid: number, tab: number }
    const cookieEvent = new CookieEvent(event)
    console.log(cookieEvent.getPlaywrightInstruction())
})