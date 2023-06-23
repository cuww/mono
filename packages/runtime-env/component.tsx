import { FE_ENV_FILE } from "./config"

export const PublicRuntimeEnvProvider = () => {
    return <script type="text/javascript" src={`/${FE_ENV_FILE}`} />
}