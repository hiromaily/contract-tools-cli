import {Command, Flags} from '@oclif/core'
import {getSGPool} from '../../lib/ethers'
// import {getEndpoint, encodePackedParams} from '../../lib/ethers'
import {ADDR_MAINNET} from '../../lib/configs'

export default class ChainPathIndexLookup extends Command {
  static description = 'call Endpoint estimateFees()'

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-reader chain-path-index-lookup
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -c or --chainid
    chainid: Flags.integer({char: 'c', default: 102, description: 'chainId', required: false}),
    // -p or --poolid
    poolid: Flags.integer({char: 'p', default: 2, description: 'poolId', required: false}),
  }

  static args = {}

  // e.g. ./bin/dev contract-reader chain-path-index-lookup --chainid 102 --poolid 2
  async run(): Promise<void> {
    const {flags} = await this.parse(ChainPathIndexLookup)

    this.log('run contract-reader chain-path-index-lookup')

    // get contract
    const poolContract = getSGPool(ADDR_MAINNET.ETH_SG_POOL_USDC)

    // call chainPathIndexLookup()
    this.log(await poolContract.chainPathIndexLookup(flags.chainid, flags.poolid))
  }
}
