import {BLSessionEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-abstract/event-abstract";
import {BBGotoAction} from "../browserbot-actions-model/browserbot-actions.model";

export class SessionStartEvent extends SignificantEvent<BLSessionEvent> {

    getPlaywrightInstruction(): string {
        return `await page.goto('${this.event.url}', {waitUntil: 'load'});`;
    }

    getBrowserbotAction(): BBGotoAction {
        return {action: "goto", url: this.event.url};
    }

}