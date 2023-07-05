# Cuww Configuration

Cuww Configuration Wrapper is a lightweight utility library designed to simplify the process of accessing and working with the application configuration in the Cuww framework. It provides a few simple wrappers that enable easy access to the configuration values in a centralized manner.


## Features

- Simplifies accessing the application configuration in Cuww.
- Provides a centralized way to retrieve configuration values.
- Offers a clean and intuitive API for working with the configuration.

## Installation

```bash
npm install @cuww/config
```

or yarn:

```bash
yarn add @cuww/config
```

## Usage

Follow these steps:

### Components

```javascript
import { useConfig } from '@cuww/config'

export const Component = () => {
    const config = useConfig();
}
```

### Anywhere in the app

```typescript
import { getConfig } from '@cuww/config'

export const getUserService = () => {
    const config = getConfig();
    // ...
}
```

## License

This project is licensed under the MIT License.