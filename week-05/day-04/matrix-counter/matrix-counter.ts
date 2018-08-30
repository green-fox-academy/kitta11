import { readFromFile } from "../../../library/readfromfile";
'use strict'

const fs = require('fs');
const charEncoding: string = 'utf8'


function matrixRowTotal(fromFile: string) {
  let readFromFileArray: string[] = [];

  try {
    readFromFileArray = readFromFile(fromFile).split('\n');
  } catch (error) {
    console.log(`There is no ${fromFile} file in the library`)
  }
  let twoDArray: any[][] = [];
  twoDArray = readFromFileArray.map(element => {
    return element.split(' ')
  })

  let counter: number[] = []
  for (let row = 0; row < twoDArray.length; row++) {

    let rowTotal: number = 0;
    for (let col = 0; col < twoDArray[row].length; col++) {
      rowTotal += parseInt(twoDArray[row][col]);
    }
    counter.push(rowTotal);
    rowTotal = 0;
  }

  let toFile: string = fromFile.slice(0, fromFile.length - 4) + '-total.txt'
  twoDArray.forEach((element, index) => {
    fs.appendFileSync(toFile, `${element}: ${counter[index]} in total \n`)
  })
}



// matrixRowTotal('matrixOne.txt')
matrixRowTotal('matrixTwo.txt')
// matrixRowTotal('matrixTwoo.txt')

