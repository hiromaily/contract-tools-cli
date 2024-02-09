// A Human-Readable ABI; for interacting with the contract, we
// must include any fragment we wish to use
export const ERC20ABI = [
  // Read-Only Functions
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address owner) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',

  // Authenticated Functions
  'function approve(address spender, uint256 value) returns (bool)',
  'function transfer(address to, uint amount) returns (bool)',

  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)',
] as const;
