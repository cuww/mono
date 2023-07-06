import { AnalyticalEvent } from "@@/analytics/base";

export class ButtonClick extends AnalyticalEvent {
    handle(payload: any) {
        return {
            type: 'button_click',
            ...payload,
        }
    }
}