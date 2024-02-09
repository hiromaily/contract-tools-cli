import { ethers } from 'ethers';
import { SGPoolABI } from '../../abi/sg-pool';
import { RPCS_MAINNET } from '../../configs';
import { getProvider } from '../provider';

export const getSGPool = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth);
  return new ethers.Contract(contractAddr, SGPoolABI, provider);
};
