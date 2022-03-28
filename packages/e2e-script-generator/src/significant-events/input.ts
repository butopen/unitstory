import {BLInputChangeEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";

export type InputEventType = BLInputChangeEvent & { url: string, sid: number, tab: number, selector: string }

export class InputEvent extends SignificantEvent<InputEventType> {


    getPlaywrightInstruction(): string {

        return `if('${this.event.value}' !== text){
    await page.fill('${this.event.selector}','${this.event.value}')
}`
    }
}
