export declare class Command {
    cli: string;
    description: string;
    options: never[];
    handle(args: any): void;
}
export declare const getCommands: () => Command[];
export declare const addCommand: (command: Command) => void;
export declare const run: () => void;
