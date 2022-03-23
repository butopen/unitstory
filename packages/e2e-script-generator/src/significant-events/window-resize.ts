import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLWindowResizeEvent} from "@butopen/user-events-model";

export type WindowResizeEventType = BLWindowResizeEvent & { url: string, sid: number, tab: number }

export class WindowResizeEvent extends SignificantEvent<BLWindowResizeEvent & { url: string, sid: number, tab: number }> {

    getPlaywrightInstruction(): string {
        return `await page.setViewportSize({ width: ${this.event.width}, height: ${this.event.height} });`;
    }

}
