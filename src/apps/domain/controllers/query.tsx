import { useState } from "react"
import { notification } from 'antd';

export const useQueryController = (service: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [api, contextHolder] = notification.useNotification();

    const run = async () => {
        let d = null;
        let e = null;
        setLoading(true);

        try {
            d = await service();
        } catch(err) {
            e = err;
            api.info({
                message: `Notification`,
                description: '123',
            });
        }

        setError(e);
        setData(d);
        setLoading(false);
    }

    return {
        run,
        data,
        loading,
        error,
        context: contextHolder,
    }
}