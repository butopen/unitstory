import {SignificantEvent} from "../events-interface/event-interface";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export class KeydownEvent implements SignificantEvent {

    private readonly name: string;
    private readonly key: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: BLKeyboardEvent & { url: string, sid: number, tab: number }) {

        this.name = event.name;
        this.key = event.key;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;

    }

    getPlaywrightInstruction(): string {
        if (this.key === 'Tab' || this.key === 'Enter') {
            return `await page.keyboard.press('${this.key}');`
        } else {
            return `await page.keyboard.type('${this.key}')`
        }
    }

    getEventName(): string {
        return this.name;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `Key: ${this.key}`;
    }
}