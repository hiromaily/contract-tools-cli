
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

#------------------------------------------------------------------------------
# contract-writter
#------------------------------------------------------------------------------
.PHONY: mint
mint:
	./bin/dev contract-writter mint --spender 0x00731540cd6060991D6B9C57CE295998d9bC2faB --amount 12345123451234512345

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
