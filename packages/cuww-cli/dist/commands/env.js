"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildEnvCommand = void 0;
var __1 = require("../");
var next_1 = require("@cuww/runtime-env/dist/next");
var BuildEnvCommand = /** @class */ (function (_super) {
    __extends(BuildEnvCommand, _super);
    function BuildEnvCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cli = 'env:build';
        _this.description = "Prepare env file with env variables";
        return _this;
    }
    BuildEnvCommand.prototype.handle = function () {
        return (0, next_1.buildEnvConfig)();
    };
    return BuildEnvCommand;
}(__1.Command));
exports.BuildEnvCommand = BuildEnvCommand;
