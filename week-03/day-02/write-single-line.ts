'use strict';
export{};

// Open a file called 'my-file-two.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file-two.txt'

const fs = require('fs');
const charEncoding: string = 'utf8'

//this function in general solves the write to a file task

function writeToFile(filename: string, data: string): void {
  try {fs.writeFileSync(filename, data);
} catch (e) {
throw new Error (`Unable to write file: ${filename}`)
}
}

writeToFile('my-file-two.txt', 'My name is Kriszta Parraggg');
//I set this file only to read
writeToFile('my-file-twoo', 'My name is Kriszta Parraggg');