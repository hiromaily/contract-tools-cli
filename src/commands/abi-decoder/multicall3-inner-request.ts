import { Command, Flags } from '@oclif/core';
import { getABIInterface } from '../../lib/ethers';
import { FeeLibraryV07ABI } from '../../lib/abi';

export default class Multicall3InnerRequest extends Command {
  static description = 'decode request of multicall3';

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-decoder multicall3-inner-request (./src/commands/abi-decoder/inner-request.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    data: Flags.string({ char: 'd', description: 'hex string of data', required: false }),
  };

  static args = {};

  // e.g. ./bin/dev abi-decoder multicall3-inner-request --hex 0x...
  async run(): Promise<void> {
    const { flags } = await this.parse(Multicall3InnerRequest);

    this.log(
      'run abi-decoder multicall3-inner-request! (./src/commands/abi-decoder/multicall3-inner-request.ts)',
    );
    // [Debug]
    // this.log(flags.data);

    // validate
    let data =
      '0x1ab62430000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000066000000000000000000000000c1f3a7613c70bbf1bd8c4924192bd75451fe0dd10000000000000000000000000000000000000000000000000000000000989680';
    if (flags.data !== undefined) {
      data = flags.data;
    }

    // get contract
    // Create a contract interface from the ABI
    const contractInterface = getABIInterface(FeeLibraryV07ABI);

    // Get the method ID from the data
    const methodId = data.slice(0, 10);
    this.log('methodId:', methodId); // methodId: 0x1ab62430

    // Find the function signature from the method ID
    const signature = contractInterface.getFunction(methodId)?.format();
    this.log('signature:', signature);

    if (signature === undefined) {
      this.log(`signature is not found by methodId: ${methodId}`);
      return;
    }
    // Get the encoded parameters from the data
    // const encodedParameters = '0x' + data.slice(10);
    // console.log("encodedParameters:", encodedParameters);

    // Decode the parameters using the ABI
    const decodedParameters = contractInterface.decodeFunctionData(signature, data);
    this.log('decodedParameters:', decodedParameters);
  }
}
