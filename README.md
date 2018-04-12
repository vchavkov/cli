cli
=============

client CLI

[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![CircleCI](https://circleci.com/gh/vchavkov/cli/tree/master.svg?style=shield)](https://circleci.com/gh/vchavkov/cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/vchavkov/cli?branch=master&svg=true)](https://ci.appveyor.com/project/vchavkov/cli/branch/master)
[![Codecov](https://codecov.io/gh/vchavkov/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/vchavkov/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/vchavkov/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ cli COMMAND
running command...
$ cli (-v|--version|version)
cli/0.0.0 linux-x64 node-v9.11.1
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [cli hello](#cli-hello)
* [cli help [COMMAND]](#cli-help-command)

## cli hello

Describe the command here

```
USAGE
  $ cli hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  Describe the command here
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/vchavkov/cli/blob/v0.0.0/src/commands/hello.js)_

## cli help [COMMAND]

display help for cli

```
USAGE
  $ cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.4/src/commands/help.ts)_
<!-- commandsstop -->
