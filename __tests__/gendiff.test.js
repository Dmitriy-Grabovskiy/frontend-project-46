#!/usr/bin/env node
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'node:fs';
import { describe, expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const filename2 = fileURLToPath(import.meta.url);
const dirname2 = dirname(filename2);
const getFixturePath = (filename) => join(dirname2, '..', '__fixtures__', filename);

describe.each([['stylish'], ['plain'], ['json']])('format %s', (format) => {
  test.each([['json']])('extension %s', (extension) => {
    const expected = readFileSync(getFixturePath(`${format}Result`), 'utf-8');
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);
    expect(gendiff(file1, file2, format)).toEqual(expected);
  });
});

describe.each([['stylish']])('format %s', (format) => {
  test.each([['yaml'], ['yml']])('extension %s', (extension) => {
    const expected = readFileSync(getFixturePath(`${format}Result`), 'utf-8');
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);
    expect(gendiff(file1, file2, format)).toEqual(expected);
  });
});
