import {BLEvent, BLEventName} from "@butopen/user-events-model"
import {BBAction} from "../browserbot-actions-model/browserbot-actions.model";

export abstract class SignificantEvent<T extends BLEvent> {

    constructor(public event: T) {
    }

    get eventName(): BLEventName {
        return this.event.name;
    }

    get timestamp(): number {
        return this.event.timestamp;
    }

    toString(): string {
        return `Event: ${JSON.stringify(this.event)}`
    }

    setTimestamp(timestamp: number): void {
        this.event.timestamp = timestamp
    }

    protected abstract getPlaywrightInstruction(): string;


    protected getBrowserbotAction(): BBAction {
        return {action: ''}
    }

}
