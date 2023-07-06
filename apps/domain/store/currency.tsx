import { atomWithStorage } from 'jotai/utils'
import { UrlStorage } from '@@/core/storage/url'

enum BinanceCurrency {
    BTC = 'BTC',
    USDT = 'USDT',
    ETH = 'ETH',
    BNB = 'BNB',
    BUSD = 'BUSD',
    DOGE = 'DOGE',
}

const FROM_CURRENCY_URL_PARAM = 'fc';
const TO_CURRENCY_URL_PARAM = 'tc';

const fromCurrencyAtom = atomWithStorage(FROM_CURRENCY_URL_PARAM, ...UrlStorage(BinanceCurrency.BTC))
const toCurrencyAtom = atomWithStorage(TO_CURRENCY_URL_PARAM, ...UrlStorage(BinanceCurrency.USDT))

export {
    BinanceCurrency,
    FROM_CURRENCY_URL_PARAM,
    TO_CURRENCY_URL_PARAM,
    fromCurrencyAtom,
    toCurrencyAtom,
}