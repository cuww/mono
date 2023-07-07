"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.boot = exports.addCommand = exports.getCommands = exports.Command = void 0;
const chalk_1 = __importDefault(require("chalk"));
const env_1 = require("./commands/env");
const command_1 = require("./command");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return command_1.Command; } });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
let commands = [
    new env_1.BuildEnvCommand(),
];
const getCommands = () => {
    return commands.sort((a, b) => a.cli.localeCompare(b.cli));
};
exports.getCommands = getCommands;
const addCommand = (command) => {
    commands.push(command);
};
exports.addCommand = addCommand;
const start = () => {
    let instance = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
        .scriptName('')
        .usage('@cuww/cli is designed to provide a cool way to manage your applications');
    (0, exports.getCommands)().map(command => {
        instance.command(chalk_1.default.green(command.cli), command.description);
        instance.command(command.cli, false, () => { }, command.handle);
    });
    instance
        .demandCommand(1)
        .parse();
    // if (args[2] == 'help') {
    //   return usage()
    // }
    // let findCommands = getCommands().filter(command => {
    //   return command.cli == args[2]
    // });
    // if (findCommands.length == 0) {
    //   errorLog('invalid command passed')
    //   return usage()
    // }
    // return findCommands[0].handle(args.slice(3))
};
const boot = (bootTemp) => {
    console.log('');
    bootTemp(exports.addCommand);
    start();
    console.log('');
};
exports.boot = boot;
