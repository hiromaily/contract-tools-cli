import { Command, Flags } from '@oclif/core';
import { getEndpoint, encodePackedParams } from '../../lib/ethers';
import { ADDR_MAINNET } from '../../lib/configs';

export default class EstimateFees extends Command {
  static description = 'call Endpoint estimateFees()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-caller estimateFees (./src/commands/contract-caller/estimateFees.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -c or --chainid
    chainid: Flags.integer({ char: 'c', description: 'chainId', required: true }),
  };

  static args = {};

  // e.g. ./bin/dev contract-caller estimateFees --chainid 102
  async run(): Promise<void> {
    const { flags } = await this.parse(EstimateFees);

    this.log('run estimateFees! (./src/commands/contract-caller/estimateFees.ts)');
    // [Debug]
    //this.log(flags.chainid.toString());

    // validate
    if (flags.chainid === undefined) {
      this.log('--chainid flag for chainId is required');
      return;
    }

    // get contract
    const endpoint = getEndpoint(ADDR_MAINNET.ETH_ENDPOINT);

    // parameter
    const chainID = 102;
    const ua = '0x0000000000000000000000000000000000000000';
    const payload = '0x';
    const payInZero = false;
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
    // const adapterParams = {
    //   [1]: { types: ['uint16', 'uint256'], values: [1, 200000] },
    //   [2]: {
    //     types: ['uint16', 'uint256', 'uint256', 'address'],
    //     values: [2, 200000, 100000, ZERO_ADDRESS],
    //   },
    // };
    // const fmtAdapterParams = encodePackedParams(
    //   adapterParams[2].types.slice(0, -1),
    //   adapterParams[2].values.slice(0, -1),
    // );
    const fmtAdapterParams = '0x';

    // call estimateFees()
    this.log(await endpoint.estimateFees(chainID, ua, payload, payInZero, fmtAdapterParams));
  }
}
