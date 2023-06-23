import { run, addCommand } from '../packages/core/cli/index.mjs';
import { HelloCommand } from './commands/hello.mjs';

addCommand(new HelloCommand())

run()