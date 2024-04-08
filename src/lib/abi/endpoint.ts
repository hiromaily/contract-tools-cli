// A Human-Readable ABI; for interacting with the contract, we
// must include any fragment we wish to use
export const EndpointABI = [
  // Read-Only Functions
  'function estimateFees(uint16 _dstChainId, address _userApplication, bytes calldata _payload, bool _payInZRO, bytes calldata _adapterParams) external view returns (uint nativeFee, uint zroFee)',
  // Events
  'event NewLibraryVersionAdded(uint16 version)',
] as const
