import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLWindowResizeEvent} from "@butopen/user-events-model";
import {BBResizeAction} from "../browserbot-actions-model/browserbot-actions.model";

export type WindowResizeEventType = BLWindowResizeEvent & { url: string, sid: number, tab: number }

export class WindowResizeEvent extends SignificantEvent<WindowResizeEventType> {

    getPlaywrightInstruction(): string {
        return `await page.setViewportSize({ width: ${this.event.width}, height: ${this.event.height} });`;
    }

    getBrowserbotAction(): BBResizeAction {
        return {action: "resize", width: this.event.width, height: this.event.height}
    }
}
