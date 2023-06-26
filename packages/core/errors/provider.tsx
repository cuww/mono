import React, { useContext } from "react";
import { eventbus } from '../events/bus'
import { App, getApps } from "@@/core/app";

export const ErrorsProviderContext = React.createContext({
    errors: []
});

export const ErrorsChannel: any = eventbus<{
  onError: () => void
}>()

export const ErrorsProvider = ({ children, errors }: any) => {
    return (
        <ErrorsProviderContext.Provider value={{ errors }}>
            {children}
        </ErrorsProviderContext.Provider>
    )
}

export const getErrors = () => {
    return Object.entries(getApps()).map(([_, app]: [string, App]) => {
        return app.getErrors()
    }).reduce((acc: any, cur: any) => {
        return {
            ...acc,
            ...cur,
        }
    }, {});
}

export const useErrors = () => {
    const { errors } = useContext(ErrorsProviderContext);

    const findError = (error: any) => {
        const handler = (obj: any): any => {
            let result;
            for (const key in obj) {
                if (typeof obj[key].code !== 'undefined') {
                    // console.log(obj[key].code, error.code)
                    if(obj[key].code === error.code) {
                        result = obj[key];
                    }
                    break;
                } else {
                    result = handler(obj[key]);
                }
            }

            return result;
        }
    
        return handler(errors);
    }

    return { errors, findError };
}