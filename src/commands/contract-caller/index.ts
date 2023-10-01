import {Args, Command, Flags} from '@oclif/core'
import * as dotenv from 'dotenv'
dotenv.config()

export default class ContractCaller extends Command {
  static description = 'Call Contract function'

  static examples = [
    `$ cmd contract-caller foobar
foobar is not defined: (./src/commands/contract-caller/index.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -a or --addr
    addr: Flags.string({char: 'a', description: 'Your wallet address', required: true}),
    // -c or --chainid
    chainid: Flags.integer({char: 'c', description: 'chainId', required: true}),
  }

  // @See https://oclif.io/docs/args/
  static args = {
    subCmd: Args.string({description: 'invalid sub-command', required: true}),
  }

  // e.g. ./bin/dev contract-caller sub-cmd
  async run(): Promise<void> {
    const {args, flags} = await this.parse(ContractCaller)

    this.log(
      `${args.subCmd} is not defined: ${flags.fn ?? ''}! (./src/commands/contract=caller/index.ts)`,
    )
  }
}
