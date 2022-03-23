import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLMoveEvent} from "@butopen/user-events-model";

export type MouseMoveEventType = BLMoveEvent & { url: string, sid: number, tab: number }

export class MouseMoveEvent extends SignificantEvent<MouseMoveEventType> {

    getPlaywrightInstruction(): string {

        const {x, y, moves} = this.event
        let first = {x, y, at: 0}
        let prev = first
        const events: { x: number, y: number, at: number }[] = []
        events.push(first)
        for (let e of moves) {
            let next = {
                at: e.at,
                x: prev.x + e.x,
                y: prev.y + e.y
            }
            events.push(next)
            prev = next
        }
        const moveInstructions = events.map((e) => `await page.mouse.move(${e.x},${e.y});
await page.waitForTimeout(${e.at});`)

        return `${moveInstructions.join("\n")}`;
    }
}
