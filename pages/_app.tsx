import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { CustomTheme } from '@theme/index'
/** Apps */
import { AppProvider } from '@cuww/app/src/provider';
import { app } from '@bootstrap/app';
// import '@@/analytics/analytics.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={CustomTheme}>
      <AppProvider app={app}>
        <Component {...pageProps} />
      </AppProvider>
    </ConfigProvider>
  )
}
