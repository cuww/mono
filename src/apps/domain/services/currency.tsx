import { IService } from "../../../../core/services"
import { BinanceCurrency } from "../store/currency"


export const getCurrencyRateService: IService = async (from: BinanceCurrency, to: BinanceCurrency) => {
    const response = await fetch(`/api/currency?symbol=${from}${to}`, {
        method: 'GET',
    })

    return response.json()
}