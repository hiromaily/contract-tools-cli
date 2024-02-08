import {Command, Flags} from '@oclif/core'
import {getPool} from '../../lib/ethers'
import {isNetworkType} from '../../lib/networks'
import {isTokenType} from '../../lib/tokens'

// @See Example: ERC-20 Contract
// https://docs.ethers.org/v5/api/contract/example/
// @See ERC-20 TOKEN STANDARD
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
export default class BalanceOf extends Command {
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

  // e.g. ./bin/dev contract-reader balance-of --addr 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const {flags} = await this.parse(BalanceOf)

    this.log('run contract-reader balanceOf')

    // validate
    // if (process.env.PRIVATE_KEY === undefined) {
    //   this.log('PRIVATE_KEY env is required')
    //   return
    // }
    // if (!isTokenType(flags.token)) {
    //   this.log('--token flag allows usdt or usdc')
    //   return
    // }

    // if (!isNetworkType(flags.network)) {
    //   this.log('--token flag allows usdt or usdc')
    //   return
    // }

    // get contract
    //const contractAddress = getTokenContractAddress(flags.token, flags.network)
    //const contractAddress = '0x31612177B6eed0725a384d56161CDc37E723aC4a';
    const poolContract = getPool(flags.contract, flags.network)

    // call balanceOf()
    // this.log(await erc20.decimals());

    this.log(await poolContract.poolId())
    this.log(await poolContract.poolBalance())
  }
}
