import {BLKeyboardEvent} from "@butopen/user-events-model"
import {KeydownEvent} from "../../src/significant-events/keydown";

test('Test KeydownEvent class', async () => {

    const event = {
        "key": "Tab",
        "code": "Tab",
        "modifier": "none",
        "name": "keydown",
        "type": "keyboard",
        "timestamp": 1646910424846,
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    } as BLKeyboardEvent & { url: string, sid: number, tab: number }
    const inputEvent = new KeydownEvent(event);
    console.log(inputEvent.getPlaywrightInstruction())


})