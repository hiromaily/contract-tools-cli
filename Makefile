USER_ADDR=0x00731540cd6060991D6B9C57CE295998d9bC2faB

NETWORK_ETH=http://127.0.0.1:18545
NETWORK_BNB=http://127.0.0.1:8545

ETH_USDC_POOL_ADDR=0xF93199cFa3E74Ffd321F62B67d4034Ad207cD927
ETH_USDT_POOL_ADDR=0x30BaBba8d5E322639834459991754036Ae813FE3
ETH_WETH_POOL_ADDR=0xb824662d7d200c5a5e5a0fC4bBc056eDC779a4C6
ETH_USDC_TOKEN_ADDR=0xF938fE7482Fe4d1b3f84E28F1D6407836AA27d99
ETH_USDT_TOKEN_ADDR=0x6fdA347f2A64fd55F43B63c28619548c9B362835
ETH_BRIDGE_ADDR=0xC5777A1ac9A446aBDae4d4D71a330ebF77705a46

BNB_USDC_POOL_ADDR=0x4128F74366FFd66B599c37898A679DF984ddA382
BNB_USDT_POOL_ADDR=0xa45acC1Dc121165bB9A8CD453346826fb8CCb17A
BNB_WETH_POOL_ADDR=0xeDF411639F00D164A989DCd191C13949b7bb44ad
BNB_USDC_TOKEN_ADDR=0xA1482df59c75215c5ee80fEc1FB18523878614Bb
BNB_USDT_TOKEN_ADDR=0x9ec9656e9A1601F37d336E0f47eBF845AeC31a1c
BNB_BRIDGE_ADDR=0xF8fA7e0759b5189E4FA4E47094d50F2dfca620bC

#------------------------------------------------------------------------------
# contract-reader
#------------------------------------------------------------------------------

.PHONY: caller-balance-of
caller-balance-of:
	./bin/dev contract-reader balance-of --addr $(USER_ADDR)

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

.PHONY: caller-pool-balance
caller-pool-balance:
	./bin/dev contract-reader pool-balance --contract $(BNB_USDC_POOL_ADDR) --network $(NETWORK_BNB)

#------------------------------------------------------------------------------
# contract-writer
#------------------------------------------------------------------------------
# Approve
.PHONY: approve-eth-usdc-local
approve-eth-usdc-local:
	./bin/dev contract-writer approve --spender $(ETH_BRIDGE_ADDR) --contract $(ETH_USDC_TOKEN_ADDR) --amount 10002345123451234512345 --network $(NETWORK_ETH)

.PHONY: approve-eth-usdt-local
approve-eth-usdt-local:
	./bin/dev contract-writer approve --spender $(ETH_BRIDGE_ADDR) --contract $(ETH_USDT_TOKEN_ADDR) --amount 10002345123451234512345 --network $(NETWORK_ETH)

.PHONY: approve-bnb-usdc-local
approve-bnb-usdc-local:
	./bin/dev contract-writer approve --spender $(ETH_BRIDGE_ADDR) --contract $(BNB_USDC_TOKEN_ADDR) --amount 10002345123451234512345 --network $(NETWORK_BNB)

.PHONY: approve-bnb-usdt-local
approve-bnb-usdt-local:
	./bin/dev contract-writer approve --spender $(ETH_BRIDGE_ADDR) --contract $(BNB_USDT_TOKEN_ADDR) --amount 10002345123451234512345 --network $(NETWORK_BNB)

# Mint
.PHONY: mint-eth-usdc
mint-eth-usdc:
	./bin/dev contract-writer mint --account $(USER_ADDR) --contract $(ETH_USDC_TOKEN_ADDR) --amount 12000345123451234512345 --network $(NETWORK_ETH)

.PHONY: mint-eth-usdt
mint-eth-usdt:
	./bin/dev contract-writer mint --account $(USER_ADDR) --contract $(ETH_USDT_TOKEN_ADDR) --amount 350002345123451234512345 --network $(NETWORK_ETH)

.PHONY: mint-bnb-usdc
mint-bnb-usdc:
	./bin/dev contract-writer mint --account $(USER_ADDR) --contract $(BNB_USDC_TOKEN_ADDR) --amount 22000345123451234512345 --network $(NETWORK_BNB)

.PHONY: mint-bnb-usdt
mint-bnb-usdt:
	./bin/dev contract-writer mint --account $(USER_ADDR) --contract $(BNB_USDT_TOKEN_ADDR) --amount 550002345123451234512345 --network $(NETWORK_BNB)

.PHONY: mint-all
mint-all: mint-eth-usdc mint-eth-usdt mint-bnb-usdc mint-bnb-usdt

# Transfer
# eth bridge address: 0xa37a1a9Cc31e44adFb68Da558fc1F00f77983794
# bnb bridge address: 0x5A1bbAEE621617eE9e63A6F8cf95E8a3aD861526
.PHONY: transfer-eth
transfer-eth:
	./bin/dev contract-writer send-transfer --to $(ETH_BRIDGE_ADDR) --amount 99999999 --network $(NETWORK_ETH)

.PHONY: transfer-bnb
transfer-bnb:
	./bin/dev contract-writer send-transfer --to $(BNB_BRIDGE_ADDR) --amount 100 --network $(NETWORK_BNB)

.PHONY: transfer-all
transfer-all: transfer-eth transfer-bnb

# stopTransfer
.PHONY: stop-transfer-bnb-usdc
stop-transfer-bnb-usdc:
	./bin/dev contract-writer stop-transfer --contract $(BNB_USDC_POOL_ADDR) --network $(NETWORK_BNB)

.PHONY: stop-transfer-bnb-usdt
stop-transfer-bnb-usdt:
	./bin/dev contract-writer stop-transfer --contract $(BNB_USDT_POOL_ADDR) --network $(NETWORK_BNB)

# .PHONY: stop-transfer-eth-usdc
# stop-transfer-eth-usdc:
# 	./bin/dev contract-writer stop-transfer --contract 0xF16Fdb1FF23359633cCe37b7554394E8beA262D4 --network http://127.0.0.1:18545

# .PHONY: stop-transfer-eth-usdt
# stop-transfer-eth-usdt:
# 	./bin/dev contract-writer stop-transfer --contract 0x6dE8E613E024De9FEE0759A016ff9BA80b668bFf --network http://127.0.0.1:18545

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
.PHONY: dprint-fmt
dprint-fmt:
	dprint fmt
