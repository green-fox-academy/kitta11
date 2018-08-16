'use strict';
export { };

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEarsCounter(numbOfBunnies: number): number {
  if (numbOfBunnies > 0) {
    return 2 + bunnyEarsCounter(numbOfBunnies-1)
  } else {
    return 0;
  }
}

console.log(bunnyEarsCounter(30));
console.log(bunnyEarsCounter(10));
