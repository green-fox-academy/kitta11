'use strict';
export { };
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
const charEncoding: string = 'utf8'

//this function is a simplified way to use the file reading later
function readFromFile(filename: string): string {
  return fs.readFileSync(filename, charEncoding);
}

//the solution of the task
function countLines(filename: string): number {
  let lineCount: number = 0;
  let fileContentArray: string[] = [];
  
  try {
    fileContentArray = readFromFile(filename).split('\n');
  } catch (e) {
    return 0;
  }
  return lineCount = fileContentArray.length;
}

console.log(countLines('my-file.txt'));
console.log(countLines('null.txt'));
console.log(countLines('morrning.txt'));

