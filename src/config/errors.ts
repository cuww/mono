import React, { useMemo } from 'react';

export const Context = React.createContext({ name: 'Default' });

import { DomainErrors } from '@/apps/domain/interface';

export const Errors: any = {
    ...DomainErrors,
}

export const findError = (error: any) => {
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


