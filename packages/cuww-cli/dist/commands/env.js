"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildEnvCommand = void 0;
const command_1 = require("../command");
const next_1 = require("@cuww/runtime-env/dist/next");
class BuildEnvCommand extends command_1.Command {
    constructor() {
        super(...arguments);
        this.cli = 'env:build';
        this.description = `Prepare env file with env variables`;
    }
    handle() {
        return (0, next_1.buildEnvConfig)();
    }
}
exports.BuildEnvCommand = BuildEnvCommand;
