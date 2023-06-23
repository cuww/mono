import { Alert } from "antd";
import { NotificationInstance } from "antd/es/notification/interface";
import { useState } from "react";

export type JsxComponents = React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;

// TODO: add other types of notifications for API calls (success, error, warning, etc)
export const useAlerts = (): [NotificationInstance, JsxComponents] => {
    const [contextHolder, setContextHolder] = useState<any>(null);
    const api = {
        info: (props: any) => {
            setContextHolder(
                <Alert {...props} />
            )
        },
        success: (props: any) => {},
        error: (props: any) => {
            api.info({
                ...props,
                type: 'error',
            })
        },
        warning: (props: any) => {},
        open: (props: any) => {},
        destroy: () => {
            setContextHolder(null);
        }
    }

    return [api, contextHolder];
}