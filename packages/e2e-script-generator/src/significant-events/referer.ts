import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLPageReferrerEvent} from "@butopen/user-events-model";
import {BBRefererAction} from "../browserbot-actions-model/browserbot-actions.model";

export type ReferrerType = BLPageReferrerEvent & { url: string, sid: number, tab: number }

export class ReferrerEvent extends SignificantEvent<ReferrerType> {

    getPlaywrightInstruction(): string {
        return ``;
    }

    getBrowserbotAction(): BBRefererAction {
        return {action: 'referer', referer: this.event.referrer};
    }


}