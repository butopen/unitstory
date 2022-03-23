import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";

export type LocalStorageEventType = BLStorageEvent & { url: string, sid: number, tab: number }

export class LocalStorageEvent extends SignificantEvent<LocalStorageEventType> {

    getPlaywrightInstruction(): string {
        return `const storage = JSON.parse('${JSON.stringify(this.event.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(storage => {\n  for (const key in storage) {\n  window.localStorage.setItem(key, storage[key]);}\n}, storage);`;
    }

}