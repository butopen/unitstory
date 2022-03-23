import {BLEvent} from "@butopen/user-events-model"

export abstract class SignificantEvent<T extends BLEvent> {

    constructor(protected event: T) {
    }

    toString(): string {
        return `Event: ${JSON.stringify(this.event)}`
    }

    getEventName(): string {
        return this.event.name;
    }

    getTimestamp(): number {
        return this.event.timestamp;
    }

    protected abstract getPlaywrightInstruction(): string;

}