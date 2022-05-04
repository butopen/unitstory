import {BLEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-abstract/event-abstract";
import {AfterResponseEventType} from "./after-response";
import {BBAction} from "../browserbot-actions-model/browserbot-actions.model";

export class HttpEventsRouterGenerator {
    /**
     *
     * @param events - the list of blevents ordered by timestamp
     */
    generateRoutes(events: SignificantEvent<BLEvent>[]): string {
        const httpEvents = events.sort((e1, e2) => e1.event.timestamp - e2.event.timestamp)
            .filter(e => e.event.name == "after-response").map(e => e as SignificantEvent<AfterResponseEventType>)

        const requestsScript: string[] = []
        requestsScript.push(`let requests:any[] = []`)
        for (let e of httpEvents) {
            const headers = {...e.event.response.headers, "x-unit-story": `${e.timestamp}`}
            headers['access-control-allow-origin'] = '*'
            const eventData = `{url: \`${e.event.request.url}\`,status: ${e.event.response.status}, contentType: ${JSON.stringify(e.event.response.headers['content-type'])}, headers: ${JSON.stringify(headers)},  body: ${JSON.stringify(e.event.response.body)}}`
            requestsScript.push(`requests.push(${eventData})`)
        }

        // the code below considers both unique URL requests and requests with same URL
        return `${requestsScript.join("\n")}
    await page.route('**/*', (route) => {  
        let responseOptions = {} as any
        const index = requests.findIndex(r => r.url == route.request().url())
        if(index >= 0){
            responseOptions = requests.splice(index, 1)[0]
            route.fulfill(responseOptions)
        }else {
            route.continue()
        }
    });`
    }
}

