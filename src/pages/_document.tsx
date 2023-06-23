import { PublicRuntimeEnvProvider } from '@@/runtime-env'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <PublicRuntimeEnvProvider />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
