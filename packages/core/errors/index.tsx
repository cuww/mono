import { useErrors } from "./provider";
import { useEffect, useState } from "react";
import { ErrorsChannel, ErrorsProvider, getErrors } from './provider';
import { getConfig } from "@@/core/app/config";

export {
    ErrorsChannel,
    ErrorsProvider,
    getErrors,
}
/**
 * TODO: implement this function to use it in the controllers and components to display errors
 */
export const useErrorEffect = (callback: any, errors: any) => {
    useEffect(() => {
        const unsubscribe = errors.map((error: any) => {
            // @ts-ignore
            return ErrorsChannel.on(error.code, () => {
                callback(new error);
            });
        });

        return () => {
            unsubscribe.map((unsub: any) => unsub());
        }
    }, [])
}

export const useErrorNotifications = (callback: any, errors: any[] = []) => {
    const [api, contextHolder] = getConfig().notificationsApi();

    useErrorEffect((error: any) => {
        callback(api, error);
    }, errors);

    return [api, contextHolder];
}

export const useErrorAlert = (callback: any, errors: any[] = []) => {
    const [api, contextHolder] = getConfig().alertsApi();

    useErrorEffect((error: any) => {
        callback(api, error);
    }, errors);

    return [api, contextHolder];
}