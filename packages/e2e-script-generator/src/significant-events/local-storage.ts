import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-abstract/event-abstract";
import {BBAction} from "../browserbot-actions-model/browserbot-actions.model";

export type LocalStorageEventType = BLStorageEvent & { url: string, sid: number, tab: number }

export class LocalStorageEvent extends SignificantEvent<LocalStorageEventType> {

    getPlaywrightInstruction(): string {
        return `localStorage = JSON.parse('${JSON.stringify(this.event.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(localStorage => {\n  for (const key in localStorage) {\n    window.localStorage.setItem(key, localStorage[key]);}\n}, localStorage);`;
    }

    getBrowserbotAction(): BBAction {
        return super.getBrowserbotAction();
    }

}