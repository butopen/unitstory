import {SignificantEvent} from "../events-interface/event-interface";
import {BLMouseEvent} from "@butopen/user-events-model";

export class MouseMoveEvent implements SignificantEvent {

    private readonly x: number;
    private readonly y: number;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;

    constructor(event: BLMouseEvent & { url: string, sid: number, tab: number }) {
        this.x = event.x;
        this.y = event.y;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;
    }

    getPlaywrightInstruction(): string {
        return `await page.mouse.move(${this.x},${this.y});`;
    }

    toString(): string {
        return `Event name: mousemove ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `x: ${this.x} ` + `y: ${this.y}`;
    }

}