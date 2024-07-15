#!/usr/bin/env node
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "node:fs";
import { test } from "@jest/globals";
import gendiff from "../src/index.js";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const getFixturePath = (filename) =>
  join(_dirname, "..", "__fixtures__", filename);

describe.each([["stylish"], ["plain"], ["json"]])("format %s", (format) => {
  test.each([["json"]])("extension %s", (extension) => {
    const expected = readFileSync(getFixturePath(`${format}Result`), "utf-8");
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);
    expect(gendiff(file1, file2, format)).toEqual(expected);
  });
});

describe.each([["stylish"]])("format %s", (format) => {
  test.each([["yaml"], ["yml"]])("extension %s", (extension) => {
    const expected = readFileSync(getFixturePath(`${format}Result`), "utf-8");
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);
    expect(gendiff(file1, file2, format)).toEqual(expected);
  });
});
