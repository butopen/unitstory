import {SignificantEvent} from "../events-interface/event-interface";
import {BLKeyboardEvent} from "@butopen/user-events-model"

export class KeyboardInput implements SignificantEvent {

    private readonly name: string;
    private readonly selector: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;
    private readonly value: string;

    constructor(event: any) {

        this.name = event.name;
        this.selector = event.selector;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;
        this.value = event.value;
    }

    getPlaywrightInstruction(): string {
        return `await page.$('${this.selector}').type('${this.value}');`
    }

    getEventName(): string {
        return this.name;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `selector: ${this.selector}` + `value: ${this.value}`;
    }
}