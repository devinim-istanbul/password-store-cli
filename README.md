password-store-cli
==================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g password-store-cli
$ psc COMMAND
running command...
$ psc (-v|--version|version)
password-store-cli/0.0.0 darwin-x64 node-v9.11.1
$ psc --help [COMMAND]
USAGE
  $ psc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`psc show [FILE] [PASSWORD]`](#psc-show-file)
* [`psc hide [FILE] [PASSWORD]`](#psc-hide-file)
* [`psc help [COMMAND]`](#psc-help-command)

## `psc show [FILE] [PASSWORD]`

Dump decoded file

```
USAGE
  $ psc show [FILE] [PASSWORD]

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ psc show passwords.txt sh3lf1shJ3an

  passwords.txt --> 
  =≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠
  Key: gg@devin.im Value: gg-devin.im
  =≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠
  =≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠
  Key: support@devin.im Value: gg-devin.im
  =≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠=≠
```

_See code: [src/commands/show.ts](https://github.com/d46/password-store-cli/blob/v0.0.0/src/commands/show.ts)_

## `psc hide [FILE] [PASSWORD]`

Dump encoded file

```
USAGE
  $ psc hide [FILE] [PASSWORD]

OPTIONS
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ psc hide passwords.txt sh3lf1shJ3an
  
  passwords.txt --> 
  WHAugzy+1xsJaQ/eYp0WeGhDDJ2BLDAlwUdRjRaoAErtuZYfmm84rAQFTMMEjwZz290BggSJWYK4t4lXv1HK9O7zu3sFhPZhZgcBwMn0KcPMIjT4XTCqCKflyX/A09mu3h2Hi0P06skDf/hH8BSvnGka4ucrcg7yFMJiED9Pz6X+nMnO8IvHf4cF98uy+oIaLJ1mxEQDxClpdjbOQqsHJAlwaoNm7D6Lt7Y66fFcJFd2YTZxJwfmuIpiyBf2VBpBTtKSEgLgRxot1sugUeIclSpM3q64ZCX99ifg803s84W0n4qBOhd1+QIYJ0NyrIaGIeSBVNJA1c9SbU9K3lc95+EuCLKQWWiT+Le1eTNPHc3pap1HgIg1dlaMuvVT8xLHdiWaHdGnp5uqx15actZ6gswlmOR6Okf+BfM/tK2a5MJAJTQWAFHH9hmGKDbhngzzqvkHtgE5/znyluXSjo/ymu/5t5qHqmgve6+rUIAmTDcKCXtQPN9mrPzAlPRwF1F1tshu9JmL+t/qO5WkSp7QiA==
```

_See code: [src/commands/show.ts](https://github.com/d46/password-store-cli/blob/v0.0.0/src/commands/show.ts)_


## `psc help [COMMAND]`

Display help for psc

```
USAGE
  $ psc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.4/src/commands/help.ts)_
<!-- commandsstop -->
