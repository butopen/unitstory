import {SignificantEvent} from "../events-interface/event-interface";
import {BLMouseEvent} from "@butopen/user-events-model";

export class ClickEvent implements SignificantEvent {

    private readonly selector: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: BLMouseEvent & { selector: string, url: string, sid: number, tab: number }) {
        this.selector = event.selector
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;
    }

    getPlaywrightInstruction(): string {
        return `await page.click('${this.selector}');`;
    }

    toString(): string {
        return `Event name: click ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `selector: ${this.selector}`;
    }
}