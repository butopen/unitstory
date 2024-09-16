import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLMouseEvent} from "@butopen/user-events-model";

export type MouseupEventType = BLMouseEvent & { url: string, sid: number, tab: number, selector: string }

export class MouseupEvent extends SignificantEvent<MouseupEventType> {

    getPlaywrightInstruction(): string {
        return `await page.mouse.up();`;
    }


}