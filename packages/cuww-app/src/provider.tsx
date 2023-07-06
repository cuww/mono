import { ErrorsProvider } from "./errors";
import { ConfigProvider, useConfig } from "@cuww/config";
import { MessagesProvider } from "./messages";

export const AppBootProvider = ({ children }: any) => {
    const { app } = useConfig();
    app?.boot();
    return children;
}

export const AppProvider = ({ children, locale = 'en', app = {} }: any) => {
    return (
        <ConfigProvider app={app}>
            <AppBootProvider>
                <ErrorsProvider>
                    <MessagesProvider locale={locale} defaultLocale={locale}>
                        {children}
                    </MessagesProvider>
                </ErrorsProvider>
            </AppBootProvider>
        </ConfigProvider>
    )
}

// export type AppProviderProps = {
//     children: any;
//     apps: Application;
//     locale?: string;
//     config?: AppConfig;
// }