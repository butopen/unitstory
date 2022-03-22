import {SignificantEvent} from "../events-interface/event-interface";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export class KeyupEvent implements SignificantEvent {

    private readonly name: string;
    private readonly code: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: BLKeyboardEvent & { url: string, sid: number, tab: number }) {

        this.name = event.name;
        this.code = event.code;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;

    }

    getPlaywrightInstruction(): string {
        return `await page.keyboard.up('${this.code}');`
    }

    getEventName(): string {
        return this.name;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `Key: ${this.code}`;
    }

    getTimestamp(): number {
        return this.timestamp
    }

}