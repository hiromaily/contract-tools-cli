import {Command, Flags} from '@oclif/core'
import {parseUnits} from 'ethers'
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
contract-reader balanceOf (./src/commands/contract-reader/balanceOf.ts)
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
    // -a or --amount
    amount: Flags.string({char: 'a', description: 'amount. e.g. `0.01` (ETH)', required: true}),
  }

  static args = {}

  // e.g. ./bin/dev contract-writer balance-of --spender 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const {flags} = await this.parse(Mint)

    this.log('run contract-writer mint')

    // validate
    if (process.env.PRIVATE_KEY === undefined) {
      this.log('PRIVATE_KEY env is required')
      return
    }

    // TODO: amount must be number

    // get contract
    const contractAddress = '0x2D1deF28042b3c7931690dC59aEB1DD4a6Bed164' // localnet eth USDC
    const tokenContract = getERC20Minter(process.env.PRIVATE_KEY, contractAddress)

    // call mint()
    this.log(await tokenContract.mint(flags.spender, parseUnits(flags.amount)))
    // sleep 10s
    await sleep(10_000)
    this.log(await tokenContract.balanceOf(flags.spender))
  }
}
