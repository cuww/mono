export class Command {
    cli = 'task:empty';
    description = 'Empty command';
    options = [];
  
    handle(args: any) {
        console.log('Empty command', args);
    }
  }
  