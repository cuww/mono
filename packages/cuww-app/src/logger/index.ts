export class Logger {

    static debug(action: any, ...args: any[]) {
        console.log(`[${action}]`, ...args);
    }

}