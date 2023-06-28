import { Command } from '../base.mjs'
import { buildEnvConfig } from '../../../runtime-env/webpack.js';

export class BuildEnvCommand extends Command {
    cli = 'env:build';
    description = `Prepare env file with env variables`;

    handle() {
        return buildEnvConfig();
    }
}