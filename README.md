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
  - [`contract-tools-cli contract-reader balanceOf`](#contract-tools-cli-contract-reader-balanceof)
  - [`contract-tools-cli contract-reader estimateFees`](#contract-tools-cli-contract-reader-estimatefees)

## `contract-tools-cli contract-reader balanceOf`

Call ERC20 balanceOf

```
USAGE
  $ contract-tools-cli contract-reader balanceOf --addr <your-address>

ARGUMENTS
  balanceOf  balanceOf function

FLAGS
  -a, --addr=<your-address>  (required) your wallet address

DESCRIPTION
  call ERC20 balanceOf function of USDT contract on Ethereum Mainnet

EXAMPLES
  $ contract-tools-cli contract-reader balanceOf --addr 0x...
```

## `contract-tools-cli contract-reader estimateFees`

Call Endpoint estimateFees

```
USAGE
  $ contract-tools-cli contract-reader estimateFees --chainid <chainId>

ARGUMENTS
  estimateFees  estimateFees function

FLAGS
  -c, --chainid=<chain-id>  (required) destination chainId

DESCRIPTION
  call Endpoint estimateFees function of Endpoint contract on Ethereum Mainnet

EXAMPLES
  $ contract-tools-cli contract-reader estimateFees --chainid 102
```

_See code: [dist/commands/contract-reader/index.ts](https://github.com/hiromaily/contract-tools-cli/blob/main/src/commands/contract-reader/index.ts)_

<!-- commandsstop -->
