import { Args, Command } from '@oclif/core';
import * as dotenv from 'dotenv';
dotenv.config();

export default class ABIDecoder extends Command {
  static description = 'Decode ABI';

  static examples = [
    `$ cmd abi-decoder foobar
foobar is not defined: (./src/commands/abi-decoder/index.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -f or --fn
    // fn: Flags.string({char: 'f', description: 'Function name', required: true}),
  };

  // @See https://oclif.io/docs/args/
  static args = {
    subCmd: Args.string({ description: 'invalid sub-command', required: true }),
  };

  // e.g. ./bin/dev abi-decoder sub-cmd
  async run(): Promise<void> {
    const { args, flags } = await this.parse(ABIDecoder);

    this.log(
      `${args.subCmd} is not defined: ${flags.fn ?? ''}! (./src/commands/contract=caller/index.ts)`,
    );
  }
}
