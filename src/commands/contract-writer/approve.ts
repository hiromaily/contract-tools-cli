import {Command, Flags} from '@oclif/core'
import {parseUnits} from 'ethers'
import {getERC20Writer} from '../../lib/ethers'

// @See Example: ERC-20 Contract
// https://docs.ethers.org/v5/api/contract/example/
// @See ERC-20 TOKEN STANDARD
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
export default class Approve extends Command {
  static description = 'call ERC20 approve()'

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-writter approve (./src/commands/contract-writer/approve.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -s or --spender
    spender: Flags.string({
      char: 's',
      description: 'spender address for approve',
      required: true,
    }),
    // -a or --amount
    amount: Flags.string({char: 'a', description: 'amount. e.g. `0.01` (ETH)', required: true}),
    // -n or --network
    network: Flags.string({
      char: 'n',
      description: 'rpc node address',
      required: true,
    }),
    // -c or --contract
    contract: Flags.string({
      char: 'c',
      description: 'target contract address',
      required: true,
    }),
  }

  static args = {}

  // e.g. ./bin/dev contract-writer balance-of --spender 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const {flags} = await this.parse(Approve)

    this.log('run contract-writer approve')

    // validate
    if (process.env.PRIVATE_KEY === undefined) {
      this.log('PRIVATE_KEY env is required')
      return
    }

    // get contract
    const tokenContract = getERC20Writer(process.env.PRIVATE_KEY, flags.contract, flags.network)

    // call approve()
    this.log(await tokenContract.approve(flags.spender, parseUnits(flags.amount)))
  }
}
