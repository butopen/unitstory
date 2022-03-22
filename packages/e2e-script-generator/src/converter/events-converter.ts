import {
    BLCookieEvent,
    BLEvent,
    BLKeyboardEvent,
    BLMouseEvent,
    BLScrollEvent,
    BLSessionEvent, BLStorageEvent
} from "@butopen/user-events-model"
import {SessionGenerator} from "../session-generator/session-generator";
import {SessionStartEvent} from "../significant-events/session-start";
import {MouseMoveEvent} from "../significant-events/mouse-move";
import {CookieEvent} from "../significant-events/cookie";
import {AfterResponse} from "../significant-events/after-response";
import {MouseScrollEvent} from "../significant-events/mouse-scroll";
import {KeydownEvent} from "../significant-events/keydown";
import {LocalStorageEvent} from "../significant-events/local-storage";
import {SessionStorageEvent} from "../significant-events/session-storage";
import {KeyupEvent} from "../significant-events/keyup";
import {MousedownEvent} from "../significant-events/mousedown";
import {MouseupEvent} from "../significant-events/mouseup";

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
            } else if (e.name == "mousedown") {
                const mouseEvent = e as BLMouseEvent & { selector: string, url: string, sid: number, tab: number };
                const mousedownEvent = new MousedownEvent(mouseEvent);
                sessionGenerator.addEvent(mousedownEvent);
            } else if (e.name == "mouseup") {
                const mouseEvent = e as BLMouseEvent & { selector: string, url: string, sid: number, tab: number };
                const mouseupEvent = new MouseupEvent(mouseEvent);
                sessionGenerator.addEvent(mouseupEvent);
            } else if (e.name == "cookie-data") {
                const cookieEvent = e as BLCookieEvent & { url: string, sid: number, tab: number };
                const cookieDataEvent = new CookieEvent(cookieEvent);
                sessionGenerator.addEvent(cookieDataEvent);
            } else if (e.name == "after-response") {
                const afterResponseEvent = new AfterResponse(e);
                sessionGenerator.addEvent(afterResponseEvent);
            } else if (e.name == "scroll") {
                const mouseEvent = e as BLScrollEvent & { url: string, sid: number, tab: number };
                const scrollEvent = new MouseScrollEvent(mouseEvent)
                sessionGenerator.addEvent(scrollEvent)
            } else if (e.name == "keydown") {
                const keyboardEvent = e as BLKeyboardEvent & { url: string, sid: number, tab: number }
                const keydownEvent = new KeydownEvent(keyboardEvent)
                sessionGenerator.addEvent(keydownEvent)
            } else if (e.name == "keyup") {
                const keyboardEvent = e as BLKeyboardEvent & { url: string, sid: number, tab: number }
                const keyupEvent = new KeyupEvent(keyboardEvent)
                sessionGenerator.addEvent(keyupEvent)
            } else if (e.name == "local-full") {
                const storageEvent = e as BLStorageEvent & { url: string, sid: number, tab: number }
                const localStorageEvent = new LocalStorageEvent(storageEvent)
                sessionGenerator.addEvent(localStorageEvent)
            } else if (e.name == "session-full") {
                const storageEvent = e as BLStorageEvent & { url: string, sid: number, tab: number }
                const sessionStorageEvent = new SessionStorageEvent(storageEvent)
                sessionGenerator.addEvent(sessionStorageEvent)
            }
        }
        return sessionGenerator;
    }

}


