'use strict';
export { };
// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(inputNumber: number): void {
  if (inputNumber < 0 ) {
    console.log('You reached the border of positivity');
  } else {
    console.log(inputNumber)
    return countDown(inputNumber-1);
  }
}

console.log(countDown(10));
console.log(countDown(5));
console.log(countDown(-10));
//task: how to countinue on the negative number playfield
