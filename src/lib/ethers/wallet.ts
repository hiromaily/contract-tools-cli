import { Provider, Wallet } from 'ethers';

/**
 * getSigner
 * @example
 * const signer = getSigner(process.env.PRIVATE_KEY, provider)
 */
export const getSigner = (key: string, provider: Provider) => {
  const wallet = new Wallet(key, provider);
  // connect the wallet to the provider
  const signer = wallet.connect(provider);
  return signer;
};
