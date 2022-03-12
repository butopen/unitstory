import {BLEvent, BLSessionEvent} from "@butopen/user-events-model"
import {SessionGenerator} from "../session-generator/session-generator";
import {SessionStartEvent} from "../significant-events/session-start";

export class EventsConverter {

    convert(events: BLEvent[]): SessionGenerator {

        const sessionGenerator = new SessionGenerator()

        for (let e of events) {

            if (e.name == "session-start") {
                const sessionEvent = e as BLSessionEvent
                const sessionStartEvent = new SessionStartEvent(sessionEvent)
                sessionGenerator.addEvent(sessionStartEvent)
            }
        }
        return sessionGenerator;
    }

}
