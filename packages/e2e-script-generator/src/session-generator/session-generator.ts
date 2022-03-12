import {SignificantEvent} from "../events-interface/event-interface";
import {Project} from "ts-morph"

export class SessionGenerator {

    private readonly significantEvents: SignificantEvent[] = []

    addEvent(event: SignificantEvent) {
        this.significantEvents.push(event)
    }

    async toPlaywrightScript(headless: boolean, slowMo: number) {
        const project = new Project({
            tsConfigFilePath: "tsconfig.json",
        })
        const playwrightFile = project.createSourceFile('playwright-script/playwright-file.ts')
        playwrightFile.addStatements("const { chromium } = require('playwright')")
        playwrightFile.addStatements((writer) => {
            writer.write('(async () =>').block(() => {
                writer.write(`const browser = await chromium.launch({ headless: ${headless}, slowMo: ${slowMo} });\n`)
                writer.write("const page = await browser.newPage();\n")
                for (const event of this.significantEvents) {
                    writer.write(event.getPlaywrightInstruction() + '\n')
                }
                writer.write("await browser.close()")
            })
        })
        playwrightFile.addStatements(')')
        await playwrightFile.save()
    }
}