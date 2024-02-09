import { Command, Flags } from '@oclif/core';
import { ethers } from 'ethers';
import { getProvider } from '../../lib/ethers/provider';
import { getSigner } from '../../lib/ethers/wallet';

export default class SendTransfer extends Command {
  static description = 'call send-transfer()';

  static examples = [
    `<%= config.bin %> <%= command.id %>
contract-writer send-transfer (./src/commands/contract-writer/send-transfer.ts)
`,
  ];

  // @See https://oclif.io/docs/flags
  static flags = {
    // -t or --to
    to: Flags.string({
      // char: 't',
      description: 'to account address',
      required: true,
    }),
    // -a or --amount
    amount: Flags.string({ char: 'a', description: 'native amount (ETH)', required: true }),
    // -n or --network
    network: Flags.string({
      char: 'n',
      description: 'rpc node address',
      required: true,
    }),
  };

  static args = {};

  // e.g. ./bin/dev contract-writer send-transfer --account 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1
  async run(): Promise<void> {
    const { flags } = await this.parse(SendTransfer);

    this.log('run contract-writer send-transfer');

    // validate
    if (process.env.PRIVATE_KEY === undefined) {
      this.log('PRIVATE_KEY env is required');
      return;
    }

    // TODO: better to retrieve account address from private key

    const provider = getProvider(flags.network);
    const signer = getSigner(process.env.PRIVATE_KEY, provider);

    const tx = {
      to: flags.to,
      value: ethers.parseUnits(`${flags.amount}`, 'ether'),
    };

    const receipt = await signer.sendTransaction(tx);
    console.log(receipt);
  }
}
