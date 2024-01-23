import {Command, Flags} from '@oclif/core'
import {FeeLibraryV07ABI} from '../../lib/abi'
import {getABIInterface} from '../../lib/ethers'

export default class Multicall3InnerResult extends Command {
  static description = 'decode result of multicall3'

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-decoder multicall3-inner-result
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
    const {flags} = await this.parse(Multicall3InnerResult)

    this.log('run abi-decoder multicall3-inner-result')

    // validate
    let data
      = '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c0000000000000000000000000000000000000000000000000000000000001898000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027100000000000000000000000000000000000000000000000000000000000000000'
    if (flags.data !== undefined) {
      data = flags.data
    }

    // get contract
    // Create a contract interface from the ABI
    const contractInterface = getABIInterface(FeeLibraryV07ABI)

    // Decode the result by getFees using the ABI
    const decodedResult = contractInterface.decodeFunctionResult('getFees', data)
    this.log('decodedParameters:', decodedResult)
  }
}
