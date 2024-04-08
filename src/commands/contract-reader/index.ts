import {Args, Command} from '@oclif/core'
import * as dotenv from 'dotenv'
dotenv.config()

export default class ContractReader extends Command {
  static description = 'Read Contract function'

  static examples = [
    `$ cmd contract-reader foobar
foobar is not defined
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {}

  // @See https://oclif.io/docs/args/
  static args = {
    subCmd: Args.string({description: 'invalid sub-command', required: true}),
  }

  // e.g. ./bin/dev contract-reader sub-cmd
  async run(): Promise<void> {
    const {args} = await this.parse(ContractReader)

    this.log(`${args.subCmd} is not defined`)
  }
}
