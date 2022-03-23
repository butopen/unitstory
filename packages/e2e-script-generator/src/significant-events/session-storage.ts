import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";

export type SessionStorageEventType = BLStorageEvent & { url: string, sid: number, tab: number }

export class SessionStorageEvent extends SignificantEvent<SessionStorageEventType> {

    getPlaywrightInstruction(): string {
        return `const sessionStorage = JSON.parse('${JSON.stringify(this.event.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(sessionStorage => {\n  for (const key in sessionStorage) {\n  window.sessionStorage.setItem(key, sessionStorage[key]);}\n}, sessionStorage);`;
    }

}