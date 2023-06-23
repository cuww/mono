import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { CustomTheme } from '@/theme'
/** Apps */
import { AppProvider } from '@@/core/app';
import { useRouter } from 'next/router';
import { Apps } from '@/apps';
// import '@@/analytics/analytics.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ConfigProvider theme={CustomTheme}>
      <AppProvider apps={Apps} config={{
        analytics: (key: any, payload: any) => {
          console.log('[analytics]', key, payload, router.asPath);
        },
      }}>
        <Component {...pageProps} />
      </AppProvider>
    </ConfigProvider>
  )
}
