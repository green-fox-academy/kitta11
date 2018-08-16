'use strict';
export { };
// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(inputNumber: number): number {
  let totalDigit: number = 0;
  if (inputNumber > 10) {
    totalDigit += (Math.floor(inputNumber % 10) + sumDigits(Math.floor(inputNumber) / 10))
    console.log(
      `inputNumber: ${inputNumber}
      inputNumber%10: ${inputNumber % 10}, 
      totalDigit: ${totalDigit}`)
  } else {
    totalDigit+= Math.floor(inputNumber);
    console.log(
      `inputNumber: ${inputNumber}
      totalDigit: ${totalDigit}`)

  }
  return totalDigit
}

console.log(sumDigits(26789));
// console.log(sumDigits(365));