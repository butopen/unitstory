import {BLEvent, BLEventName} from "@butopen/user-events-model"

export abstract class SignificantEvent<T extends BLEvent> {

    constructor(public event: T) {
    }

    toString(): string {
        return `Event: ${JSON.stringify(this.event)}`
    }

    get eventName(): BLEventName {
        return this.event.name;
    }

    get timestamp(): number {
        return this.event.timestamp;
    }

    setTimestamp(timestamp: number): void {
        this.event.timestamp = timestamp
    }

    protected abstract getPlaywrightInstruction(): string;

}
