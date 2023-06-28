export const PLUGIN_NAME = 'core-env-plugin'
export const WINDOW_ENV_NAME = '__publicCoreEnv'
export const FE_ENV_FILE = '__env.js'

export const PublicRuntimeEnvProvider = () => {
    return <script type="text/javascript" src={`/${FE_ENV_FILE}`} />
}

export const env = (name: keyof typeof process.env, defaultValue: any = null) => {
    if(typeof window !== 'undefined') {
        const envs: any = window[WINDOW_ENV_NAME as any];
        return envs[name] || defaultValue;
    } else {
        return process.env[name] || defaultValue;
    }
}