export declare const PLUGIN_NAME = "core-env-plugin";
export declare const WINDOW_ENV_NAME = "__publicCoreEnv";
export declare const FE_ENV_FILE = "__env.js";
export declare const buildEnvConfig: () => void;
export declare class EnvFileGeneration {
    options: any;
    constructor(options?: any);
    handleWatchRun(): Promise<void>;
    apply(compiler: any): void;
}
export declare const withRuntimeEnv: any;
