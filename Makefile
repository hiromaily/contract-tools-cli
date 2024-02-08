
#------------------------------------------------------------------------------
# contract-reader
#------------------------------------------------------------------------------
.PHONY: caller-sub-cmd
caller-sub-cmd:
	./bin/dev contract-reader sub-cmd

.PHONY: caller-balance-of
caller-balance-of:
	./bin/dev contract-reader balance-of --addr 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1

.PHONY: caller-estimate-fees
caller-estimate-fees:
	./bin/dev contract-reader estimate-fees --chainid 102

.PHONY: caller-chain-path-index-lookup
caller-chain-path-index-lookup:
	./bin/dev contract-reader chain-path-index-lookup --chainid 102 --poolid 2

.PHONY: caller-chain-path-index-lookup-failure
caller-chain-path-index-lookup-failure:
	./bin/dev contract-reader chain-path-index-lookup --chainid 999 --poolid 200
# => return 0n when accessing by out of index

# For test
.PHONY: all-contract-reader
all-contract-reader: caller-sub-cmd caller-balance-of caller-chain-path-index-lookup

.PHONY: caller-pool-balance
caller-pool-balance:
	./bin/dev contract-reader pool-balance --contract 0x248fE1500123bD44A3148e3279dFB6274c2434Aa --network http://127.0.0.1:8545

#------------------------------------------------------------------------------
# contract-writer
#------------------------------------------------------------------------------
# Approve
.PHONY: approve-eth-usdc-local
approve-eth-usdc-local:
	./bin/dev contract-writer approve --spender 0xF938fE7482Fe4d1b3f84E28F1D6407836AA27d99 --contract 0x2D1deF28042b3c7931690dC59aEB1DD4a6Bed164 --amount 10002345123451234512345 --network http://127.0.0.1:18545

.PHONY: approve-eth-usdt-local
approve-eth-usdt-local:
	./bin/dev contract-writer approve --spender 0xF938fE7482Fe4d1b3f84E28F1D6407836AA27d99 --contract 0xFEAB95Eeb8507978bC5edD22E9BA2F52f9d377A1 --amount 10002345123451234512345 --network http://127.0.0.1:18545

.PHONY: approve-bnb-usdc-local
approve-bnb-usdc-local:
	./bin/dev contract-writer approve --spender 0xF938fE7482Fe4d1b3f84E28F1D6407836AA27d99 --contract 0x31612177B6eed0725a384d56161CDc37E723aC4a --amount 10002345123451234512345 --network http://127.0.0.1:8545

.PHONY: approve-bnb-usdt-local
approve-bnb-usdt-local:
	./bin/dev contract-writer approve --spender 0xF938fE7482Fe4d1b3f84E28F1D6407836AA27d99 --contract 0xb86e628244Cb18A0B7C93e0ED23eF11DA17C3B0b --amount 10002345123451234512345 --network http://127.0.0.1:8545

# Mint
.PHONY: mint-eth-usdc
mint-eth-usdc:
	./bin/dev contract-writer mint --account 0x00731540cd6060991D6B9C57CE295998d9bC2faB --contract 0x2D1deF28042b3c7931690dC59aEB1DD4a6Bed164 --amount 12000345123451234512345 --network http://127.0.0.1:18545

.PHONY: mint-eth-usdt
mint-eth-usdt:
	./bin/dev contract-writer mint --account 0x00731540cd6060991D6B9C57CE295998d9bC2faB --contract 0xFEAB95Eeb8507978bC5edD22E9BA2F52f9d377A1 --amount 350002345123451234512345 --network http://127.0.0.1:18545

.PHONY: mint-bnb-usdc
mint-bnb-usdc:
	./bin/dev contract-writer mint --account 0x00731540cd6060991D6B9C57CE295998d9bC2faB --contract 0x31612177B6eed0725a384d56161CDc37E723aC4a --amount 22000345123451234512345 --network http://127.0.0.1:8545

.PHONY: mint-bnb-usdt
mint-bnb-usdt:
	./bin/dev contract-writer mint --account 0x00731540cd6060991D6B9C57CE295998d9bC2faB --contract 0xb86e628244Cb18A0B7C93e0ED23eF11DA17C3B0b --amount 550002345123451234512345 --network http://127.0.0.1:8545

.PHONY: mint-all
mint-all: mint-eth-usdc mint-eth-usdt mint-bnb-usdc mint-bnb-usdt

#------------------------------------------------------------------------------
# abi-decoder for multicall3
#------------------------------------------------------------------------------
.PHONY: multicall3-request
multicall3-request:
	./bin/dev abi-decoder multicall3-request

.PHONY: multicall3-inner-request
multicall3-inner-request:
	./bin/dev abi-decoder multicall3-inner-request

.PHONY: multicall3-result
multicall3-result:
	./bin/dev abi-decoder multicall3-result

.PHONY: multicall3-result-second
multicall3-result-second:
	./bin/dev abi-decoder multicall3-result --data 0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000c8000000000000000000000000000000000000000000000000000000000000012c000000000000000000000000000000000000000000000000000000000000019000000000000000000000000000000000000000000000000000000000000001f40000000000000000000000000000000000000000000000000000000000000258

.PHONY: multicall3-inner-result
multicall3-inner-result:
	./bin/dev abi-decoder multicall3-inner-result

.PHONY: multicall3-inner-result2
multicall3-inner-result2:
	./bin/dev abi-decoder multicall3-inner-result2

# For test
.PHONY: all-abi-decoder
all-abi-decoder: multicall3-request multicall3-inner-request multicall3-result multicall3-result-second multicall3-inner-result

#------------------------------------------------------------------------------
# abi-encoder for multicall3
#------------------------------------------------------------------------------
.PHONY: encode-multicall3-inner-result
encode-multicall3-inner-result:
	./bin/dev abi-encoder multicall3-inner-result

.PHONY: encode-multicall3-result
encode-multicall3-result:
	./bin/dev abi-encoder multicall3-result

# For test
.PHONY: all-abi-encoder
all-abi-encoder: encode-multicall3-inner-result encode-multicall3-result

#------------------------------------------------------------------------------
# utility
#------------------------------------------------------------------------------
