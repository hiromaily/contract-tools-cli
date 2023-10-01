import {Args, Command, Flags} from '@oclif/core'

export default class ContractCaller extends Command {
  static description = 'Call Contract function'

  static examples = [
    `$ cmd contract-caller --fn oclif
hello friend from oclif! (./src/commands/contract/index.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -f or --fn
    fn: Flags.string({char: 'f', description: 'Function name', required: true}),
  }

  // @See https://oclif.io/docs/args/
  static args = {
    subCmd: Args.string({description: 'invalid sub-command', required: true}),
  }

  // e.g. ./bin/dev contract-caller sub-cmd --fn fooBar
  async run(): Promise<void> {
    const {args, flags} = await this.parse(ContractCaller)

    this.log(`${args.subCmd} is not defined: ${flags.fn ?? ""}! (./src/commands/contract=caller/index.ts)`)
  }
}
