import { Command, Flags } from '@oclif/core';
import { getERC20 } from '../../lib/ethers';
import { ADDR_MAINNET } from '../../lib/configs';

export default class BalanceOf extends Command {
  static description = 'call ERC20 balanceOf()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-caller balanceOf (./src/commands/contract-caller/balanceOf.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -a or --addr
    addr: Flags.string({ char: 'a', description: 'Your wallet address', required: true }),
  };

  static args = {};

  // e.g. ./bin/dev contract-caller balanceOf --addr 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const { flags } = await this.parse(BalanceOf);

    this.log('run balanceOf! (./src/commands/contract-caller/balanceOf.ts)');
    // [Debug]
    //this.log(flags.addr);

    // validate
    // if (process.env.PRIVATE_KEY === undefined) {
    //   this.log('PRIVATE_KEY env is required')
    //   return
    // }
    if (flags.addr === undefined) {
      this.log('--addr flag for your wallet address is required');
      return;
    }

    // get contract
    const erc20 = getERC20(ADDR_MAINNET.USDC);

    // call balanceOf()
    // this.log(await erc20.decimals());
    this.log(await erc20.balanceOf(flags.addr));
  }
}
