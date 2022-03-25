import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLEvent, BLHTTPResponseEvent} from "@butopen/user-events-model"


type Headers = {[header:string]:string}

export interface Request {
    headers: Headers;
    method: string;
    path: string;
    timestamp: number;
    url: string;
    body: string;
}

export interface Response {
    body: string;
    headers: Headers;
    status: number;
    timestamp: number;
}

export type AfterResponseEventType = BLEvent & {
    name: string;
    type: string;
    timestamp: number;
    request: Request;
    status: number;
    response: Response;
    sid: number;
    url: string;
    tab: number;
}

export class AfterResponseEvent extends SignificantEvent<AfterResponseEventType> {

    getPlaywrightInstruction(): string {
        this.event.response.headers['access-control-allow-origin'] = '*'
        return `await page.route('${this.event.request.url}', (route) => {
        route.fulfill({status: ${this.event.response.status}, contentType: ${JSON.stringify(this.event.response.headers['content-type'])}, headers: ${JSON.stringify(this.event.response.headers)},  body: ${JSON.stringify(this.event.response.body)}})})`
    }

}
