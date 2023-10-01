import { Command, Flags } from '@oclif/core';
import { getSGPool } from '../../lib/ethers';
// import {getEndpoint, encodePackedParams} from '../../lib/ethers'
import { ADDR_MAINNET } from '../../lib/configs';

export default class ChainPathIndexLookup extends Command {
  static description = 'call Endpoint estimateFees()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-caller chain-path-index-lookup (./src/commands/contract-caller/chain-path-index-lookup.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -c or --chainid
    chainid: Flags.integer({ char: 'c', description: 'chainId', required: true }),
    // -p or --poolid
    poolid: Flags.integer({ char: 'c', description: 'poolId', required: true }),
  };

  static args = {};

  // e.g. ./bin/dev contract-caller chain-path-index-lookup --chainid 102
  async run(): Promise<void> {
    const { flags } = await this.parse(ChainPathIndexLookup);

    this.log(
      'run contract-caller chain-path-index-lookup! (./src/commands/contract-caller/chain-path-index-lookup.ts)',
    );
    // [Debug]
    // this.log(flags.chainid.toString());

    // validate
    // if (flags.chainid === undefined) {
    //   this.log('--chainid flag for chainId is required');
    //   return;
    // }

    // get contract
    const poolContract = getSGPool(ADDR_MAINNET.ETH_SG_POOL_USDC);

    // parameter
    const chainID = flags.chainid ?? 102;
    const poolID = flags.poolid ?? 2;

    // call chainPathIndexLookup()
    this.log(await poolContract.chainPathIndexLookup(chainID, poolID));
  }
}
