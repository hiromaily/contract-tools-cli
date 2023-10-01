import {ethers} from 'ethers'

export const getProvider = (url: string) => new ethers.JsonRpcProvider(url)
