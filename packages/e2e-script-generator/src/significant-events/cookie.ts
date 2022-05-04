import {BLCookieEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-abstract/event-abstract";
import {BBAction} from "../browserbot-actions-model/browserbot-actions.model";

export type CookieEventType = BLCookieEvent & { url: string, sid: number, tab: number }

export class CookieEvent extends SignificantEvent<CookieEventType> {

    getPlaywrightInstruction(): string {
        let str = "await context.addCookies([";
        for (const cookie of this.getCookieList()) {
            if (JSON.stringify(this.getCookieList()[this.getCookieList().length - 1]) != JSON.stringify(cookie)) {
                str += `{name: '${encodeURIComponent(cookie.name)}', value: '${encodeURIComponent(cookie.value)}', url: '${cookie.url}'}, `
            } else {
                str += `{name: '${encodeURIComponent(cookie.name)}', value: '${encodeURIComponent(cookie.value)}', url: '${cookie.url}'}`
            }
        }
        str += '])'
        return str;
    }

    getBrowserbotAction(): BBAction {
        return super.getBrowserbotAction();
    }

    private getCookieList(): { name: string, value: string, url: string }[] {

        const cookieList: { name: string, value: string, url: string }[] = [];
        const rawCookieList: string[] = this.event.cookie.split(' ').join('').split(';');
        for (const element of rawCookieList) {
            let cookieName: string = element.split(/=(.+)/)[0];
            let cookieValue: string = element.split(/=(.+)/)[1];
            cookieList.push({name: cookieName, value: cookieValue, url: this.event.url});
        }
        return cookieList;
    }


}