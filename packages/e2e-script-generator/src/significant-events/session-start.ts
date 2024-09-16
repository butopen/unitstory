import {BLSessionEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-abstract/event-abstract";

export class SessionStartEvent extends SignificantEvent<BLSessionEvent> {

    getPlaywrightInstruction(): string {
        return `await page.goto('${this.event.url}', {waitUntil: 'load'});`;
    }

}