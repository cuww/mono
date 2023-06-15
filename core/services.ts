export type IService = (...args: any[]) => Promise<any>;

export const simpleService = (service: IService) => {
    try {
        return (...args: any) => service(...args);
    } catch(err) {
        throw err;
    }
}