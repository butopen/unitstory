export interface SignificantEvent {

    getPlaywrightInstruction(): string

    toString(): string

    getEventName(): string

    getTimestamp(): number
}