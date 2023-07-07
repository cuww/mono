import { boot } from '@cuww/cli';
import { HelloCommand } from './commands/hello.mjs';

boot((command) => {
    command(new HelloCommand())
})