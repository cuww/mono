import { atomWithStorage } from 'jotai/utils'
import { UrlStorage } from './url'
import { FROM_CURRENCY_URL_PARAM, TO_CURRENCY_URL_PARAM } from '../utils/url'

export enum BinanceCurrency {
    BTC = 'BTC',
    USDT = 'USDT',
    ETH = 'ETH',
    BNB = 'BNB',
    BUSD = 'BUSD',
    DOGE = 'DOGE',
}

export const fromCurrencyAtom = atomWithStorage(FROM_CURRENCY_URL_PARAM, ...UrlStorage(BinanceCurrency.BTC))
export const toCurrencyAtom = atomWithStorage(TO_CURRENCY_URL_PARAM, ...UrlStorage(BinanceCurrency.USDT))