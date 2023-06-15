import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { CustomTheme } from '@/theme'
import { Context } from '@/config/errors'
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '@/config/messages';

export default function App({ Component, pageProps }: AppProps) {
  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
  return (
    <ConfigProvider theme={CustomTheme}>
      <Context.Provider value={contextValue}>
        <IntlProvider messages={messages} locale="fr" defaultLocale="en">
          <Component {...pageProps} />
        </IntlProvider>
      </Context.Provider>
    </ConfigProvider>
  )
}
