import { Command } from '../'
import { buildEnvConfig } from '@cuww/runtime-env/dist/next';

export class BuildEnvCommand extends Command {
    cli = 'env:build';
    description = `Prepare env file with env variables`;

    handle() {
        return buildEnvConfig();
    }
}