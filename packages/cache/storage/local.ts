import { Storage } from "./base";

export class LocalStorage extends Storage {
    getInstance() {
        if(typeof window == 'undefined') {
            return null;
        }

        return window.localStorage;
    }

    getKey(key: string) {
        return `[LSWAPP]_${key}]`
    }

    async getItem(key: string, ttl: number): Promise<any> {
        let data: any = this.getInstance()?.getItem(this.getKey(key));
        
        if(data) {
            data = JSON.parse(data);

            if(Date.parse(data?.expires) > Date.now()) {
                return data?.value;
            }

            return null;
        }

        return null;
    }

    async setItem(key: string, value: any, ttl: number): Promise<void> {
        return this.getInstance()?.setItem(this.getKey(key), JSON.stringify({
            expires: new Date(Date.now() + ttl * 1000),
            value,
        }));
    }

    async removeItem(key: string): Promise<void> {
        return this.getInstance()?.removeItem(this.getKey(key));
    }
}