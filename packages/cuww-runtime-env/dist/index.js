"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.PublicRuntimeEnvProvider = exports.FE_ENV_FILE = exports.WINDOW_ENV_NAME = exports.PLUGIN_NAME = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
exports.PLUGIN_NAME = 'core-env-plugin';
exports.WINDOW_ENV_NAME = '__publicCoreEnv';
exports.FE_ENV_FILE = '__env.js';
var PublicRuntimeEnvProvider = function () {
    return (0, jsx_runtime_1.jsx)("script", { type: "text/javascript", src: "/".concat(exports.FE_ENV_FILE) });
};
exports.PublicRuntimeEnvProvider = PublicRuntimeEnvProvider;
var env = function (name, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    if (typeof window !== 'undefined') {
        var envs = window[exports.WINDOW_ENV_NAME];
        return envs[name] || defaultValue;
    }
    else {
        return process.env[name] || defaultValue;
    }
};
exports.env = env;
