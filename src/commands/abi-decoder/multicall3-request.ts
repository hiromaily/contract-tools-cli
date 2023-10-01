import {Command, Flags} from '@oclif/core'
import {getABIInterface} from '../../lib/ethers'
import {Multicall3ABI} from '../../lib/abi'

export default class Multicall3Request extends Command {
  static description = 'decode request of multicall3'

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-decoder multicall3-request (./src/commands/abi-decoder/request.ts)
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    data: Flags.string({char: 'd', description: 'hex string of data', required: false}),
  }

  static args = {}

  // e.g. ./bin/dev abi-decoder multicall3-request --hex 0x...
  async run(): Promise<void> {
    const {flags} = await this.parse(Multicall3Request)

    this.log(
      'run abi-decoder multicall3-request! (./src/commands/abi-decoder/multicall3-request.ts)',
    )
    // [Debug]
    // this.log(flags.data);

    // validate
    let data
      = '0x82ad56cb0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000008c3085d9a554884124c998cdb7f6d7219e9c1e6f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a41ab62430000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000066000000000000000000000000c1f3a7613c70bbf1bd8c4924192bd75451fe0dd1000000000000000000000000000000000000000000000000000000000098968000000000000000000000000000000000000000000000000000000000'
    if (flags.data !== undefined) {
      data = flags.data
    }

    // get contract
    // Create a contract interface from the ABI
    const contractInterface = getABIInterface(Multicall3ABI)

    // Get the method ID from the data
    const methodId = data.slice(0, 10)
    this.log('methodId:', methodId) // methodId: 0x82ad56cb

    // Find the function signature from the method ID
    const signature = contractInterface.getFunction(methodId)?.format()
    this.log('signature:', signature) // signature: aggregate3((address,bool,bytes)[])

    if (signature === undefined) {
      this.log(`signature is not found by methodId: ${methodId}`)
      return
    }
    // Get the encoded parameters from the data
    // const encodedParameters = '0x' + data.slice(10);
    // console.log("encodedParameters:", encodedParameters);

    // Decode the parameters using the ABI
    const decodedParameters = contractInterface.decodeFunctionData(signature, data)
    this.log('decodedParameters:', decodedParameters)
  }
}
