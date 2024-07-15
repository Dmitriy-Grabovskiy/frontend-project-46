import { readFileSync } from 'fs';
import path,{ extname } from 'path';
import { cwd } from 'process';
import parse from './parsers.js';
import getDiff from './getDiff.js';
import getFormatTree from './formatter/index.js';

export default (filepath1, filepath2, format) => {
  const getPath = (filepath) => path.resolve(cwd(), filepath);
  const extension1 = extname(filepath1).slice(1);
  const extension2 = extname(filepath2).slice(1);
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);

  const file1 = readFileSync(path1);
  const file2 = readFileSync(path2);
  const data1 = parse(file1, extension1);
  const data2 = parse(file2, extension2);
  return getFormatTree(getDiff(data1, data2), format);
};
