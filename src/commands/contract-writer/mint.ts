import {Command, Flags} from '@oclif/core'
import {getERC20Minter} from '../../lib/ethers'
import {sleep} from '../../lib/sleep'

// @See Example: ERC-20 Contract
// https://docs.ethers.org/v5/api/contract/example/
// @See ERC-20 TOKEN STANDARD
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
export default class Mint extends Command {
  static description = 'call ERC20 mint()'

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-writer mint (./src/commands/contract-writer/mint.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -s or --spender
    spender: Flags.string({
      char: 's',
      description: 'spender address for mint',
      required: true,
    }),
    // -c or --contract
    contract: Flags.string({
      char: 'c',
      description: 'target contract address',
      required: true,
    }),

    // -a or --amount
    amount: Flags.string({char: 'a', description: 'amount. e.g. `123456` (USDC)', required: true}),
  }

  static args = {}

  // e.g. ./bin/dev contract-writer mint --spender 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const {flags} = await this.parse(Mint)

    this.log('run contract-writer mint')

    // validate
    if (process.env.PRIVATE_KEY === undefined) {
      this.log('PRIVATE_KEY env is required')
      return
    }

    // get contract
    const tokenContract = getERC20Minter(process.env.PRIVATE_KEY, flags.contract)

    // call mint()
    // this.log(await tokenContract.mint(flags.spender, parseUnits(flags.amount)))
    this.log(await tokenContract.mint(flags.spender, flags.amount))
    // sleep 10s
    await sleep(10_000)
    this.log(await tokenContract.balanceOf(flags.spender))
  }
}
