import {Command, Flags} from '@oclif/core'
import {getPoolWriter} from '../../lib/ethers'
import {sleep} from '../../lib/sleep'

export default class StopTransfer extends Command {
  static description = 'execute stopTransfer of Pool contract()'

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-writer stop-transfer (./src/commands/contract-writer/stop-transfer.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -c or --contract
    contract: Flags.string({
      char: 'c',
      description: 'target contract address',
      required: true,
    }),
    // -n or --network
    network: Flags.string({
      char: 'n',
      description: 'rpc node address',
      required: true,
    }),
  }

  static args = {}

  // e.g. ./bin/dev contract-writer stop-transfer --contract 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const {flags} = await this.parse(StopTransfer)

    this.log('run contract-writer stop-transfer')

    // validate
    if (process.env.PRIVATE_KEY === undefined) {
      this.log('PRIVATE_KEY env is required')
      return
    }

    // TODO: better to retrieve account address from private key

    // get contract
    const poolContract = getPoolWriter(process.env.PRIVATE_KEY, flags.contract, flags.network)

    // execute setTransferStop()
    this.log(await poolContract.setTransferStop(true))
    // sleep 5s
    await sleep(5000)
    this.log(await poolContract.transferStop())
  }
}
