#!/usr/bin/env node
/* eslint-disable import/no-unresolved */
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const option = program.opts();
    console.log(gendiff(filepath1, filepath2, option.format));
  });
program.parse();
