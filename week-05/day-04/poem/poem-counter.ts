import { readFromFile } from "../../../library/readfromfile";
'use strict'

export function clearString(inputfile) {
  let specialChar: string[] = [`+`, `-`, `&`, `!`, `(`, `)`, `{`, `}`, `[`, `]`, `^`, `"`, `~`, `*`, `?`, `:`, `.`, `,`]
  let dirtyString: string = readFromFile(inputfile)

  specialChar.forEach(element => {
    while (dirtyString.indexOf(element) > 0) {
      dirtyString = dirtyString.replace(element, '')
    }
  });

  return dirtyString.split('\n').join(' ').split(' ')
}

function poemAvgWordLength(inputfile: string) {
  let clearedArray: string[] = clearString(inputfile)

  let totalChar: number = 0;
  clearedArray.forEach(element => {
    totalChar += element.length
  });
  return Math.floor(totalChar / clearedArray.length * 100) / 100
}

console.log(poemAvgWordLength('poem.txt'))

function poemWordsLongerThan(inputfile: string, lengthNumber: number) {
  return clearString(inputfile).filter(function (element) {
    return element.length >= lengthNumber
  }).length
}

console.log(poemWordsLongerThan('poem.txt', 10))

