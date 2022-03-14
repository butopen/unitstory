import {BLSessionEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-interface/event-interface";

export class SessionStartEvent implements SignificantEvent {

    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: BLSessionEvent) {
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;
    }

    getPlaywrightInstruction(): string {
        return `await page.goto('${this.url}');`;
    }

    toString(): string {
        return `Event name: session-start ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp}`;
    }
}