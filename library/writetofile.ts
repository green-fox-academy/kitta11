'use strict'
declare function require(params: string): any;

const fs = require('fs');

export function writeToFile(filename: string, data: string): void {
  try {fs.writeFileSync(filename, data);
} catch (e) {
throw new Error (`Unable to write file: ${filename}`)
}
}
