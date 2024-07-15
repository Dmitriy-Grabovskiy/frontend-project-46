import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all, // optional unless you're using "eslint:all"
});

export default [
  // mimic ESLintRC-style extends
  ...compat.extends('airbnb-base'),

  // mimic environments
  ...compat.env({
    es2020: true,
    node: true,
  }),

  // translate an entire config
  ...compat.config({
    extends: 'airbnb-base/legacy',
    env: {
      es2020: true,
      node: true,
    },
    rules: {
      // quotes: ["error", "double"],
      'comma-dangle': ['error', 'always-multiline'],
      'airbnb-base/arrow-body-style': 'off',
      'no-console': 'off',
      'import/extensions': 'off',
      'linebreak-style': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  }),
];
