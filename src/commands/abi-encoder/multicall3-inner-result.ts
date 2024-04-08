import {Command} from '@oclif/core'
import {ethers} from 'ethers'

export default class Multicall3InnerResult extends Command {
  static description = 'encode result of multicall3'

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-encoder multicall3-inner-result
`,
  ]

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    // data: Flags.string({char: 'd', description: 'hex string of data', required: false}),
  }

  static args = {}

  // e.g. ./bin/dev abi-encoder multicall3-inner-result --hex 0x...
  async run(): Promise<void> {
    // const {flags} = await this.parse(Multicall3InnerResult)

    this.log('run abi-encoder multicall3-inner-result')

    const abiCoder = ethers.AbiCoder.defaultAbiCoder()

    const result = abiCoder.encode(
      ['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'],
      [100n, 200n, 300n, 400n, 500n, 600n],
    )
    this.log('abiCoder.encode():', result)
  }
}
