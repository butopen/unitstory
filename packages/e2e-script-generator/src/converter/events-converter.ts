import {BLEvent, BLMouseEvent, BLSessionEvent} from "@butopen/user-events-model"
import {SessionGenerator} from "../session-generator/session-generator";
import {SessionStartEvent} from "../significant-events/session-start";
import {MouseMoveEvent} from "../significant-events/mouse-move";
import {ClickEvent} from "../significant-events/click";

export class EventsConverter {

    convert(events: BLEvent[]): SessionGenerator {

        const sessionGenerator = new SessionGenerator()

        for (let e of events) {

            if (e.name == "session-start") {
                const sessionEvent = e as BLSessionEvent
                const sessionStartEvent = new SessionStartEvent(sessionEvent)
                sessionGenerator.addEvent(sessionStartEvent)
            }

            else if (e.name == "mousemove") {
                const mouseEvent = e as BLMouseEvent & { url: string, sid: number, tab: number }
                const mouseMoveEvent = new MouseMoveEvent(mouseEvent)
                sessionGenerator.addEvent(mouseMoveEvent)
            }

            else if (e.name == "click") {
                const mouseEvent = e as BLMouseEvent & { selector: string, url: string, sid: number, tab: number }
                const clickEvent = new ClickEvent(mouseEvent)
                sessionGenerator.addEvent(clickEvent)
            }
        }
        return sessionGenerator;
    }

}


