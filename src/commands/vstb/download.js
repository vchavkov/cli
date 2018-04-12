const {Command, flags} = require('@oclif/command')

class DownloadCommand extends Command {
  async run() {
    const {flags} = this.parse(DownloadCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/vchavkov/src/cli/src/commands/download.js`)
  }
}

DownloadCommand.description = `
Describe the command here
...
Extra documentation goes here
`

DownloadCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DownloadCommand
