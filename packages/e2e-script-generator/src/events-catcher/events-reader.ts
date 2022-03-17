import {readFileSync} from "fs";
import {BLEvent} from "@butopen/user-events-model";

const path = require("path");

export class EventsReader {

    read(fileName: string): BLEvent[] {

        const events = JSON.parse(readFileSync(
            path.resolve(__dirname, `../../test/sessions-list/${fileName}`),
            'utf-8',
        ).toString()) as BLEvent[];

        const cleanEvents = this.clearEvents(events)

        return cleanEvents.filter((event) =>
            event.name === 'session-start' ||
            event.name == 'mousemove' ||
            event.name === 'click' ||
            event.name === 'cookie-data' ||
            event.name === 'after-response' ||
            event.name === 'scroll' ||
            event.name === 'input'
        );
    }

    private clearEvents(events: BLEvent[] & { selector? }[]) {
        // Not yet completed at all
        let cleanList: BLEvent[] & { selector? }[] = [];
        let currentSelector: string = '';
        for (const event of events) {
            if (event.name != 'input') {
                cleanList.push(event);
            } else {
                if (event.selector != currentSelector) {
                    cleanList.push(event);
                    currentSelector = event.selector;
                }
            }
        }
        return cleanList;
    }

}