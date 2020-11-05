#!/usr/bin/env node
import { execute, positionals, flags } from '@tirette/cli-core';
import internal from './utils/internal';

const flagsToString = (): string => {
  let list = '';

  for (const flag in flags) {
    list += `--${flag}=${flags[flag]} `;
  }

  return list;
};

execute(`jest --config=${internal('./config.js')} ${positionals.join(' ')} ${flagsToString()}`);
