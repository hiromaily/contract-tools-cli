import { ethers } from 'ethers';
import { getProvider } from '../provider';
import { RPCS_MAINNET } from '../../configs';
import { getSigner } from '../wallet';
import { ERC20ABI } from '../../abi/erc20';

export const getERC20 = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth);
  return new ethers.Contract(contractAddr, ERC20ABI, provider);
};

export const getERC20Writer = (key: string, contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth);
  const signer = getSigner(key, provider);
  return new ethers.Contract(contractAddr, ERC20ABI, signer);
};
