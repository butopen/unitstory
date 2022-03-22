import {SignificantEvent} from "../events-interface/event-interface";
import {BLMoveEvent} from "@butopen/user-events-model";

export class MouseMoveEvent implements SignificantEvent {


    constructor(private event: BLMoveEvent & { url: string, sid: number, tab: number }) {
    }

    getPlaywrightInstruction(): string {
        const {x, y, moves} = this.event
        let first = {x, y, at: 0}
        let prev = first
        const events:{x:number, y:number, at:number}[] = []
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

        const moveInstructions = events.map(e => `
await page.mouse.move(${e.x},${e.y});
await page.waitForTimeout(${e.at});
`)
        
        return `
await page.mouse.move(${x},${y});
${ moveInstructions.join("\n")}
`;
        
    }

    toString(): string {
        return `Event: ${JSON.stringify(this.event)}`;
    }

    getEventName(): string {
        return this.event.name;
    }

    getTimestamp(): number {
        return this.event.timestamp
    }


}
