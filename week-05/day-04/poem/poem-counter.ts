import { readFromFile } from "../../../library/readfromfile";
'use strict'

function poemAvgWordLength(inputfile: string) {
  let tempArray= readFromFile(inputfile).split('\n').join(' ').split(' ')

  let totalChar: number = 0;
  tempArray.forEach(element => {
    totalChar+=element.length    
  });
  return Math.floor(totalChar/tempArray.length*100)/100
}
console.log(poemAvgWordLength('poem.txt'))

function poemWordsLongerThan (inputfile: string, lengthNumber: number) {
  return (readFromFile(inputfile).split('\n').join(' ').split(' ').filter(function(element) {
    return element.length >= lengthNumber
  })).length
}

console.log(poemWordsLongerThan('poem.txt', 10))

