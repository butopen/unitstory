import {EventsConverter} from "./converter/events-converter";
import {BLSessionEvent} from "@butopen/user-events-model";

(async () => {
    const event = {
        "name": "session-start",
        "type": "session",
        "timestamp": 1646910428051,
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    } as BLSessionEvent
    const converter = new EventsConverter();
    const session = converter.convert([event])
    await session.toPlaywrightScript(false, 100)
    console.log('Playwright script created')
})()
