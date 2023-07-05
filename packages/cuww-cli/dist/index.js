"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.addCommand = exports.getCommands = exports.Command = void 0;
var chalk_1 = __importDefault(require("chalk"));
var env_1 = require("./commands/env");
var args = process.argv;
var Command = /** @class */ (function () {
    function Command() {
        this.cli = 'task:empty';
        this.description = 'Empty command';
        this.options = [];
    }
    Command.prototype.handle = function (args) {
        console.log('Empty command', args);
    };
    return Command;
}());
exports.Command = Command;
var commands = [
    new env_1.BuildEnvCommand(),
];
var getCommands = function () {
    return commands.sort(function (a, b) { return a.cli.localeCompare(b.cli); });
};
exports.getCommands = getCommands;
var addCommand = function (command) {
    commands.push(command);
};
exports.addCommand = addCommand;
// usage represents the help guide
var usage = function () {
    var usageText = "\n  @@core helps you manage frontend project\n\n  usage:\n    yarn cli <command>\n\n    commands can be:\n  ";
    console.log(usageText);
    (0, exports.getCommands)().map(function (command) {
        console.log("  ".concat(chalk_1.default.green(command.cli), " \u2013 ").concat(command.description));
    });
};
// used to log errors to the console in red color
function errorLog(error) {
    console.log(chalk_1.default.red(error));
}
var start = function () {
    if (args[2] == 'help') {
        return usage();
    }
    var findCommands = (0, exports.getCommands)().filter(function (command) {
        return command.cli == args[2];
    });
    if (findCommands.length == 0) {
        errorLog('invalid command passed');
        return usage();
    }
    return findCommands[0].handle(args.slice(3));
};
var run = function () {
    console.log('');
    start();
    console.log('');
};
exports.run = run;
