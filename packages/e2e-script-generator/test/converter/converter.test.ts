import {EventsConverter} from "../../src/converter/events-converter";
import {BLSessionEvent} from "@butopen/user-events-model";

test("test simple conversion", async () => {
    const event = {
        "name": "session-start",
        "type": "session",
        "timestamp": 1646910428051,
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    } as BLSessionEvent
    const session = new EventsConverter().convert([event])
})
