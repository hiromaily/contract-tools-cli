import {ethers, InterfaceAbi} from 'ethers'

export const getABIInterface = (abi: InterfaceAbi) => new ethers.Interface(abi)
