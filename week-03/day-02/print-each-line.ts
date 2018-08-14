'use strict';
export { };
// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require('fs');
const charEncoding: string = 'utf8'

function readFromFile(filename: string): string {
  return fs.readFileSync(filename, charEncoding);
}

function printEachLine(filename: string) {
  let fileContent: string = '';
  //exception 1: the selected file does not exist
  try {
    fileContent = readFromFile(filename);
  } catch (e) {
    throw new Error(`Unable to read file: ${filename}`);
  }
  //exception 2: the selected file is empty
  try {
    if (fileContent.length===0) {
    throw new Error(`${filename} is an empty file`);}
  }
  catch(e) {
    console.log(e.message);    
  }
  console.log(fileContent);
}

printEachLine('my-file.txt');
printEachLine('null.txt');
