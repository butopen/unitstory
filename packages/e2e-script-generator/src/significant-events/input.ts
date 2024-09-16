import {BLInputChangeEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";

export type InputEventType = BLInputChangeEvent & { url: string, sid: number, tab: number, selector: string }

export class InputEvent extends SignificantEvent<InputEventType> {


    getPlaywrightInstruction(): string {

        return `selector = '${this.event.selector.replaceAll('\\', "\\\\")}'
if(!selector.includes('password')){
    element = await page.locator(selector);
    text = await element.inputValue();
    if('${this.event.value.replaceAll("\\", "\\\\")}' !== text){
        await page.fill(selector,'${this.event.value.replaceAll("\\", "\\\\")}')
    }
}`
    }
}
