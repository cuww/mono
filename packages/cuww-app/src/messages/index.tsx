import { useConfig } from "@cuww/config";
import { IntlProvider } from "react-intl";

export const MessagesProvider = ({ children, locale }: any) => {
    const messages = useAppMessages();
    return (
        <IntlProvider locale={locale} defaultLocale={locale} messages={messages}>
            {children}
        </IntlProvider>
    )
}

export const useAppMessages = () => {
    const { app } = useConfig();
    return app?.loopDomains((domain) => {
        return flatten(domain.getMessages())
    }).flat().reduce((acc: any, cur: any) => {
        return {
            ...acc,
            ...cur,
        }
    }, {});
}

export const flatten = (messages: any) => {
    var res: any = {};

    function handler(obj: any, current?: any) {
        for (var key in obj) {
            var value = obj[key];
            var newKey = (current ? current + "." + key : key);  // joined key with dot
            if (value && typeof value === "object") {
                handler(value, newKey);  // it's a nested object, so do it again
            } else {
                res[newKey] = value;  // it's not an object, so set the property
            }
        }
    }

    handler(messages);

    return res;
}