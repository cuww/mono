import { FC } from "react";
export type AppConfig = {
    notificationsApi?: any;
    alertsApi?: any;
    cache?: Cache;
    analytics?: Function;
};
export declare let _config: AppConfig;
export declare const getConfig: () => AppConfig;
export declare const defaultConfig: AppConfig;
export type AppConfigProps = keyof AppConfig;
export declare const prepareAppConfig: (opt: AppConfig) => AppConfig;
export declare const ConfigProviderContext: import("react").Context<{}>;
export declare const ConfigProvider: FC<any>;
export declare const useConfig: () => AppConfig;
