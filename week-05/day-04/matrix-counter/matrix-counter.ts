import { readFromFile } from "../../../library/readfromfile";

'use strict'

function matrixRowTotal(filename: string) {
  let readFromFileArray: string[] = readFromFile(filename).split('\n');

  for (let i = 0; i < readFromFileArray.length; i++) {
    while (readFromFileArray[i].indexOf(' ') > 0) {
      readFromFileArray[i] = readFromFileArray[i].replace(' ', ',')
    }
  }

  let twoDArray: any[][] = [];

  readFromFileArray.forEach(row => {
    twoDArray.push(row.split(','))
  });

  let counter: number [] = []
  for (let row = 0; row < twoDArray.length; row++) {
  
    let rowTotal: number = 0;
    for (let col = 0; col < twoDArray[row].length; col++) {
      rowTotal+=parseInt(twoDArray[row][col]);      
    }
    counter.push(rowTotal);
    rowTotal=0;
  }
  counter.forEach((element, index) => {
    console.log(`Matrix ${index}. line total sum: ${element}`) 
  })
  // return counter
}

// console.log(matrixRowTotal('matrix.txt'))
matrixRowTotal('matrix.txt')
