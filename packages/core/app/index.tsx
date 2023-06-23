import { IntlProvider } from "react-intl";
import { getMessages } from "../messages";
import { ErrorsProvider, getErrors } from "../errors";
import { AppConfig, useAppConfig } from "./config";
import { useAnalytics } from "@@/analytics";
import { IService } from "../services";
import { ExposedServices } from "./index.d";

// Types
export type AppBootstrap = (app: CreateApp) => void;
export type CreateApp = (name: string, boot: AppProvidersBootstrap) => void;
export type AppProvidersBootstrap = (app: App) => void;

// Apps registry
export let _apps: {
    [key: string]: App;
} = {};

export const getApps = () => {
    return _apps;
}

export class App {
    _errors: any = {};
    _messages: any = {};
    _name: string = '';
    _exposedServices: ExposedServices = {};

    constructor(name: string) {
        this._name = name;
    }

    /**
     * Exposed services
     */
    addService(name: string, service: IService) {
        this._exposedServices[name] = service;
    }

    getService(name: string) {
        return this._exposedServices[name];
    }

    /**
     * Intl messages
     */
    addMessages(translations: any) {
        this._messages = {
            ...this._messages,
            ...translations,
        }
    }

    getMessages() {
        return this._messages;
    }

    /**
     * Errors
     */
    addError(instance: any) {
        this._errors[instance.code] = instance;
    }

    getErrors() {
        return this._errors;
    }
}

export const createApp: CreateApp = (name, boot) => {
    const app = new App(name);
    boot(app);
    _apps[name] = app;
}

export const useApps = (apps: any) => {
    // Reset apps
    _apps = {};
    // Register apps
    Object.entries(apps).map(([_, boot]: [string, any]) => {
        boot(createApp);
    });
}


export type AppProvider = {
    children: any;
    apps: AppBootstrap[];
    locale?: string;
    config?: AppConfig;
}


export const withApps = async (fn: Function) => {
    const { Apps } = await import('@/apps');
    useApps(Apps);
    return await fn();
}

export const AppProvider = ({ children, apps, locale = 'en', config = {} }: AppProvider) => {
    useApps(apps);
    useAppConfig(config);
    useAnalytics(config)

    return (
        <ErrorsProvider errors={getErrors()}>
            <IntlProvider messages={getMessages()} locale={locale} defaultLocale={locale}>
                {children}
            </IntlProvider>
        </ErrorsProvider>
    )
}