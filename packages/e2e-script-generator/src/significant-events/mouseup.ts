import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLMouseEvent} from "@butopen/user-events-model";

export type MouseupEventType = BLMouseEvent & { url: string, sid: number, tab: number, selector: string }

export class MouseupEvent extends SignificantEvent<MouseupEventType> {

    getPlaywrightInstruction(): string {
        const r = Math.round(Math.random() * 1000000)
        const {selector, relative} = this.event
        const {x, y} = relative!
        return `const r${r} = await page.evaluate(async (s)=>{
     const {x, y} = document.querySelector(s)!.getBoundingClientRect()
     return {x, y}
     }, \`${selector}\`);
 await page.mouse.move(${x} - r${r}.x,${y} - r${r}.y);
 await page.mouse.up();`;
    }


}