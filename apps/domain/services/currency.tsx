import { ErrorsChannel } from "@@/core/errors"
import { IService, simpleService } from "@cuww/app/src/services"
import { BinanceCurrency } from "../store/currency"


export const getCurrencyRateService: IService = simpleService(async ({
    from, to
}: {
    from: BinanceCurrency,
    to: BinanceCurrency,
}) => {
    const response = await fetch(`http://localhost:3000/api/currency?symbol=${from}${to}`, {
        method: 'GET',
    })

    if (response.ok) {
        return response.json();
    }

    return Promise.reject(response);
})