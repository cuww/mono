import { Command } from '@cuww/cli'

export class HelloCommand extends Command {
    cli = 'hello';
    handle() {
        console.log('Hello World')
    }
}