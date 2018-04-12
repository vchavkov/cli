const {Command, flags} = require('@oclif/command')


class DownloadCommand extends Command {
  async run() {

    const download = require('../lib/download')

    let url = "http://alv-build-store.minervanetworks.com/~qa/builds/WebClient/2.4.0-N/WebClient.2.4.0.2.68.R.WC_CL177071.KS_CL163578.cva/WebClient-2.4.0.2.68.R.WC_CL177071.KS_CL163578.cva-RPM.iso"
    // let filename = context.args.filename || `${app}-repo.tgz`
    let filename = "WebClient-2.4.0.2.68.R.WC_CL177071.KS_CL163578.cva-RPM.iso"
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
