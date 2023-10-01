import { Command, Flags } from '@oclif/core';
import { getEndpoint } from '../../lib/ethers';
// import {getEndpoint, encodePackedParams} from '../../lib/ethers'
import { ADDR_MAINNET } from '../../lib/configs';

export default class EstimateFees extends Command {
  static description = 'call Endpoint estimateFees()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-caller estimateFees
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -c or --chainid
    chainid: Flags.integer({ char: 'c', default: 102, description: 'chainId', required: false }),
  };

  static args = {};

  // e.g. ./bin/dev contract-caller estimate-fees --chainid 102
  async run(): Promise<void> {
    const { flags } = await this.parse(EstimateFees);

    this.log('run contract-caller estimateFees');

    // get contract
    const endpointContract = getEndpoint(ADDR_MAINNET.ETH_ENDPOINT);

    // parameter
    const chainID = flags.chainid;
    const ua = '0x0000000000000000000000000000000000000000';
    const payload = '0x';
    const payInZero = false;
    // const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
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
    this.log(
      await endpointContract.estimateFees(chainID, ua, payload, payInZero, fmtAdapterParams),
    );
  }
}
