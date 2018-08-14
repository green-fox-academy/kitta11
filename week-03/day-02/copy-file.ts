'use strict';
export { };

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');
const charEncoding: string = 'utf8'

//general functions to read and write a file
function readFromFile(filename: string): string {
  return fs.readFileSync(filename, charEncoding);
}

function writeToFile(filename: string, data: string): void {
  fs.writeFileSync(filename, data);
}

function copyFile(filenameFrom: string, filenameTo: string): boolean {
  try {
    writeToFile(filenameTo, readFromFile(filenameFrom));
  } catch (e) {
    throw new Error ('The copy paste was unsuccessful')
  }  
  return true
}

console.log(copyFile('morning.txt', 'target.txt'));
console.log(copyFile('morrrning.txt', 'target.txt'));

