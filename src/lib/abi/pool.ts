export const PoolABI = [
  {
    type: "function",
    name: "BPS_DENOMINATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DEFAULT_ROUTER_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LDToLP",
    inputs: [
      {
        name: "_amountLD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LPToLD",
    inputs: [
      {
        name: "amountLP",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "activatePeerPool",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "batched",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "callDelta",
    inputs: [
      {
        name: "fullMode",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "convertRate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "subtractedValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "defaultLPMode",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "defaultSwapMode",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deltaCredit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        name: "fields",
        type: "bytes1",
        internalType: "bytes1",
      },
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "version",
        type: "string",
        internalType: "string",
      },
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "verifyingContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "salt",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "extensions",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "eqFeePool",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "feeCalculator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "flowRateLimiter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPeerPoolInfo",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPool.PeerPoolInfo",
        components: [
          {
            name: "chainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "id",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "weight",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "balance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "targetBalance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lastKnownBalance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "credits",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "ready",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "globalDecimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "addedValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "name",
        type: "string",
        internalType: "string",
      },
      {
        name: "symbol",
        type: "string",
        internalType: "string",
      },
      {
        name: "poolId_",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "token_",
        type: "address",
        internalType: "address",
      },
      {
        name: "globalDecimals_",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "localDecimals_",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "feeCalculator_",
        type: "address",
        internalType: "address",
      },
      {
        name: "admin",
        type: "address",
        internalType: "address",
      },
      {
        name: "router",
        type: "address",
        internalType: "address",
      },
      {
        name: "flowRateLimiter_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "localDecimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lpDeltaBP",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountLD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "peerPoolInfoIndexSeek",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "peerPoolInfos",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "chainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "weight",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "targetBalance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lastKnownBalance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "credits",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "ready",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "poolBalance",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolId",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "recv",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "feeInfo",
        type: "tuple",
        internalType: "struct ITransferPoolFeeCalculator.FeeInfo",
        components: [
          {
            name: "amountGD",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "protocolFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lpFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "eqFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "eqReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lastKnownBalance",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "amountLD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerPeerPool",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "weight",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendCredit",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "creditInfo",
        type: "tuple",
        internalType: "struct IPool.CreditInfo",
        components: [
          {
            name: "credits",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "targetBalance",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDeltaParam",
    inputs: [
      {
        name: "batched_",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "swapDeltaBP_",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "lpDeltaBP_",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "defaultSwapMode_",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "defaultLPMode_",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPeerPoolWeight",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "weight",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTransferStop",
    inputs: [
      {
        name: "transferStop_",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "swapDeltaBP",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalLiquidity",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalWeight",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountLD",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minAmountLD",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "newLiquidity",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [
      {
        name: "feeInfo",
        type: "tuple",
        internalType: "struct ITransferPoolFeeCalculator.FeeInfo",
        components: [
          {
            name: "amountGD",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "protocolFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lpFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "eqFee",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "eqReward",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "lastKnownBalance",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferStop",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateCredit",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "creditInfo",
        type: "tuple",
        internalType: "struct IPool.CreditInfo",
        components: [
          {
            name: "credits",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "targetBalance",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeTo",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "withdrawCheck",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountGD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "amountSwap",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountMint",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawConfirm",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountGD",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amountToMintGD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawInstant",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "amountGD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawLocal",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "to",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "amountGD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawRemote",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AdminChanged",
    inputs: [
      {
        name: "previousAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BeaconUpgraded",
    inputs: [
      {
        name: "beacon",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Burn",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DeltaParamUpdated",
    inputs: [
      {
        name: "batched",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "swapDeltaBP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "lpDeltaBP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "defaultSwapMode",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "defaultLPMode",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PeerPoolInfoUpdate",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "weight",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Recv",
    inputs: [
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountSD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "protocolFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "eqFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "previousAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "newAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SendCredit",
    inputs: [
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "credits",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "targetBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StopTransferUpdated",
    inputs: [
      {
        name: "stopTransfer",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountSD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "eqReward",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "eqFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "protocolFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "lpFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdateCredit",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "credits",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "targetBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawCheck",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountLP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawConfirm",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountMintGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawInstant",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "to",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawLocal",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountGD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "to",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawRemote",
    inputs: [
      {
        name: "peerChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "peerPoolId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "from",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountLP",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "amountLD",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;
