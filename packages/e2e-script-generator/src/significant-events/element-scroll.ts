import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLScrollEvent} from "@butopen/user-events-model";

export type ElementScrollEventType = BLScrollEvent & { url: string, sid: number, tab: number, selector: string }

export class ElementScrollEvent extends SignificantEvent<ElementScrollEventType> {

    getPlaywrightInstruction(): string {

        return `await page.evaluate(async (s) => {
    const element = document.querySelector(s)!
    element.scroll(${this.event.x},${this.event.y})
}, '${this.event.selector}');`;

    }

}