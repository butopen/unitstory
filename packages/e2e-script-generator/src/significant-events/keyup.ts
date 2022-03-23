import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export type KeyupEventType = BLKeyboardEvent & { url: string, sid: number, tab: number }

export class KeyupEvent extends SignificantEvent<KeyupEventType> {

    getPlaywrightInstruction(): string {
        return `await page.keyboard.up('${this.event.code}');`
    }

}