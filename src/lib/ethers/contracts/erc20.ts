import {ethers} from 'ethers'
import {ERC20ABI} from '../../abi/erc20'
import {MockTokenABI} from '../../abi/mock-token'
import {RPCS_MAINNET} from '../../configs'
import {getProvider} from '../provider'
import {getSigner} from '../wallet'

export const getERC20 = (contractAddr: string) => {
  const provider = getProvider(RPCS_MAINNET.eth)
  return new ethers.Contract(contractAddr, ERC20ABI, provider)
}

export const getERC20Writer = (key: string, contractAddr: string, rpcAddr: string) => {
  const provider = getProvider(rpcAddr)
  const signer = getSigner(key, provider)
  return new ethers.Contract(contractAddr, ERC20ABI, signer)
}

export const getERC20Minter = (key: string, contractAddr: string, rpcAddr: string) => {
  const provider = getProvider(rpcAddr)
  const signer = getSigner(key, provider)
  return new ethers.Contract(contractAddr, MockTokenABI, signer)
}
