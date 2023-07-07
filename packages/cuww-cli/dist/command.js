"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor() {
        this.cli = 'task:empty';
        this.description = 'Empty command';
        this.options = [];
    }
    handle(args) {
        console.log('Empty command', args);
    }
}
exports.Command = Command;
