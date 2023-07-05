import { run, addCommand } from '@cuww/cli';
import { HelloCommand } from './commands/hello.mjs';

addCommand(new HelloCommand())

run()