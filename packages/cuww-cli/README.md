# Cuww Configuration

Cuww CLI Management is a command-line tool designed to provide a convenient and efficient way to manage and interact with your Cuww framework applications. This CLI tool offers a range of commands for various tasks such as generating code, managing env variables, and much more. It aims to enhance your development workflow and boost productivity when working with Cuww applications.


## Features

- Provides a command-line interface for managing Cuww framework applications.
- Offers a wide range of commands for common development tasks.
- Simplifies code generation with built-in templates and scaffolding.

## Installation

```bash
npm install @cuww/cli
```

or yarn:

```bash
yarn add @cuww/cli
```

## Usage

Follow these steps:


### Add boot/registry to the project

Create `cli/index.mjs` in the project root

```typescript
import { boot } from '@cuww/cli';
import { HelloCommand } from './commands/hello.mjs';


boot((command) => {
    command(new HelloCommand())
})
```


### Create new command

Create `cli/commands/hello.mjs` in the project root


```javascript
import { Command } from '@cuww/cli'

export class HelloCommand extends Command {
    cli = 'hello';
}
```


### Update package.json

```
{
    ...
    "scripts": {
        "cuww": "node ./cli/index.mjs",
    }
}
```

### Run

```bash
yarn cuww help
```


## License

This project is licensed under the MIT License.