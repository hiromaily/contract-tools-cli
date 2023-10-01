import { ethers } from 'ethers';
import { getProvider } from '../provider';
import { RPCS_MAINNET } from '../../configs';
import { SGPoolABI } from '../../abi/sg-pool';

export const getSGPool = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth);
  return new ethers.Contract(contractAddr, SGPoolABI, provider);
};
