import { ErrorsChannel } from "@@/core/errors"
import { IService, simpleService, cachedService } from "@@/core/services"
import { BinanceCurrency } from "../store/currency"


export const getCurrencyRateService: IService = cachedService(async (from: BinanceCurrency, to: BinanceCurrency) => {
    const response = await fetch(`/api/currency?symbol=${from}${to}`, {
        method: 'GET',
    })

    if (response.ok) {
        return response.json();
    }

    return Promise.reject(response);
}, 10)