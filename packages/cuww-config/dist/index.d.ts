import { FC } from "react";
import { IApplication } from '@cuww/app/src/types';
export type AppConfig = {
    app?: IApplication;
    notificationsApi?: any;
    alertsApi?: any;
    cache?: Cache;
    analytics?: Function;
};
export declare let _config: AppConfig;
export declare const getConfig: () => AppConfig;
export declare const setConfig: (config: AppConfig) => void;
export declare const defaultConfig: AppConfig;
export type AppConfigProps = keyof AppConfig;
export declare const prepareAppConfig: (opt: AppConfig) => AppConfig;
export declare const ConfigProviderContext: import("react").Context<{
    app?: IApplication | undefined;
    notificationsApi?: any;
    alertsApi?: any;
    cache?: Cache | undefined;
    analytics?: Function | undefined;
}>;
export declare const ConfigProvider: FC<any>;
export declare const useConfig: () => AppConfig;
