import chalk from 'chalk';
import { BuildEnvCommand } from './commands/env';
import { Command } from './command'

const args = process.argv


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

// usage represents the help guide
const usage = function () {
  const usageText = `
  @@core helps you manage frontend project

  usage:
    yarn cli <command>

    commands can be:
  `

  console.log(usageText)

  getCommands().map(command => {
    console.log(`  ${chalk.green(command.cli)} – ${command.description}`)
  });
}

// used to log errors to the console in red color
function errorLog(error: any) {
  console.log(chalk.red(error))
}

const start = () => {
  if (args[2] == 'help') {
    return usage()
  }

  let findCommands = getCommands().filter(command => {
    return command.cli == args[2]
  });

  if (findCommands.length == 0) {
    errorLog('invalid command passed')
    return usage()
  }

  return findCommands[0].handle(args.slice(3))
}

export const run = () => {
  console.log('')
  start();
  console.log('')
}