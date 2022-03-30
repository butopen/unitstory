import {Project} from "ts-morph"
import {BLEvent, BLSessionEvent} from "@butopen/user-events-model"
import {AfterResponseEvent, AfterResponseEventType} from "../significant-events/after-response";
import {CookieEvent, CookieEventType} from "../significant-events/cookie";
import {KeydownEvent, KeydownEventType} from "../significant-events/keydown";
import {KeyupEvent, KeyupEventType} from "../significant-events/keyup";
import {LocalStorageEvent, LocalStorageEventType} from "../significant-events/local-storage";
import {SessionStorageEvent, SessionStorageEventType} from "../significant-events/session-storage";
import {MousedownEvent, MousedownEventType} from "../significant-events/mousedown";
import {MouseupEvent, MouseupEventType} from "../significant-events/mouseup";
import {MouseMoveEvent, MouseMoveEventType} from "../significant-events/mouse-move";
import {MouseScrollEvent, MouseScrollEventType} from "../significant-events/mouse-scroll";
import {SessionStartEvent} from "../significant-events/session-start";
import {WindowResizeEvent, WindowResizeEventType} from "../significant-events/window-resize";
import {HttpEventsRouterGenerator} from "../significant-events/http-events-router-generator";
import {InputEvent, InputEventType} from "../significant-events/input";

type CustomEvent =
    AfterResponseEvent
    | CookieEvent
    | KeydownEvent
    | KeyupEvent
    | LocalStorageEvent
    | SessionStorageEvent
    | MousedownEvent
    | MouseupEvent
    | MouseMoveEvent
    | MouseScrollEvent
    | SessionStartEvent
    | WindowResizeEvent


export class SessionGenerator {

    private customEventList: CustomEvent[] = [];

    createSession(events: BLEvent[]): void {

        for (const e of events) {
            if (e.name === 'session-start') {
                this.customEventList.push(new SessionStartEvent(e as BLSessionEvent))
            } else if (e.name === 'session-full') {
                this.customEventList.push(new SessionStorageEvent(e as SessionStorageEventType))
            } else if (e.name === 'local-full') {
                this.customEventList.push(new LocalStorageEvent(e as LocalStorageEventType))
            } else if (e.name === 'resize') {
                this.customEventList.push(new WindowResizeEvent(e as WindowResizeEventType))
            } else if (e.name === 'cookie-data') {
                this.customEventList.push(new CookieEvent(e as CookieEventType))
            } else if (e.name === 'after-response') {
                this.customEventList.push(new AfterResponseEvent(e as AfterResponseEventType))
            } else if (e.name === 'mousedown') {
                this.customEventList.push(new MousedownEvent(e as MousedownEventType))
            } else if (e.name === 'mouseup') {
                this.customEventList.push(new MouseupEvent(e as MouseupEventType))
            } else if (e.name === 'mousemove') {
                this.customEventList.push(new MouseMoveEvent(e as MouseMoveEventType))
            } else if (e.name === 'scroll') {
                this.customEventList.push(new MouseScrollEvent(e as MouseScrollEventType))
            } else if (e.name === 'keydown') {
                this.customEventList.push(new KeydownEvent(e as KeydownEventType))
            } else if (e.name === 'keyup') {
                this.customEventList.push(new KeyupEvent(e as KeyupEventType))
            } else if (e.name === 'input') {
                this.customEventList.push(new InputEvent(e as InputEventType))
            }
        }
    }

    toPlaywrightScript(fileName: string, headless?: boolean, slowMo?: number, devtools?: boolean) {

        const project = new Project({});
        const playwrightFile = project.createSourceFile(`playwright-script-generated/` + `${fileName}` + `.ts`, "", {overwrite: true})

        playwrightFile.addStatements("const { chromium } = require('playwright')")
        playwrightFile.addStatements((writer) => {

            writer.write('(async () =>').block(() => {
                    writer.writeLine('let localStorage;')
                    writer.writeLine('let sessionStorage;')
                    writer.writeLine('let selector;')
                    writer.writeLine('let element;')
                    writer.writeLine('let text;')
                    writer.writeLine(`const browser = await chromium.launch({headless: ${headless}, slowMo: ${slowMo}, devtools: ${devtools}})`)
                    writer.writeLine(`const context = await browser.newContext()`)

                    const foundCookieEvent = this.customEventList.find((event) => event.eventName === 'cookie-data')
                    if (foundCookieEvent) {
                        this.customEventList.splice(this.customEventList.indexOf(foundCookieEvent), 1)
                        writer.writeLine(foundCookieEvent.getPlaywrightInstruction())
                    }

                    writer.writeLine("const page = await context.newPage()")
                    writer.writeLine(`let ts = ${this.customEventList[0].timestamp}`)

                    writer.writeLine(new HttpEventsRouterGenerator().generateRoutes(this.customEventList))

                    for (const event of this.customEventList) {
                        if (event.eventName !== 'after-response') {
                            writer.writeLine(`ts = ${event.timestamp}`)
                            writer.writeLine(event.getPlaywrightInstruction())
                            if (this.customEventList.indexOf(event) !== this.customEventList.length - 1) {
                                let indexOfNextElement = this.customEventList.indexOf(event) + 1
                                writer.writeLine(`await page.waitForTimeout(${Math.abs(event.timestamp - this.customEventList[indexOfNextElement].timestamp)})`)
                            }
                        } else {
                            if (this.customEventList.indexOf(event) !== this.customEventList.length - 1) {
                                let indexOfNextElement = this.customEventList.indexOf(event) + 1
                                writer.writeLine(`await page.waitForTimeout(${Math.abs(event.timestamp - this.customEventList[indexOfNextElement].timestamp)})`)
                            }
                        }
                    }
                    writer.write("await browser.close()")
                }
            ).write(')')
        })
        playwrightFile.saveSync()
    }

    toString(): string {
        let sessionDescription: string = '';
        for (const event of this.customEventList) {
            sessionDescription += event.toString() + `\n`;
        }
        return sessionDescription;
    }
}
