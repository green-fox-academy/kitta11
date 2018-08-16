'use strict';
export {};
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addingNumbers (inputNumber: number): number {
  if (inputNumber>0) {
    return inputNumber + addingNumbers(inputNumber-1);
  } else {
    return 0;
  }
}

console.log(addingNumbers(4));
console.log(addingNumbers(10));
console.log(addingNumbers(80));

