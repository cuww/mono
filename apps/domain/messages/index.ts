import { InvalidCurrencyPair } from "../errors/InvalidCurrencyPair"
import { BinanceCurrency } from "../store/currency"

export const CurrencyPath = 'Currency'

export const Errors = {
    [InvalidCurrencyPair.code]: {
        message: 'Currency Error',
        description: 'Invalid currency pair',
    }
}

export const Currency = {
    [BinanceCurrency.BTC]: 'Bitcoin',
    [BinanceCurrency.ETH]: 'Ethereum',
    [BinanceCurrency.BNB]: 'Binance Coin',
    [BinanceCurrency.USDT]: 'Tether',
    [BinanceCurrency.DOGE]: 'Dogecoin',
    [BinanceCurrency.BUSD]: 'Binance USD',
}
