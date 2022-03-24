import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";

export type SessionStorageEventType = BLStorageEvent & { url: string, sid: number, tab: number }

export class SessionStorageEvent extends SignificantEvent<SessionStorageEventType> {

    getPlaywrightInstruction(): string {
        return `const sessionStorage${this.event.timestamp} = JSON.parse('${JSON.stringify(this.event.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(sessionStorage${this.event.timestamp} => {\n  for (const key in sessionStorage${this.event.timestamp}) {\n    window.sessionStorage.setItem(key, sessionStorage${this.event.timestamp}[key]);}\n}, sessionStorage${this.event.timestamp});`;
    }

}