import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLScrollEvent} from "@butopen/user-events-model";
import {BBScrollAction} from "../browserbot-actions-model/browserbot-actions.model";

export type MouseScrollEventType = BLScrollEvent & { url: string, sid: number, tab: number }

export class MouseScrollEvent extends SignificantEvent<MouseScrollEventType> {

    getPlaywrightInstruction(): string {
        return `await page.evaluate(() => window.scroll(${this.event.x},${this.event.y}));`;
    }

    getBrowserbotAction(): BBScrollAction {
        return {action: 'scroll', x: this.event.x, y: this.event.y}
    }


}