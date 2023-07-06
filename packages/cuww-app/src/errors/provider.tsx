import React, { useContext } from "react";
import { eventbus } from '@cuww/app/src/events/bus'
import { useConfig } from '@cuww/config'

export const ErrorsProviderContext = React.createContext({
    errors: []
});

export const ErrorsChannel: any = eventbus<{
  onError: () => void
}>()

export const ErrorsProvider = ({ children }: any) => {
    const errors = useAppErrors();
    return (
        <ErrorsProviderContext.Provider value={{
            errors,
        }}>
            {children}
        </ErrorsProviderContext.Provider>
    )
}

export const useAppErrors = () => {
    const { app } = useConfig();
    
    return app?.loopDomains((domain) => {
        return domain.getErrors()
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