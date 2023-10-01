import { Command, Flags } from '@oclif/core';
import { getERC20Writer } from '../../lib/ethers';
import { getTokenContractAddress } from '../../lib/configs';
import { isTokenType } from '../../lib/tokens';
import { isNetworkType } from '../../lib/networks';
import { parseUnits } from 'ethers';

// @See Example: ERC-20 Contract
// https://docs.ethers.org/v5/api/contract/example/
// @See ERC-20 TOKEN STANDARD
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
export default class Approve extends Command {
  static description = 'call ERC20 approve()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-reader balanceOf (./src/commands/contract-reader/balanceOf.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -s or --spender
    spender: Flags.string({
      char: 's',
      description: 'spender address for approve',
      required: true,
    }),
    // -a or --amount
    amount: Flags.string({ char: 'a', description: 'amount. e.g. `0.01` (ETH)', required: true }),
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
      default: 'testnet',
      description: 'Network like mainnet/testnet',
      required: false,
    }),
  };

  static args = {};

  // e.g. ./bin/dev contract-writer balance-of --spender 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const { flags } = await this.parse(Approve);

    this.log('run contract-writer approve');

    // validate
    if (process.env.PRIVATE_KEY === undefined) {
      this.log('PRIVATE_KEY env is required');
      return;
    }

    if (!isTokenType(flags.token)) {
      this.log('--token flag allows usdt or usdc');
      return;
    }

    if (!isNetworkType(flags.network)) {
      this.log('--token flag allows usdt or usdc');
      return;
    }
    // TODO: amount must be number

    // get contract
    const contractAddress = getTokenContractAddress(flags.token, flags.network);
    const tokenContract = getERC20Writer(process.env.PRIVATE_KEY, contractAddress);

    // call approve()
    this.log(await tokenContract.approve(flags.spender, parseUnits(flags.amount)));
  }
}