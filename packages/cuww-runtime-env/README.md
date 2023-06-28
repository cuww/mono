# Runtime Environments for NextJs

Runtime Environment Variables for frontend applications build with NextJs. It simplifies the process of storing and managing environment variables. Forget about the hassle of storing and configuring CI/CD pipelines specifically for frontend apps, simply use kubernetes, etc.

## Features

- **Cloud-native**: Make you frontend application Cloud-native: store and manage environment variables in a centralized solution like Kubernetes.
- **Simplified configuration**: Easily configure runtime environment variables for your Next.js frontend applications.
- **Seamless integration**: Integrate into your existing Next.js projects with only 2 line of code.
- **Enhanced security**: Ensure secure handling of sensitive information by storing it in a centralized and protected environment. Keep using `NEXT_PUBLIC_*` as you get used to.
- **Effortless CI/CD**: Eliminate the need for separate CI/CD configuration for frontend apps and simplify your deployment process.

## Installation

You can install the `@cuww/runtime-env` package using npm:

```bash
npm install @cuww/runtime-env
```

or yarn:

```bash
yarn add @cuww/runtime-env
```

## Usage

Follow these steps:

### Configure next.config.js

```javascript
const { withRuntimeEnv } = require('@cuww/runtime-env/dist/next');

const config = {
  ...
}

module.exports = withRuntimeEnv(config)
```

### Configure _document.tsx

Add `<PublicRuntimeEnvProvider/>` as in the example

```typescript
import { PublicRuntimeEnvProvider } from '@cuww/runtime-env'
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
```

### Work with environment variables

Use `env` function to get variables value.
Use `NEXT_PUBLIC_` prefix if you want to use this variable in runtime and get access from the client (not server variable).

```
import { env } from '@cuww/runtime-env'

// Public variable available at a runtime and for everyone (not secure)
env('NEXT_PUBLIC_VARIABLE_NAME', 'DefaultValue')

// Public variable available at a runtime only for server
env('VARIABLE_NAME', 'DefaultValue')
```

## License

This project is licensed under the MIT License.