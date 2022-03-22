import {SignificantEvent} from "../events-interface/event-interface";
import {Project} from "ts-morph"

export class SessionGenerator {

    private readonly significantEvents: SignificantEvent[];

    constructor() {
        this.significantEvents = [];
    }

    addEvent(event: SignificantEvent) {
        this.significantEvents.push(event)
    }

    async toPlaywrightScript(headless: boolean, slowMo: number, fileName: string) {
        const project = new Project();
        const playwrightFile = project.createSourceFile(`playwright-script-generated/` + `${fileName}` + `.ts`, "", {overwrite: true})

        playwrightFile.addStatements("const { chromium } = require('playwright')")
        playwrightFile.addStatements((writer) => {

            writer.write('(async () =>').block(() => {
                    writer.writeLine(`const browser = await chromium.launch({headless: ${headless}, slowMo: ${slowMo} })`)
                    writer.writeLine(`const context = await browser.newContext()`)

                    const foundCookieEvent = this.significantEvents.find((event) => event.getEventName() === 'cookie-data')
                    if (foundCookieEvent) {
                        this.significantEvents.splice(this.significantEvents.indexOf(foundCookieEvent), 1)
                        writer.writeLine(foundCookieEvent.getPlaywrightInstruction())
                    }

                    writer.writeLine("const page = await context.newPage()")

                    const httpCalls = this.significantEvents.filter((event) => event.getEventName() === 'after-response')
                    httpCalls.forEach((event) => writer.writeLine(event.getPlaywrightInstruction()))

                    for (const event of this.significantEvents) {
                        if (event.getEventName() !== 'after-response') {
                            let indexOfNextElement = this.significantEvents.indexOf(event) + 1
                            writer.writeLine(event.getPlaywrightInstruction())
                            writer.writeLine(`await page.waitForTimeout(${Math.abs(event.getTimestamp() - this.significantEvents[indexOfNextElement].getTimestamp())})`)
                        }
                    }

                    writer.write("await browser.close()")

                }
            ).write(')')
        })

        await playwrightFile.save()
    }

    toString()
        :
        string {
        let sessionDescription: string = '';
        for (const event of this.significantEvents) {
            sessionDescription += event.toString() + `\n`;
        }
        return sessionDescription;
    }
}