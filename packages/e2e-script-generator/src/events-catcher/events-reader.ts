import {readFileSync} from "fs";
import {BLEvent} from "@butopen/user-events-model";
import {AfterResponseEventType} from "../significant-events/after-response";

const path = require("path");

export class EventsReader {

    read(fileName: string): BLEvent[] {

        const events = JSON.parse(readFileSync(
            path.resolve(__dirname, `../../test/use-cases/${fileName}`),
            'utf-8',
        ).toString()) as BLEvent[];

        for (let e of events) {

            if (e.name === 'after-response') {
                let event = e as AfterResponseEventType
                e.timestamp = event.request.timestamp
            }

        }

        events.sort((e1, e2) => e1.timestamp - e2.timestamp);

        return events.filter((event) =>
            event.name === 'session-start' ||
            event.name == 'mousemove' ||
            event.name === 'mouseup' ||
            event.name === 'mousedown' ||
            event.name === 'cookie-data' ||
            event.name === 'after-response' ||
            event.name === 'scroll' ||
            event.name === 'elementscroll' ||
            event.name === 'keydown' ||
            event.name === 'keyup' ||
            event.name === 'local-full' ||
            event.name === 'session-full' ||
            event.name === 'resize' ||
            event.name === 'input' ||
            event.name === 'device-information' ||
            event.name === 'referrer'
        );
    }

}
