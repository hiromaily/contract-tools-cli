import { Args, Command, Flags } from '@oclif/core';
import * as dotenv from 'dotenv';
dotenv.config();

export default class ABIDecoder extends Command {
  static description = 'Decode ABI';

  static examples = [
    `$ cmd abi-decoder foobar
foobar is not defined
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -d or --data
    data: Flags.string({ char: 'd', description: 'hex string of data', required: false }),
  };

  // @See https://oclif.io/docs/args/
  static args = {
    subCmd: Args.string({ description: 'invalid sub-command', required: true }),
  };

  // e.g. ./bin/dev abi-decoder sub-cmd
  async run(): Promise<void> {
    const { args } = await this.parse(ABIDecoder);

    this.log(`${args.subCmd} is not defined`);
  }
}
