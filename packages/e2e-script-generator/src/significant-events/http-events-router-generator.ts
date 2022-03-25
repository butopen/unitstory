import { BLEvent } from "@butopen/user-events-model";
import {SignificantEvent} from "../events-abstract/event-abstract";
import {AfterResponseEventType} from "./after-response";

export class HttpEventsRouterGenerator {

    /**
     * 
     * @param events - the list of blevents ordered by timestamp
     */
    generateRoutes(events: SignificantEvent<BLEvent>[]){
        const codeLines:string[] = []
        const routesMap = this.generateHttpEventsMap(events);
        for(let url in routesMap){
            const httpRequests = routesMap[url]
            codeLines.push(`
            await page.route('${url}', (route) => {
                ${httpRequests.map(h => `
                if (ts > ${h.timestamp})
                    route.fulfill(${convert(h.event)})`)}
            `)
        }
        return codeLines.join("\n")
    }

    private generateHttpEventsMap(events: SignificantEvent<BLEvent>[]):{[url:string]: {timestamp:number, event: AfterResponseEventType }[]} {
        const routesMap = {}
        let firstTimestamp = events[0].timestamp
        let lastEventTimestamp = firstTimestamp
        for (let e of events) {
            if (e.eventName == "after-response") {
                this.httpCode(routesMap, lastEventTimestamp, e as SignificantEvent<AfterResponseEventType>)
            }
            lastEventTimestamp = e.timestamp
        }
        return routesMap
    }

    private httpCode(routesMap: {}, lastEventTimestamp: number, e: SignificantEvent<AfterResponseEventType>) {
        routesMap[e.event.request.url] = routesMap[e.event.request.url] ?? []
        routesMap[e.event.request.url].push({timestamp:lastEventTimestamp, event: e.event})
    }
    
}
