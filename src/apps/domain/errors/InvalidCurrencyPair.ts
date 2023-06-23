export class InvalidCurrencyPair extends Error {
    static code = "invalid_currency_pair";

    constructor() {
        super("Invalid currency pair");
    }

    static throw(data: any) {
        return {
            error: InvalidCurrencyPair.code,
        }
    }
}