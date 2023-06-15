export class Provider {
    _methods: any = {}

    boot() {
        // ...
    }

    setProviderMethods = (methods: any) => {
        this._methods = methods;
    }

    __get(name: string) {
        return this._methods[name];
    }
}

export const initProvider = (provider: any, ...args: any[]): Provider => {
    // @ts-ignore
    return new provider(...args);
}