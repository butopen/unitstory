import {SignificantEvent} from "../events-interface/event-interface";
import {BLMouseEvent} from "@butopen/user-events-model";

export class MouseupEvent implements SignificantEvent {

    private readonly name: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: BLMouseEvent & { url: string, sid: number, tab: number }) {

        this.name = event.name;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;

    }

    getPlaywrightInstruction(): string {
        return `await page.mouse.up();`;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} `;
    }

    getEventName(): string {
        return this.name;
    }

    getTimestamp(): number {
        return this.timestamp
    }

}