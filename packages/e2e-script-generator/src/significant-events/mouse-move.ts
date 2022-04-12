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
         const moveInstructions = events.map((e) => {
             let str = ''
             if (e.at !== 0) {
                 str += `await page.waitForTimeout(${e.at});\n`
             }
             str += `await page.mouse.move(${e.x},${e.y});`
             return str;
         })
         return `${moveInstructions.join("\n")}`;

       /* let lastMoveAction = ""
        let sumTs = 0
        if (moves && moves.length > 0) {
            let lastX = x
            let lastY = y
            for (let m of moves) {
                lastX += m.x
                lastY += m.y
                sumTs += m.at
            }
            lastMoveAction = `await page.mouse.move(${lastX},${lastY});`
        }
        return `await page.mouse.move(${x},${y});\nawait page.waitForTimeout(${sumTs})\n${lastMoveAction}`*/
    }
}
