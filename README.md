# contract-tools-cli

Contract Tool CLI created by [oclif](https://oclif.io/)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g contract-tools-cli
$ contract-tools-cli COMMAND
running command...
$ contract-tools-cli (--version)
contract-tools-cli/1.0.0 darwin-arm64 node-v18.17.1
$ contract-tools-cli --help [COMMAND]
USAGE
  $ contract-tools-cli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [contract-tools-cli](#contract-tools-cli)
- [Usage](#usage)
- [Commands](#commands)
  - [`contract-tools-cli contract-caller balanceOf`](#contract-tools-cli-contract-caller-balanceof)
  - [`contract-tools-cli contract-caller estimateFees`](#contract-tools-cli-contract-caller-estimatefees)

## `contract-tools-cli contract-caller balanceOf`

Call ERC20 balanceOf

```
USAGE
  $ contract-tools-cli contract-caller balanceOf --addr <your-address>

ARGUMENTS
  balanceOf  balanceOf function

FLAGS
  -a, --addr=<your-address>  (required) your wallet address

DESCRIPTION
  call ERC20 balanceOf function of USDT contract on Ethereum Mainnet

EXAMPLES
  $ contract-tools-cli contract-caller balanceOf --addr 0x...
```

## `contract-tools-cli contract-caller estimateFees`

Call Endpoint estimateFees

```
USAGE
  $ contract-tools-cli contract-caller estimateFees --chainid <chainId>

ARGUMENTS
  estimateFees  estimateFees function

FLAGS
  -c, --chainid=<chain-id>  (required) destination chainId

DESCRIPTION
  call Endpoint estimateFees function of Endpoint contract on Ethereum Mainnet

EXAMPLES
  $ contract-tools-cli contract-caller estimateFees --chainid 102
```

_See code: [dist/commands/contract-caller/index.ts](https://github.com/hiromaily/contract-tools-cli/blob/main/src/commands/contract-caller/index.ts)_

<!-- commandsstop -->
