#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { initCommand } from '../src/commands/init.js';

yargs(hideBin(process.argv))
  .command(initCommand)
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
