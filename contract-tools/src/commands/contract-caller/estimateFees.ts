import {Command, Flags} from '@oclif/core'

export default class EstimateFees extends Command {
  static description = 'call estimateFees()'

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-caller estimateFees (./src/commands/contract-caller/estimateFees.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -f or --fn
    fn: Flags.string({char: 'f', description: 'Function name', required: true}),
  }

  static args = {}

  // e.g. ./bin/dev contract-caller estimateFees --fn fooBar
  async run(): Promise<void> {
    this.log('run estimateFees! (./src/commands/contract-caller/estimateFees.ts)')
  }
}
