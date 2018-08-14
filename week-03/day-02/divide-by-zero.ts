'use strict';
export { };

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen(divider: number): number {
  try {
    if (divider === 0) {
      throw new Error('You failed this baby');
    }
    else {
      return (10 / divider);
    }
  } catch (e) {
    console.log(e.message);
  }
}

console.log(divideTen(0));
console.log(divideTen(5));



