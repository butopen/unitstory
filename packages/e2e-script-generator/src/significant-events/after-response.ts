import {SignificantEvent} from "../events-interface/event-interface";
import {HttpRequest} from "./http-interfaces/request";
import {HttpResponse} from "./http-interfaces/response";

export class AfterResponse implements SignificantEvent {

    private readonly request: HttpRequest;
    private readonly response: HttpResponse;
    private readonly name: string;
    private readonly url: string;
    private readonly sid: number;
    private readonly tab: number;
    private readonly timestamp: number;


    constructor(event: any) {

        this.request = event.request;
        this.response = event.response;
        this.name = event.name;
        this.url = event.url;
        this.sid = event.sid;
        this.tab = event.tab;
        this.timestamp = event.timestamp;

    }

    getPlaywrightInstruction(): string {
        return `await page.route('${this.request.url}', (route) => {
        route.fulfill({status: ${this.response.status}, contentType: ${JSON.stringify(this.response.headers['content-type'])}, headers: ${JSON.stringify(this.response.headers)},  body: ${JSON.stringify(this.response.body)}})})`
    }

    getEventName(): string {
        return this.name;
    }

    toString(): string {
        return `Event name: ${this.name} ` + `Url: ${this.url} ` + `Sid: ${this.sid} ` + `Tab: ${this.tab} ` + `Timestamp: ${this.timestamp}` + `Request: ${this.request}` + `Response: ${this.response}`;
    }

}