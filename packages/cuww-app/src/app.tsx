import { prepareAppConfig, AppConfig } from "@cuww/config";
import { Logger } from "./logger";
import { DomainAppBoot, DomainLoopHandler, IApplication, IDomainApp } from "./types";
import { NextApiRequest, NextApiResponse } from "next";


export class Application implements IApplication {

    _domains: DomainApp[] = [];
    _config: AppConfig;

    constructor(config: AppConfig) {
        this._config = config;
    }

    service(fn: any): any {
        this.boot();
        return async () => {
            prepareAppConfig(this._config);
            return await fn();
        };
    }

    shutdown() {
        Logger.debug('Application', 'Shutdown');
        this._domains = [];
    }

    async boot() {
        Logger.debug('Application', 'Booting');
        return await Promise.all(this.loopDomains((domain => domain.run())));
    }

    loopDomains(fn: DomainLoopHandler) {
        return Object.entries(this._domains).map(([name, domain]: [string, any]) => fn(domain, name));
    }

    addDomain(name: string, boot: DomainAppBoot) {
        Logger.debug('Application', `Add new domain ${name}`);
        this._domains.push(
            new DomainApp(name, boot)
        )
    }
}

export class DomainApp implements IDomainApp {
    
    // Domain config
    _name: string = '';
    _boot: DomainAppBoot;

    // Domain services and data
    _errors: any = {};
    _messages: any = {};
    _exposedServices: any = {};

    constructor(name: string, boot: DomainAppBoot) {
        this._name = name;
        this._boot = boot;
    }
    
    boot(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    run() {
        Logger.debug('Application', `Domain:${this._name} running`);
        this._boot(this);
    }

    /**
     * Exposed services
     */
    addService(name: string, service: any) {
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


// export const 