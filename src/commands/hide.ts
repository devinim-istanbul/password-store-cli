import {Command, flags} from '@oclif/command'

export default class Hide extends Command {
  static description = 'Encode file'

  static examples = [
    `$ psc hide [FILE] [PASSWORD]
  WGHrUIAmTDcKCXtQPN9mrPzAlPRwF1F1tshu9JmL+t/qO5WkSp7QiA==
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value(-n, --password=VALUE)
    password: flags.string({char: 'p', description: 'password for encode'}),
    // flag with a value(-n, --name=VALUE)
    file: flags.string({char: 'f', description: 'file for encode'}),
  }

  static args = [{name: 'file'}, {name: 'password'}]

  async run() {
    const {args, flags} = this.parse(Hide)

    this.log(`Flags: ${flags.password} ${flags.file}
    Args: ${args.password} ${args.file}. Encode file`)
  }
}
