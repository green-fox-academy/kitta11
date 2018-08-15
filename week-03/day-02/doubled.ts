'use script';
export { };

const fs = require('fs');
const charEncoding: string = 'utf8'

//general functions to read and write a file
function readFromFile(filename: string): string {
  return fs.readFileSync(filename, charEncoding);
}

function writeToFile(filename: string, data: string): void {
  fs.writeFileSync(filename, data);
}

function decryptDouble(filename: string) {
  let fileContent: string = readFromFile(filename);
  let fileContentArray: string[] = fileContent.split('');
  for (let index = 0; index < fileContentArray.length; index++) {
    if (index % 2 === 0) {
      fileContentArray[index] = '';
    }
  }
  let decryptedString = fileContentArray.join('');
  return decryptedString;
}

console.log(decryptDouble('duplicated-chars.txt'));
console.log(decryptDouble('testing-duplication.txt'));

