'use strict';
export { };

const fs = require('fs');
const charEncoding: string = 'utf8'

function readFromFile(filename: string): string {
  try {
    return fs.readFileSync(filename, charEncoding)
  } catch (e) {
    console.log(e.message);
  }
}
console.log(readFromFile('hello.txt'));

function writeToFile(filename: string, data: string): void {
  fs.writeFileSync(filename, data);
}
writeToFile('morning.txt', 'This morning was super...');

function appendFile(filename: string, data: string): void {
  fs.appendFileSync(filename, data);
}
appendFile('morning.txt', 'This morning was weird...');

console.log(readFromFile('morning.txt'));

function countChar(filename: string, lookUp: string) {
  let totalA: number = 0;
  const fileContent: string = readFromFile(filename);
  // \n MAc-en \r\n Windowson a soronkenti szetvalasztashoz
  if (fileContent != null) {
    fileContent.split('\n').forEach(e => {
      e.split('').forEach(elem => {
        if (elem === lookUp) {
          totalA += 1;
        } else { };
      })
    })
    return totalA;
  } else {
    console.log('you have an empty file my dear');
  }
}
console.log(countChar('nonexist.txt', 'i'));