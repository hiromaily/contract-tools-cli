import { ethers } from 'ethers';
import { getProvider } from './provider';
import { RPCS_MAINNET } from '../configs';
import { ERC20ABI } from '../abi/erc20';

export const getERC20 = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth);
  return new ethers.Contract(contractAddr, ERC20ABI, provider);
};
