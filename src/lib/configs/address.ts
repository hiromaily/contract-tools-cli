import {NetworkType} from '../networks'
import {TokenType} from '../tokens'

// Ethereum
export const ADDR_MAINNET = {
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  ETH_ENDPOINT: '0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675', // Ethereum
  // BNB_ENDPOINT: '0x3c2269811836af69497E5F486A85D7316753cf62', // BNB
  ETH_SG_POOL_USDC: '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56', // Ethereum
  ETH_SG_POOL_USDT: '0x38EA452219524Bb87e18dE1C24D3bB59510BD783', // Ethereum
}

// Sepolia
export const ADDR_TESTNET = {
  USDT: '0x7169D38820dfd117C3FA1f22a697dBA58d90BA06',
  USDC: '0x8267cF9254734C6Eb452a7bb9AAF97B392258b21',
}

// ETH: localnet
export const ADDR_LOCALNET = {
  USDT: '0xFEAB95Eeb8507978bC5edD22E9BA2F52f9d377A1',
  USDC: '0x2D1deF28042b3c7931690dC59aEB1DD4a6Bed164',
}

export const getTokenContractAddress = (token: TokenType, network: NetworkType) => {
  const addr = network === NetworkType.MAINNET ? ADDR_MAINNET : (NetworkType.TESTNET ? ADDR_TESTNET : ADDR_LOCALNET)

  switch (token) {
  case 'usdt': {
    return addr.USDT
  }

  case 'usdc': {
    return addr.USDC
  }
  }

  return ''
}
