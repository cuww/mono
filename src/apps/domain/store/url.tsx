import { SyncStorage } from 'jotai/vanilla/utils/atomWithStorage'

export const UrlStorage = (defaultValue: any): [any, SyncStorage<any>] => {
    return [defaultValue, {
        getItem: (key: string) => {
            const url = window.location.href
            var r = new URL(url)
            return r.searchParams.get(key) || defaultValue
        },
        setItem: (key: string, value: any) => {
            if (window.history.pushState) {
                let searchParams = new URLSearchParams(window.location.search);
                searchParams.set(key, value);
                let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                window.history.pushState({ path: newurl }, '', newurl);
            }
        },
        removeItem: (key: string) => {
            const url = window.location.href
            var r = new URL(url)
            r.searchParams.delete(key)
            const newUrl = r.href
            window.history.pushState({ path: newUrl }, '', newUrl)
        },
        subscribe: (key: string, callback: (value: any) => void): any => {
    
        },
    }];
}