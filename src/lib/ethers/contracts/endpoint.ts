import {ethers} from 'ethers'
import {getProvider} from '../provider'
import {RPCS_MAINNET} from '../../configs'
import {EndpointABI} from '../../abi/endpoint'

export const getEndpoint = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth)
  return new ethers.Contract(contractAddr, EndpointABI, provider)
}
