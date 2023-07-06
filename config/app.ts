import { LocalStorage } from "@@/cache/storage/local";
import { Cache } from "@@/cache/index";
import { useAlerts } from "@@/core/utils/api/alerts";
import { useNotifications } from "@@/core/utils/api/notifications";

export default {
    notificationsApi: useNotifications,
    alertsApi: useAlerts,
    cache: new Cache(new LocalStorage()),
    analytics: (key: any, payload: any) => {
        console.log('[analytics]', key, payload);
    },
}