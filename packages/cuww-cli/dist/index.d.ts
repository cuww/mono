import { Command } from './command';
export { Command, };
export declare const getCommands: () => Command[];
export declare const addCommand: (command: Command) => void;
export type bootTemp = (addCmd: typeof addCommand) => void;
export declare const boot: (bootTemp: bootTemp) => void;
