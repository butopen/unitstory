import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLMouseEvent} from "@butopen/user-events-model";
import {BBAction} from "../browserbot-actions-model/browserbot-actions.model";

export type MousedownEventType = BLMouseEvent & { url: string, sid: number, tab: number, selector: string }

export class MousedownEvent extends SignificantEvent<MousedownEventType> {

    getPlaywrightInstruction(): string {
        const {x, y} = this.event
        /* const r = Math.round(Math.random() * 1000000)
         const {selector, relative} = this.event
         const {x, y} = relative!
         return `const r${r} = await page.evaluate(async (s)=>{
     const {x, y} = document.querySelector(s)!.getBoundingClientRect()
     return {x, y}
     }, \`${selector}\`);
 await page.mouse.move(${x} - r${r}.x,${y} - r${r}.y);
 await page.mouse.down();`;*/
        return `await page.mouse.move(${x}, ${y});\nawait page.mouse.down();`
    }

    getBrowserbotAction(): BBAction {
        return {action: 'mousedown'}
    }
}
