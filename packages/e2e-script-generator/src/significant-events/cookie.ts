import {BLCookieEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-interface/event-interface";


export class CookieEvent implements SignificantEvent {

    private readonly name: string;
    private readonly cookies: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: BLCookieEvent & { url: string, sid: number, tab: number }) {

        this.name = event.name;
        this.cookies = event.cookie;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;

    }

    getPlaywrightInstruction(): string {
        let str = "await context.addCookies([";
        for (const cookie of this.getCookieList()) {
            if (JSON.stringify(this.getCookieList()[this.getCookieList().length - 1]) != JSON.stringify(cookie)) {
                str += `{name: '${cookie.name}', value: '${cookie.value}', url: '${cookie.url}'}, `
            } else {
                str += `{name: '${cookie.name}', value: '${cookie.value}', url: '${cookie.url}'}`
            }
        }
        str += '])'
        return str;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp} ` + `cookie: ${this.cookies}`;
    }

    getEventName(): string {
        return this.name;
    }

    getTimestamp(): number {
        return this.timestamp
    }

    private getCookieList(): { name: string, value: string, url: string }[] {

        const cookieList: { name: string, value: string, url: string }[] = [];
        const rawCookieList: string[] = this.cookies.split(' ').join('').split(';');
        for (const element of rawCookieList) {
            let cookieName: string = element.split(/=(.+)/)[0];
            let cookieValue: string = element.split(/=(.+)/)[1];
            cookieList.push({name: cookieName, value: cookieValue, url: this.url});
        }
        return cookieList;
    }


}