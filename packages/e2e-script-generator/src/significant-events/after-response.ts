import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLHTTPResponseEvent} from "@butopen/user-events-model"

export type AfterResponseEventType = BLHTTPResponseEvent & { response: any }

export class AfterResponseEvent extends SignificantEvent<AfterResponseEventType> {

    getPlaywrightInstruction(): string {
        this.event.response.headers['access-control-allow-origin'] = '*'
        return `await page.route('${this.event.request.url}', (route) => {
        route.fulfill({status: ${this.event.response.status}, contentType: ${JSON.stringify(this.event.response.headers['content-type'])}, headers: ${JSON.stringify(this.event.response.headers)},  body: ${JSON.stringify(this.event.response.body)}})})`
    }

}