'use strict';

const fs = require('fs');
const charEncoding: string = 'utf8'

export function readFromFile(filename: string): string {
  return fs.readFileSync(filename, charEncoding);
}

let movieStudioArray: string[] = []
movieStudioArray = readFromFile('paramount.csv').split('\n')
let furthersplittedArray: object []=[]

for (let index = 0; index < movieStudioArray.length; index++) {
  furthersplittedArray.push(movieStudioArray[index].split(','));
  
}

// console.log(movieStudioArray[1].split(','))
// console.log(furthersplittedArray)

let sortedList = furthersplittedArray.sort((a: object, b: object) => a[1] - b[1])



console.log(sortedList)
