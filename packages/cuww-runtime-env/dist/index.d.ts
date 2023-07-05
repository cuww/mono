/// <reference types="react" />
/// <reference types="node" />
/// <reference types="node" />
export declare const PLUGIN_NAME = "core-env-plugin";
export declare const WINDOW_ENV_NAME = "__publicCoreEnv";
export declare const FE_ENV_FILE = "__env.js";
export declare const PublicRuntimeEnvProvider: () => JSX.Element;
export declare const env: (name: keyof typeof process.env, defaultValue?: any) => any;
