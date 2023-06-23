export abstract class Storage {

    async getItem(key: string, ttl: number): Promise<any> {
        throw new Error('Not implemented');
    }

    async setItem(key: string, value: any, ttl: number): Promise<void> {
        throw new Error('Not implemented');
    }

    async removeItem(key: string): Promise<void> {
        throw new Error('Not implemented');
    }

    getCacheKey(...args: any): string {
        return args.join('_');
    }

}