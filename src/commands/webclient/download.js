const {Command, flags} = require('@oclif/command')

class DownloadCommand extends Command {
  async run() {

    const cli = require('heroku-cli-util')
    const co = require('co')

    const download = require('../lib/download')
    const repo = require('../lib/repo')
    const app = context.app

    let url = yield repo.getURL(app)
    let filename = context.args.filename || `${app}-repo.tgz`
    console.error(`Downloading repository to ${filename}`)
    yield download(url, filename, {progress: true})

    // const {flags} = this.parse(DownloadCommand)
    // const name = flags.name || 'world'
    // this.log(`hello ${name} from /home/vchavkov/src/cli/src/commands/download.js`)
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
