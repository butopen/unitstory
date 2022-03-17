import {
    BLCookieEvent,
    BLEvent,
    BLKeyboardEvent,
    BLMouseEvent,
    BLScrollEvent,
    BLSessionEvent
} from "@butopen/user-events-model"
import {SessionGenerator} from "../session-generator/session-generator";
import {SessionStartEvent} from "../significant-events/session-start";
import {MouseMoveEvent} from "../significant-events/mouse-move";
import {ClickEvent} from "../significant-events/click";
import {CookieEvent} from "../significant-events/cookie";
import {AfterResponse} from "../significant-events/after-response";
import {MouseScrollEvent} from "../significant-events/mouse-scroll";
import {KeyboardInput} from "../significant-events/input";

export class EventsConverter {

    convert(events: BLEvent[]): SessionGenerator {

        const sessionGenerator = new SessionGenerator();

        for (let e of events) {

            if (e.name == "session-start") {
                const sessionEvent = e as BLSessionEvent;
                const sessionStartEvent = new SessionStartEvent(sessionEvent);
                sessionGenerator.addEvent(sessionStartEvent);
            } else if (e.name == "mousemove") {
                const mouseEvent = e as BLMouseEvent & { url: string, sid: number, tab: number };
                const mouseMoveEvent = new MouseMoveEvent(mouseEvent);
                sessionGenerator.addEvent(mouseMoveEvent);
            } else if (e.name == "click") {
                const mouseEvent = e as BLMouseEvent & { selector: string, url: string, sid: number, tab: number };
                const clickEvent = new ClickEvent(mouseEvent);
                sessionGenerator.addEvent(clickEvent);
            } else if (e.name == "cookie-data") {
                const cookieEvent = e as BLCookieEvent & { url: string, sid: number, tab: number };
                const cookieDataEvent = new CookieEvent(cookieEvent);
                sessionGenerator.addEvent(cookieDataEvent);
            } else if (e.name == "after-response") {
                const httpEvent = e;
                const afterResponseEvent = new AfterResponse(httpEvent);
                sessionGenerator.addEvent(afterResponseEvent);
            } else if (e.name == "scroll") {
                const mouseEvent = e as BLScrollEvent & { url: string, sid: number, tab: number };
                const scrollEvent = new MouseScrollEvent(mouseEvent)
                sessionGenerator.addEvent(scrollEvent)
            } else if (e.name == "input") {
                const keyboardEvent = e as BLKeyboardEvent & { value: string, selector: string, url: string, sid: number, tab: number }
                const inputEvent = new KeyboardInput(keyboardEvent)
                sessionGenerator.addEvent(inputEvent)
            }
        }
        return sessionGenerator;
    }

}


