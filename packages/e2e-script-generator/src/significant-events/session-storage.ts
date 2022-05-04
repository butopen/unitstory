import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";
import {BBAction} from "../browserbot-actions-model/browserbot-actions.model";

export type SessionStorageEventType = BLStorageEvent & { url: string, sid: number, tab: number }

export class SessionStorageEvent extends SignificantEvent<SessionStorageEventType> {

    getPlaywrightInstruction(): string {
        return `sessionStorage = JSON.parse('${JSON.stringify(this.event.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(sessionStorage => {\n  for (const key in sessionStorage) {\n    window.sessionStorage.setItem(key, sessionStorage[key]);}\n}, sessionStorage);`;
    }

    getBrowserbotAction(): BBAction {
        return super.getBrowserbotAction();
    }

}