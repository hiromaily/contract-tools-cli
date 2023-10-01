import { Command, Flags } from '@oclif/core';
import { getABIInterface } from '../../lib/ethers';
import { Multicall3ABI } from '../../lib/abi';

export default class Multicall3Result extends Command {
  static description = 'decode result of multicall3';

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-decoder multicall3-result
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    data: Flags.string({ char: 'd', description: 'hex string of data', required: false }),
  };

  static args = {};

  // e.g. ./bin/dev abi-decoder multicall3-result --hex 0x...
  async run(): Promise<void> {
    const { flags } = await this.parse(Multicall3Result);

    this.log('run abi-decoder multicall3-result');
    // [Debug]
    // this.log(flags.data)

    // validate
    let data =
      '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c0000000000000000000000000000000000000000000000000000000000001898000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027100000000000000000000000000000000000000000000000000000000000000000';
    if (flags.data !== undefined) {
      data = flags.data;
    }

    // get contract
    // Create a contract interface from the ABI
    const contractInterface = getABIInterface(Multicall3ABI);

    // Decode the result by aggregate3 using the ABI
    const decodedResult = contractInterface.decodeFunctionResult('aggregate3', data);
    this.log('decodedParameters:', decodedResult);
  }
}
