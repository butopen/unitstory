import {BLStorageEvent} from "@butopen/user-events-model"
import {LocalStorageEvent} from "../../src/significant-events/local-storage";

test('Test LocalStorageEvent class', async () => {

    const event = {
        "storage": {
            "BL_BUGLINK": "{\"sid\":1646908359206,\"version\":1}",
            "BL_CROSS_TAB_KEY": "{\"version\":3}"
        },
        "name": "local-full",
        "type": "storage",
        "timestamp": 1646910416000,
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    } as BLStorageEvent & { url: string, sid: number, tab: number }

    const localStorageEvent = new LocalStorageEvent(event);
    console.log(localStorageEvent.getPlaywrightInstruction())

})
