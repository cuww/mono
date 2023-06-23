export class Command {
    cli = 'task:empty';
    description = 'Empty command';
    options = [];

    handle(args) {
        console.log('Empty command', args);
    }
}
