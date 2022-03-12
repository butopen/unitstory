import {BLSessionEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-interface/event-interface";

export class SessionStartEvent implements SignificantEvent{

    private readonly url: string;

    constructor(event: BLSessionEvent){
        this.url = event.url
    }

    getPlaywrightInstruction(): string {
        return `await page.goto('${this.url}')`
    }
}