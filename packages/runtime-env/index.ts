export { PublicRuntimeEnvProvider } from './component'

import { WINDOW_ENV_NAME } from './config'

export const env = (name: keyof typeof process.env, defaultValue: any = null) => {
    if(typeof window !== 'undefined') {
        const envs: any = window[WINDOW_ENV_NAME as any];
        return envs[name] || defaultValue;
    } else {
        return process.env[name] || defaultValue;
    }
}