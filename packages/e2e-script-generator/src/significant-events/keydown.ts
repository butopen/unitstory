import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export type KeydownEventType = BLKeyboardEvent & { url: string, sid: number, tab: number }

export class KeydownEvent extends SignificantEvent<KeydownEventType> {

    getPlaywrightInstruction(): string {
        if (this.isUpper(this.event.key)) {
            return `await page.keyboard.down('Shift')
await page.keyboard.down('${this.event.code}')`
        } else {
            return `await page.keyboard.down('${this.event.code}');`
        }
    }

    private isUpper(str: string): boolean {

        return !/[a-z]/.test(str) && /[A-Z]/.test(str);

    }

}