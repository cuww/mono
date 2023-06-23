import { getConfig } from "./app/config";
import { ErrorsChannel } from "./errors";
import { isServer } from "./helpers";

export type IService = (...args: any[]) => Promise<any>;

export const simpleService = (service: IService): IService => {
    return async (...args: any) => {
        try {
            return await service(...args);
        } catch (response: any) {
            const err = await response.json();
            ErrorsChannel.emit(err.error, err);
        }
    }
}

export const cachedService = (service: IService, ttl: number = 3600): IService => {
    return (...args: any) => {
        if(isServer()) {
            return service(...args);
        }
        return getConfig().cache?.get(service, ttl)(...args);
    }
}