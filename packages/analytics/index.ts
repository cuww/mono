import { eventbus } from "@@/core/events/bus";
import { AnalyticalEvent } from "./base";
import { AppConfig } from "@@/core/app/config";
import { useEffect } from "react";

export const EventsChannel: any = eventbus<{
    onError: () => void
}>()

export const trackEvent = (eventName: string, event: typeof AnalyticalEvent, fn: Function) => {
    return {
        [`data-analytics-event`]: event.name,
        [`data-analytics-type`]: eventName.toLowerCase(),
        [eventName]: track(event, fn)
    }
}

export const track = (event: typeof AnalyticalEvent, fn: Function) => {
    return async (...args: any) => {
        const payload = await fn(...args)
        const instance = new event(payload);
        EventsChannel.emit(instance.name, instance)
    }
}

export const useAnalytics = ({ analytics }: AppConfig) => {
    useEffect(() => {
        const unsubscribe = EventsChannel.listen(analytics);
        return () => {
            unsubscribe()
        }
    }, [analytics]);
}