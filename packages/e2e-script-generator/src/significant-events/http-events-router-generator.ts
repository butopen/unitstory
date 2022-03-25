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
            codeLines.push(`
await page.route('${url}', (route) => {
    ${httpRequests.map(h => `
    if (ts > ${h.timestamp}) {
        route.fulfill({status: ${h.event.response.status}, contentType: ${JSON.stringify(h.event.response.headers['content-type'])}, headers: ${JSON.stringify(h.event.response.headers)},  body: ${JSON.stringify(h.event.response.body)}})
    }`).join("\n")}
})`)
        }
        return codeLines.join("\n")
    }

    private generateHttpEventsMap(events: SignificantEvent<BLEvent>[]): { [url: string]: { timestamp: number, event: AfterResponseEventType }[] } {
        const routesMap = {}
        let firstTimestamp = events[0].timestamp
        let lastEventTimestamp = firstTimestamp
        for (let e of events) {
            if (e.eventName == "after-response") {
                let event = e as SignificantEvent<AfterResponseEventType>
                event.event.response.headers['access-control-allow-origin'] = '*'
                this.httpCode(routesMap, lastEventTimestamp, event)
            }
            lastEventTimestamp = e.timestamp
        }
        return routesMap
    }

    private httpCode(routesMap: {}, lastEventTimestamp: number, e: SignificantEvent<AfterResponseEventType>) {
        routesMap[e.event.request.url] = routesMap[e.event.request.url] ?? []
        routesMap[e.event.request.url].push({timestamp: lastEventTimestamp, event: e.event})
    }

}
