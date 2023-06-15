import { Provider } from "./provider";

export const findError = (Errors: any) => (error: any) => {
    const handler = (obj: any) => {
        let result;
        for (const key in obj) {
            if (typeof obj[key].code !== 'undefined') {
                console.log(obj[key].code, error.code)
                if(obj[key].code === error.code) {
                    result = obj[key];
                }
                break;
            } else {
                result = handler(obj[key]);
            }
        }
    }

    return handler(Errors);
}

export class ErrorsProvider extends Provider {
    errors: any;

    constructor(errors: any) {
        super();
        this.errors = errors;
    }

    boot() {
        this.setProviderMethods({
            findError: findError(this.errors)
        });
    }
} 