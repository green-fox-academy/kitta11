'use strict';
export { };

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

const fs = require('fs');
const charEncoding: string = 'utf8'

//this function in general solves the write to a file task

function writeToFile(filename: string, data: string): void {
  fs.writeFileSync(filename, data);
}

function writeMultiLines(path: string, word: string, numOfLines: number) {
  let multipleLines: string = ''
  let generatedFileName: string = path + '.txt';
  for (let i = 0; i < numOfLines; i++) {
    multipleLines = multipleLines + word + '\n';
  }
try {writeToFile(generatedFileName, multipleLines);
} catch (e) {

} 
}
writeMultiLines('testing1', 'pear', 6);
writeMultiLines('my-file-twoo', 'pear', 6);
