export { CryptoRateContainer } from './components/containers/crypto_rate'

import { Currency, Errors } from './messages'
import { InvalidCurrencyPair } from './errors/InvalidCurrencyPair'
import { getCurrencyRateService } from './services/currency';
import { DomainAppBoot } from '@cuww/app/src';

export const boot: DomainAppBoot = (app) => {
    app.addMessages({
        Errors,
        Currency,
    });
    
    app.addError(InvalidCurrencyPair);

    app.addService('getCurrencyRateService', getCurrencyRateService);
}