export { CryptoRateContainer } from './components/containers/crypto_rate'

import { AppBootstrap } from '@@/core/app'
import { Currency, Errors } from './messages'
import { InvalidCurrencyPair } from './errors'
import { getCurrencyRateService } from './services/currency';

export const DOMAIN_NAME = 'Domain';

export const boot: AppBootstrap = (app) => {
    app(DOMAIN_NAME, (app) => { 
        app.addMessages({
            Errors,
            Currency,
        });
        
        app.addError(InvalidCurrencyPair);

        app.addService('getCurrencyRateService', getCurrencyRateService);
    });
}