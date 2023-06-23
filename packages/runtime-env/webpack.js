const fs = require('fs');
const path = require('path');
const pkg = require('@next/env');

const { loadEnvConfig } = pkg;
const { PLUGIN_NAME, WINDOW_ENV_NAME, FE_ENV_FILE } = require('./config');

const buildEnvConfig = () => {
    const projectDir = process.cwd()
    loadEnvConfig(projectDir)

    const publicPath = path.resolve(process.cwd(), `public/${FE_ENV_FILE}`);
    const publicEnvs = {};

    Object.entries(process.env).forEach(([key, value]) => {
        if (key.match(/NEXT_PUBLIC_(.*)/g)) {
            publicEnvs[key] = value;
        }
    });

    console.log(`env   – ready in ${publicPath}`)
    return fs.writeFileSync(publicPath, `window.${WINDOW_ENV_NAME} = ${JSON.stringify(publicEnvs)}`);
}

class EnvFileGeneration {
    constructor(options) {
        this.options = options;
    }

    async handleWatchRun() {
        return buildEnvConfig();
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tapPromise(PLUGIN_NAME, this.handleWatchRun.bind(this));
    }
};


module.exports = {
    PLUGIN_NAME,
    WINDOW_ENV_NAME,
    FE_ENV_FILE,
    buildEnvConfig,
    withRuntimeEnv: function (config) {
        config.webpack = (config, options) => {
            config.plugins.push(new EnvFileGeneration());
            return config
        }

        return config;
    }
}