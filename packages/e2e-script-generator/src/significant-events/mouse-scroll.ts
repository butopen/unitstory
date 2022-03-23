import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLScrollEvent} from "@butopen/user-events-model";

export type MouseScrollEventType = BLScrollEvent & { url: string, sid: number, tab: number }

export class MouseScrollEvent extends SignificantEvent<MouseScrollEventType> {

    getPlaywrightInstruction(): string {
        return `await page.mouse.wheel(${this.event.x},${this.event.y});`;
    }

}