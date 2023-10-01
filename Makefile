
#------------------------------------------------------------------------------
# contract-caller
#------------------------------------------------------------------------------
.PHONY: sub-cmd
sub-cmd:
	./bin/dev contract-caller sub-cmd

.PHONY: balance-of
balance-of:
	./bin/dev contract-caller balance-of --addr 0xc1f3a7613c70BBf1Bd8C4924192Bd75451fE0dd1

.PHONY: estimate-fees
estimate-fees:
	./bin/dev contract-caller estimate-fees --chainid 102

.PHONY: chain-path-index-lookup
chain-path-index-lookup:
	./bin/dev contract-caller chain-path-index-lookup --chainid 102 --poolid 2

.PHONY: chain-path-index-lookup-failure
chain-path-index-lookup-failure:
	./bin/dev contract-caller chain-path-index-lookup --chainid 999 --poolid 200
# => return 0n when accessing by out of index

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

#------------------------------------------------------------------------------
# abi-encoder for multicall3
#------------------------------------------------------------------------------
.PHONY: encode-multicall3-inner-result
encode-multicall3-inner-result:
	./bin/dev abi-encoder multicall3-inner-result

.PHONY: encode-multicall3-result
encode-multicall3-result:
	./bin/dev abi-encoder multicall3-result
