import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";

export type LocalStorageEventType = BLStorageEvent & { url: string, sid: number, tab: number }

export class LocalStorageEvent extends SignificantEvent<LocalStorageEventType> {

    getPlaywrightInstruction(): string {
        return `const localStorage${this.event.timestamp} = JSON.parse('${JSON.stringify(this.event.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(localStorage${this.event.timestamp} => {\n  for (const key in localStorage${this.event.timestamp}) {\n    window.localStorage.setItem(key, localStorage${this.event.timestamp}[key]);}\n}, localStorage${this.event.timestamp});`;
    }

}