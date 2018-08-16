'use strict';
export { };

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEarsCounter(numbOfBunnies: number): number {
  let totalEars: number = 0
  if (numbOfBunnies > 0) {
    totalEars = 2 + bunnyEarsCounter(numbOfBunnies-1)
  } else {
    return 0;
  }
  return totalEars
}

console.log(bunnyEarsCounter(30));
console.log(bunnyEarsCounter(10));
