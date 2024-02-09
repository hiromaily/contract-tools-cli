import { Args, Command, Flags } from '@oclif/core';
import * as dotenv from 'dotenv';
dotenv.config();

export default class ABIEncoder extends Command {
  static description = 'Encode ABI';

  static examples = [
    `$ cmd abi-encoder foobar
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
    const { args } = await this.parse(ABIEncoder);

    this.log(`${args.subCmd} is not defined`);
  }
}
