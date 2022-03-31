import {BLEvent} from "@butopen/user-events-model";
import {SignificantEvent} from "../events-abstract/event-abstract";
import {AfterResponseEventType} from "./after-response";

export class HttpEventsRouterGenerator {
    /**
     *
     * @param events - the list of blevents ordered by timestamp
     */
    generateRoutes(events: SignificantEvent<BLEvent>[]): string {
        const codeLines: string[] = []
        const routesMap = this.generateHttpEventsMap(events);
        for (let url in routesMap) {
            const httpRequests = routesMap[url]
            codeLines.push(`${httpRequests.map((h) => {
                const headers = {...h.event.response.headers, "x-unit-story": `${h.timestamp}`}
                return `
    if (ts >= (${h.timestamp}) && route.request().url() == "${h.event.request.url}" ) {
    responseOptions = {status: ${h.event.response.status}, contentType: ${JSON.stringify(h.event.response.headers['content-type'])}, headers: ${JSON.stringify(headers)},  body: ${JSON.stringify(h.event.response.body)}}
    mocked = true
    }`
            }).join("\n")}`)
        }
        return `await page.route('**/*', (route) => {  
    let mocked = false;    
    let responseOptions = {} as any
        ${codeLines.join("\n")}
        
    if(mocked) {
        route.fulfill(responseOptions)
    } else {
        route.continue()
    }
});`
    }

    private generateHttpEventsMap(events: SignificantEvent<BLEvent>[]): { [url: string]: { timestamp: number, event: AfterResponseEventType }[] } {
        const routesMap = {}
        let firstTimestamp = events[0].timestamp
        let lastEventTimestamp = firstTimestamp
        const eventsFiltered = events.filter((e) => e.event.name === 'after-response' || e.event.name === 'session-start' || e.event.name === 'mouseup' || e.event.name === 'mousedown' || e.event.name === 'keydown' || e.event.name === 'keyup')
        for (let e of eventsFiltered) {
            if (e.eventName == "after-response") {
                let event = e as SignificantEvent<AfterResponseEventType>
                event.event.response.headers['access-control-allow-origin'] = '*'
                this.httpCode(routesMap, lastEventTimestamp, event)
            } else {
                lastEventTimestamp = e.timestamp
            }
        }
        return routesMap
    }

    private httpCode(routesMap: {}, lastEventTimestamp: number, e: SignificantEvent<AfterResponseEventType>) {
        routesMap[e.event.request.url] = routesMap[e.event.request.url] ?? []
        routesMap[e.event.request.url].push({timestamp: lastEventTimestamp, event: e.event})
    }

}
