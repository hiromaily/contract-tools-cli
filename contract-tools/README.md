# contract-tools

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g contract-tools
$ contract-tools COMMAND
running command...
$ contract-tools (--version)
contract-tools/1.0.0 darwin-arm64 node-v18.17.1
$ contract-tools --help [COMMAND]
USAGE
  $ contract-tools COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [contract-tools](#contract-tools)
- [Usage](#usage)
- [Commands](#commands)
  - [`contract-tools hello PERSON`](#contract-tools-hello-person)
  - [`contract-tools hello world`](#contract-tools-hello-world)
  - [`contract-tools help [COMMANDS]`](#contract-tools-help-commands)
  - [`contract-tools plugins`](#contract-tools-plugins)
  - [`contract-tools plugins:install PLUGIN...`](#contract-tools-pluginsinstall-plugin)
  - [`contract-tools plugins:inspect PLUGIN...`](#contract-tools-pluginsinspect-plugin)
  - [`contract-tools plugins:install PLUGIN...`](#contract-tools-pluginsinstall-plugin-1)
  - [`contract-tools plugins:link PLUGIN`](#contract-tools-pluginslink-plugin)
  - [`contract-tools plugins:uninstall PLUGIN...`](#contract-tools-pluginsuninstall-plugin)
  - [`contract-tools plugins:uninstall PLUGIN...`](#contract-tools-pluginsuninstall-plugin-1)
  - [`contract-tools plugins:uninstall PLUGIN...`](#contract-tools-pluginsuninstall-plugin-2)
  - [`contract-tools plugins update`](#contract-tools-plugins-update)

## `contract-tools hello PERSON`

Say hello

```
USAGE
  $ contract-tools hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/hiromaily/contract-tools/blob/v1.0.0/dist/commands/hello/index.ts)_

## `contract-tools hello world`

Say hello world

```
USAGE
  $ contract-tools hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ contract-tools hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/hiromaily/contract-tools/blob/v1.0.0/dist/commands/hello/world.ts)_

## `contract-tools help [COMMANDS]`

Display help for contract-tools.

```
USAGE
  $ contract-tools help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for contract-tools.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `contract-tools plugins`

List installed plugins.

```
USAGE
  $ contract-tools plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ contract-tools plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/index.ts)_

## `contract-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ contract-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ contract-tools plugins add

EXAMPLES
  $ contract-tools plugins:install myplugin

  $ contract-tools plugins:install https://github.com/someuser/someplugin

  $ contract-tools plugins:install someuser/someplugin
```

## `contract-tools plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ contract-tools plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ contract-tools plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/inspect.ts)_

## `contract-tools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ contract-tools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ contract-tools plugins add

EXAMPLES
  $ contract-tools plugins:install myplugin

  $ contract-tools plugins:install https://github.com/someuser/someplugin

  $ contract-tools plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/install.ts)_

## `contract-tools plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ contract-tools plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ contract-tools plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/link.ts)_

## `contract-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ contract-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ contract-tools plugins unlink
  $ contract-tools plugins remove
```

## `contract-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ contract-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ contract-tools plugins unlink
  $ contract-tools plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/uninstall.ts)_

## `contract-tools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ contract-tools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ contract-tools plugins unlink
  $ contract-tools plugins remove
```

## `contract-tools plugins update`

Update installed plugins.

```
USAGE
  $ contract-tools plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.8.3/src/commands/plugins/update.ts)_

<!-- commandsstop -->
