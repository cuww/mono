import { FC, createContext } from "react";

export type AppConfig = {
    notificationsApi?: any;
    alertsApi?: any;
    cache?: Cache;
    analytics?: Function;
}

export let _config: AppConfig = {};

export const getConfig = (): AppConfig => {
    return _config;
}

export const defaultConfig: AppConfig = {
    notificationsApi: () => {},
    alertsApi: () => {},
    cache: undefined,
    analytics: () => {},
}

export type AppConfigProps = keyof AppConfig

export const useAppConfig = (opt: AppConfig) => {
    Object.keys(defaultConfig).map((key) => {
        if (!opt[key as AppConfigProps]) {
            throw new Error(`Config property ${key} is required`);
        }
    });

    _config = { ...opt }

    return getConfig()
}

export const ConfigProviderContext = createContext({
    
});

export const ConfigProvider: FC<any> = ({ config, children }) => {
    const value = useAppConfig(config);

    return (
        <ConfigProviderContext.Provider value={value}>
            {children}
        </ConfigProviderContext.Provider>
    )
}