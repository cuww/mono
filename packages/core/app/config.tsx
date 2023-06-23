import { Cache } from "../../cache";
import { LocalStorage } from "../../cache/storage/local";
import { useAlerts } from "../utils/api/alerts";
import { useNotifications } from "../utils/api/notifications";


export type AppConfig = {
    notificationsApi?: any;
    alertsApi?: any;
    cache?: Cache;
    analytics?: Function;
}

export let _config: AppConfig = {};

export const getConfig = (): AppConfig => {
    return _config;
}


export const useAppConfig = (opt: AppConfig) => {
    if (!opt.notificationsApi) {
        opt.notificationsApi = useNotifications;
    }

    if (!opt.alertsApi) {
        opt.alertsApi = useAlerts;
    }

    if (!opt.cache) {
        opt.cache = new Cache(new LocalStorage());
    }

    if (!opt.analytics) {
        opt.analytics = () => {}
    }

    _config = { ...opt }
}