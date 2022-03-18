import {BLStorageEvent} from "@butopen/user-events-model"
import {SignificantEvent} from "../events-interface/event-interface";

export class LocalStorageEvent implements SignificantEvent {

    private readonly name: string;
    private readonly storage: { [k: string]: string };
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;

    constructor(event: BLStorageEvent & { url: string, sid: number, tab: number }) {

        this.name = event.name;
        this.storage = event.storage;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;

    }

    getPlaywrightInstruction(): string {
        return `const storage = JSON.parse('${JSON.stringify(this.storage).replaceAll('\\', "\\\\")}');\nawait page.evaluate(storage => {\n  for (const key in storage) {\n  window.localStorage.setItem(key, storage[key]);}\n}, storage);`;
    }


    getEventName(): string {
        return this.name;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `Storage: ${this.storage}`;
    }
}