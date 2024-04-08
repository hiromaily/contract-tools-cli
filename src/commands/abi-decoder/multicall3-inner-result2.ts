import {Command, Flags} from '@oclif/core'
import {ToEscrowABI} from '../../lib/abi'
import {getABIInterface} from '../../lib/ethers'

export default class Multicall3InnerResult2 extends Command {
  static description = 'decode result of multicall3'

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-decoder multicall3-inner-result2
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    data: Flags.string({char: 'd', description: 'hex string of data', required: false}),
  }

  static args = {}

  // e.g. ./bin/dev abi-decoder multicall3-inner-result --hex 0x...
  async run(): Promise<void> {
    const {flags} = await this.parse(Multicall3InnerResult2)

    this.log('run abi-decoder multicall3-inner-result')

    // validate
    let data
      = '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001'
    if (flags.data !== undefined) {
      data = flags.data
    }

    // get contract
    // Create a contract interface from the ABI
    const contractInterface = getABIInterface(ToEscrowABI)

    // Decode the result by getFees using the ABI
    const decodedResult = contractInterface.decodeFunctionResult('acceptedDstChainIds', data)
    this.log('decodedParameters:', decodedResult)
  }
}
