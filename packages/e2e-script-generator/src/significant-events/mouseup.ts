import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLMouseEvent} from "@butopen/user-events-model";

export type MouseupEventType = BLMouseEvent & { url: string, sid: number, tab: number, selector: string }

export class MouseupEvent extends SignificantEvent<MouseupEventType> {

    getPlaywrightInstruction(): string {
        return `await page.mouse.up();\nselector = '${this.event.selector}';\ntext = await page.evaluate((selector) => {
            let element = document.querySelector(selector)!
            if (element) {
                if (element.hasAttribute('type')) {
                    if (element.getAttribute('type') === 'text') {
                        let htmlElement = element as HTMLInputElement
                        text = htmlElement.value
                        return text;
                    }
                }
            } else {
                return "";
            }
        }, selector)`;
    }


}