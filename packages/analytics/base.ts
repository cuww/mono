export class AnalyticalEvent {
    name: string = this.constructor.name
    payload: any
    
    constructor(payload: any) {
        this.payload = this.handle(payload)
    }

    /**
     * Modify payload before sending to analytics
     */
    handle(payload: any) {
        return payload;
    }
}