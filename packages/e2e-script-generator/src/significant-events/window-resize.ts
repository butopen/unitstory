import {SignificantEvent} from "../events-interface/event-interface";
import {BLWindowResizeEvent} from "@butopen/user-events-model";

export class WindowResizeEvent implements SignificantEvent {

    private readonly name: string;
    private readonly width: number;
    private readonly height: number;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;

    constructor(event: BLWindowResizeEvent & { url: string, sid: number, tab: number }) {

        this.name = event.name;
        this.width = event.width;
        this.height = event.height;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;
    }

    getPlaywrightInstruction(): string {
        return `await page.setViewportSize({ width: ${this.width}, height: ${this.height} });`;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `width: ${this.width} ` + `height: ${this.height}`;
    }

    getEventName(): string {
        return this.name;
    }

    getTimestamp(): number {
        return this.timestamp
    }


}
