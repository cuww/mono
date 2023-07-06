import { FC, createContext, useContext } from "react";
import { IApplication } from '@cuww/app/src/types';

export type AppConfig = {
    app?: IApplication;
    notificationsApi?: any;
    alertsApi?: any;
    cache?: any;
    analytics?: Function;
}

export let _config: AppConfig;

export const getConfig = (): AppConfig => {
    return _config;
}

export const setConfig = (config: AppConfig) => {
    _config = config;
}

export const defaultConfig: AppConfig = {
    notificationsApi: () => {},
    alertsApi: () => {},
    cache: undefined,
    analytics: () => {},
}

export type AppConfigProps = keyof AppConfig

export const prepareAppConfig = (opt: AppConfig) => {
    Object.keys(defaultConfig).map((key) => {
        if (!opt[key as AppConfigProps]) {
            throw new Error(`Config property ${key} is required`);
        }
    });

    setConfig({
        ...opt
    });

    return getConfig()
}

export const ConfigProviderContext = createContext({
    ...defaultConfig
});

export const ConfigProvider: FC<any> = ({ app, children }) => {
    let config = app._config;
    config.app = app;

    return (
        <ConfigProviderContext.Provider value={prepareAppConfig(config)}>
            {children}
        </ConfigProviderContext.Provider>
    )
}

export const useConfig = () => {
    const config = useContext<AppConfig>(ConfigProviderContext);
    return config;
}