import { ethers } from 'ethers';
import { EndpointABI } from '../../abi/endpoint';
import { RPCS_MAINNET } from '../../configs';
import { getProvider } from '../provider';

export const getEndpoint = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth);
  return new ethers.Contract(contractAddr, EndpointABI, provider);
};
