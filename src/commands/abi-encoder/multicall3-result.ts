import { Command, Flags } from '@oclif/core';
import { ethers } from 'ethers';

export default class Multicall3Result extends Command {
  static description = 'encode result of multicall3';

  static examples = [
    `<%= config.bin %> <%= command.id %>
abi-encoder multicall3-result (./src/commands/abi-encoder/result.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    data: Flags.string({ char: 'd', description: 'hex string of data', required: false }),
  };

  static args = {};

  // e.g. ./bin/dev abi-encoder multicall3-result --hex 0x...
  async run(): Promise<void> {
    const { flags } = await this.parse(Multicall3Result);

    this.log(
      'run abi-encoder multicall3-inner-result! (./src/commands/abi-encoder/multicall3-result.ts)',
    );

    // validate
    let data =
      '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c0000000000000000000000000000000000000000000000000000000000001898000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027100000000000000000000000000000000000000000000000000000000000000000';
    if (flags.data !== undefined) {
      data = flags.data;
    }

    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const result = abiCoder.encode(['tuple(bool,bytes)[]'], [[[true, data]]]);
    this.log('abiCoder.encode():', result);
  }
}
