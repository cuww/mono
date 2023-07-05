"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfig = exports.ConfigProvider = exports.ConfigProviderContext = exports.prepareAppConfig = exports.defaultConfig = exports.getConfig = exports._config = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports._config = {};
var getConfig = function () {
    return exports._config;
};
exports.getConfig = getConfig;
exports.defaultConfig = {
    notificationsApi: function () { },
    alertsApi: function () { },
    cache: undefined,
    analytics: function () { },
};
var prepareAppConfig = function (opt) {
    Object.keys(exports.defaultConfig).map(function (key) {
        if (!opt[key]) {
            throw new Error("Config property ".concat(key, " is required"));
        }
    });
    exports._config = __assign({}, opt);
    return (0, exports.getConfig)();
};
exports.prepareAppConfig = prepareAppConfig;
exports.ConfigProviderContext = (0, react_1.createContext)({});
var ConfigProvider = function (_a) {
    var config = _a.config, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(exports.ConfigProviderContext.Provider, { value: (0, exports.prepareAppConfig)(config), children: children }));
};
exports.ConfigProvider = ConfigProvider;
var useConfig = function () {
    var config = (0, react_1.useContext)(exports.ConfigProviderContext);
    return config;
};
exports.useConfig = useConfig;
