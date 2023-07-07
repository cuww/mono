import chalk from 'chalk';
import { BuildEnvCommand } from './commands/env';
import { Command } from './command'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


let commands: Command[] = [
  new BuildEnvCommand(),
]

export {
  Command,
}

export const getCommands = () => {
  return commands.sort((a, b) => a.cli.localeCompare(b.cli));
}

export const addCommand = (command: Command) => {
  commands.push(command);
}

const start = () => {
  let instance = yargs(hideBin(process.argv))
    .scriptName('')
    .usage('@cuww/cli is designed to provide a cool way to manage your applications')

  getCommands().map(command => {
    instance.command(
      chalk.green(command.cli),
      command.description
    )
    instance.command(
      command.cli,
      false,
      () => {},
      command.handle
    )
  })
  instance
    .demandCommand(1)
    .parse()
    
  // if (args[2] == 'help') {
  //   return usage()
  // }

  // let findCommands = getCommands().filter(command => {
  //   return command.cli == args[2]
  // });

  // if (findCommands.length == 0) {
  //   errorLog('invalid command passed')
  //   return usage()
  // }

  // return findCommands[0].handle(args.slice(3))
}

export type bootTemp = (addCmd: typeof addCommand) => void;

export const boot = (bootTemp: bootTemp) => {
  console.log('')
  bootTemp(addCommand);
  start();
  console.log('')
}