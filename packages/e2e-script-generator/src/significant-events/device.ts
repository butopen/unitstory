import {SignificantEvent} from "../events-abstract/event-abstract";
import {BLDeviceEvent} from "@butopen/user-events-model";

export interface Screen {
    availHeight: number;
    availWidth: number;
    colorDepth: number;
    height: number;
    width: number;
    pixelDepth: number;
    orientation: string;
}

export interface Timing {
    connectStart: number;
    navigationStart: number;
    loadEventEnd: number;
    domLoading: number;
    secureConnectionStart: number;
    fetchStart: number;
    domContentLoadedEventStart: number;
    responseStart: number;
    responseEnd: number;
    domInteractive: number;
    domainLookupEnd: number;
    redirectStart: number;
    requestStart: number;
    unloadEventEnd: number;
    unloadEventStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    domContentLoadedEventEnd: number;
    redirectEnd: number;
    connectEnd: number;
}

export interface Navigation {
    type: number;
    redirectCount: number;
}

export interface Performance {
    timeOrigin: number;
    timing: Timing;
    navigation: Navigation;
}

export interface Gpu {
    performance: Performance;
    renderer: string;
    renderer2: string;
    vendor: string;
    vendor2: string;
}

export interface Device {
    userAgent: string;
    screen: Screen;
    dpi: number;
    timeZone: string;
    timeZoneOffset: number;
    language: string;
    platform: string;
    vendor: string;
    cpuCores: number;
    gpu: Gpu;
}

export type DeviceEventType = BLDeviceEvent & {
    device: Device;
    name: string;
    type: string;
    timestamp: number;
    sid: number;
    url: string;
    tab: number;
}


export class DeviceEvent extends SignificantEvent<DeviceEventType> {

    getPlaywrightInstruction(): string {
        return '' // It can be useful to set the user agent
    }

}