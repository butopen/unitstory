import {BLKeyboardEvent} from "@butopen/user-events-model"
import {KeyboardInput} from "../../src/significant-events/input";

test('Test KeyboardInput class', async () => {

    const event = {
        "target": "",
        "value": "ciao",
        "name": "input",
        "type": "keyboard",
        "timestamp": 1646910424858,
        "selector": "input#loginusername.form-control[type=\"text\"]",
        "sid": 1646908359206,
        "url": "https://www.demoblaze.com/index.html",
        "tab": 1646910416001
    };
    const inputEvent = new KeyboardInput(event);
    console.log(inputEvent.getPlaywrightInstruction())


})