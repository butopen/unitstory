import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export type KeydownEventType = BLKeyboardEvent & { url: string, sid: number, tab: number }

export class KeydownEvent extends SignificantEvent<KeydownEventType> {

    getPlaywrightInstruction(): string {
        return `await page.keyboard.down('${this.event.code}');`
    }

}