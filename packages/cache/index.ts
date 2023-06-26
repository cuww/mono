import { ErrorsChannel } from "@@/core/errors";
import { IService } from "@@/core/services";
import { Storage } from './storage/base';
import { KeyBuilder } from "./key";
import { LocalStorage } from "./storage/local";

export class Cache {
    _adapter: Storage;
    _keyBuilder: KeyBuilder;

    constructor(adapter: Storage = new LocalStorage(), keyBuilder: KeyBuilder = new KeyBuilder()) {
        this._adapter = adapter;
        this._keyBuilder = keyBuilder;
    }

    get(service: IService, ttl: number = 3600): any {
        return async (...args: any) => {
            const cacheKey = this._keyBuilder.build(...args, ttl);
            const cached = await this._adapter.getItem(cacheKey, ttl);

            if(!cached) {
                try {
                    let data = await service(...args);
                    await this._adapter.setItem(cacheKey, data, ttl);
                    return data;
                } catch (response: any) {
                    const err = await response.json();
                    return ErrorsChannel.emit(err.error, err);
                }
            } else {
                return cached;
            }
        }
    }

}