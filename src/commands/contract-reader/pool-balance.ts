import {Command, Flags} from '@oclif/core'
import {getPool} from '../../lib/ethers'

// @See Example: ERC-20 Contract
// https://docs.ethers.org/v5/api/contract/example/
// @See ERC-20 TOKEN STANDARD
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
export default class PoolBalanceOf extends Command {
  static description = 'call ERC20 balanceOf()'

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-reader balanceOf (./src/commands/contract-reader/balanceOf.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -c or --contract
    contract: Flags.string({
      char: 'c',
      default: '',
      description: 'pool contract address',
      required: true,
    }),
    // -n or --network
    network: Flags.string({
      char: 'n',
      default: 'http://127.0.0.1:8545',
      description: 'rpc address',
      required: true,
    }),
  }

  static args = {}

  // e.g. ./bin/dev contract-reader pool-balance --contract 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1 $(BNB_USDC_POOL_ADDR) --network $(NETWORK_BNB)
  async run(): Promise<void> {
    const {flags} = await this.parse(PoolBalanceOf)

    this.log('run contract-reader balanceOf')

    // get contract
    const poolContract = getPool(flags.contract, flags.network)

    this.log(await poolContract.poolId())
    this.log(await poolContract.poolBalance())
  }
}
