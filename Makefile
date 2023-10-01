
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

#------------------------------------------------------------------------------
# abi-decoder
#------------------------------------------------------------------------------
.PHONY: request
request:
	./bin/dev abi-decoder request

