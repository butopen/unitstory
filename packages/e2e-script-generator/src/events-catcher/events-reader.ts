import {readFileSync} from "fs";
import {BLEvent} from "@butopen/user-events-model";

const path = require("path");

export class EventsReader {

    read(fileName: string): BLEvent[] {

        const events = JSON.parse(readFileSync(
            path.resolve(__dirname, `../../test/sessions-list/${fileName}`),
            'utf-8',
        ).toString()) as BLEvent[];

        return events.filter((event) =>
            event.name === 'session-start' ||
            event.name == 'mousemove' ||
            event.name === 'click' ||
            event.name === 'cookie-data' ||
            event.name === 'after-response' ||
            event.name === 'scroll' ||
            event.name === 'keydown' ||
            event.name === 'local-full' ||
            event.name === 'session-full'
        );
    }

}