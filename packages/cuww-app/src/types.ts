export interface IApplication {
    _domains: IDomainApp[];
    _config: any;
    boot(): Promise<any>;
    loopDomains(fn: DomainLoopHandler): any;
    addDomain(name: string, boot: DomainAppBoot): any;
}

export interface IDomainApp {
    _name: string;
    _boot: DomainAppBoot;
    _errors: any;
    _messages: any;
    _exposedServices: any;
    // constructor(name: string, boot: DomainAppBoot): void;
    run(): void;
    addService(name: string, service: any): void;
    getService(name: string): any;
    addMessages(translations: any): void;
    getMessages(): any;
    addError(instance: any): void;
    getErrors(): any;    
}

export type DomainLoopHandler = (domain: IDomainApp, name: string) => any;

export type DomainAppBoot = (app: IDomainApp) => void;
