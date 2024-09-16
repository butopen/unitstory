import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export type KeyupEventType = BLKeyboardEvent & { url: string, sid: number, tab: number }

export class KeyupEvent extends SignificantEvent<KeyupEventType> {

    getPlaywrightInstruction(): string {
        if (this.isUpper(this.event.key)) {
            return `await page.keyboard.up('${this.event.code}')
await page.keyboard.up('Shift')`
        } else {
            return `await page.keyboard.up('${this.event.code}');`
        }
    }

    private isUpper(str: string): boolean {

        return !/[a-z]/.test(str) && /[A-Z]/.test(str);

    }

}