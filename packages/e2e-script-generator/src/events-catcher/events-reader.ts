import {readFileSync} from "fs";
import {BLEvent} from "@butopen/user-events-model";

export class EventsReader {

    read(useCase: string): BLEvent[] {

        const rawEvents: string = readFileSync(
            __dirname + `/sessions-list/` + `${useCase}` + `.txt`,
            'utf-8',
        );

        const events: BLEvent[] = [];

        rawEvents.split('\n').forEach((event) => {
            if (event !== '') {
                events.push(JSON.parse(event))
            }
        })

        return events.filter((event) => event.name === 'session-start' || event.name == 'mousemove' || event.name === 'click');
        
    }

}