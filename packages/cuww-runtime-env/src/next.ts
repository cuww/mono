import fs from 'fs';
import path from 'path';
import { loadEnvConfig } from '@next/env';

export const PLUGIN_NAME = 'core-env-plugin'
export const WINDOW_ENV_NAME = '__publicCoreEnv'
export const FE_ENV_FILE = '__env.js'

export const buildEnvConfig = () => {
    const projectDir = process.cwd()
    loadEnvConfig(projectDir)

    const publicPath = path.resolve(process.cwd(), `public/${FE_ENV_FILE}`);
    const publicEnvs: any = {};

    Object.entries(process.env).forEach(([key, value]) => {
        if (key.match(/NEXT_PUBLIC_(.*)/g)) {
            publicEnvs[key] = value;
        }
    });

    console.log(`env   – ready in ${publicPath}`)
    return fs.writeFileSync(publicPath, `window.${WINDOW_ENV_NAME} = ${JSON.stringify(publicEnvs)}`);
}

export class EnvFileGeneration {
    options: any;

    constructor(options?: any) {
        this.options = options;
    }

    async handleWatchRun() {
        return buildEnvConfig();
    }

    apply(compiler: any) {
        compiler.hooks.afterEmit.tapPromise(PLUGIN_NAME, this.handleWatchRun.bind(this));
    }
};

export const withRuntimeEnv: any = (config: any) => {
    config.webpack = (config: any, options: any) => {
        config.plugins.push(new EnvFileGeneration());
        return config
    }

    return config;
}