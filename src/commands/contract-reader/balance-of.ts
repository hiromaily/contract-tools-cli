import { Command, Flags } from '@oclif/core';
import { getTokenContractAddress } from '../../lib/configs';
import { getERC20 } from '../../lib/ethers';
import { isNetworkType } from '../../lib/networks';
import { isTokenType } from '../../lib/tokens';

// @See Example: ERC-20 Contract
// https://docs.ethers.org/v5/api/contract/example/
// @See ERC-20 TOKEN STANDARD
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
export default class BalanceOf extends Command {
  static description = 'call ERC20 balanceOf()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-reader balanceOf (./src/commands/contract-reader/balanceOf.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -a or --addr
    addr: Flags.string({ char: 'a', description: 'Your wallet address', required: true }),
    // -t or --token
    token: Flags.string({
      char: 't',
      default: 'usdc',
      description: 'Token like usdc/usdt',
      required: false,
    }),
    // -n or --network
    network: Flags.string({
      char: 'n',
      default: 'mainnet',
      description: 'Network like mainnet/testnet',
      required: false,
    }),
  };

  static args = {};

  // e.g. ./bin/dev contract-reader balance-of --addr 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const { flags } = await this.parse(BalanceOf);

    this.log('run contract-reader balanceOf');

    // validate
    // if (process.env.PRIVATE_KEY === undefined) {
    //   this.log('PRIVATE_KEY env is required')
    //   return
    // }
    if (!isTokenType(flags.token)) {
      this.log('--token flag allows usdt or usdc');
      return;
    }

    if (!isNetworkType(flags.network)) {
      this.log('--token flag allows usdt or usdc');
      return;
    }

    // get contract
    const contractAddress = getTokenContractAddress(flags.token, flags.network);
    const tokenContract = getERC20(contractAddress);

    // call balanceOf()
    // this.log(await erc20.decimals());
    this.log(await tokenContract.balanceOf(flags.addr));
  }
}
