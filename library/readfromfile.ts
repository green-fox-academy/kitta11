'use strict'
declare function require(params: string): any;

const fs = require('fs');
const charEncoding: string = 'utf8'

export function readFromFile(filename: string): string {
try {
  return fs.readFileSync(filename, charEncoding);
} catch {
  console.log(`There is no such file`);
  return null;
}
}