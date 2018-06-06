import {Command, flags} from '@oclif/command'

export default class Show extends Command {
  static description = 'Show encoded file'

  static examples = [
    `$ psc show [FILE] [PASSWORD]
  =≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠
  Key: gg@devin.im Value: gg-devin.im
  =≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value(-n, --password=VALUE)
    password: flags.string({char: 'p', description: 'password for decode'}),
    // flag with a value(-n, --name=VALUE)
    file: flags.string({char: 'f', description: 'file for decode'}),
  }

  static args = [{name: 'file'}, {name: 'password'}]

  async run() {
    const {args, flags} = this.parse(Show)

    this.log(`Flags: ${flags.password} ${flags.file}
    Args: ${args.password} ${args.file}`)
  }
}
