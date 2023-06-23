import { useState } from "react"
import { useErrorNotifications } from "@@/core/errors";
import { FormattedMessage } from "react-intl";

export const useQueryController = (service: any, errors: any[] = [], useErrorHook = useErrorNotifications) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [api, contextHolder] = useErrorHook((api: any, error: any) => {
        api.error({
            message: <FormattedMessage id={`Errors.${error.constructor.code}.message`} />,
            description: <FormattedMessage id={`Errors.${error.constructor.code}.description`} />,
        });

        setError((error: any) => [...errors, error])
    }, errors)

    const run = async () => {
        api.destroy();
        setLoading(true);
        setError(null);
        setData(await service());
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