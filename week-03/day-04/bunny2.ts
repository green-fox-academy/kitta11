'use strict';
export { };
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function weirdBunnyEarsCounter(numbOfBunnies: number): number {
  if (numbOfBunnies > 0) {
    if (numbOfBunnies % 2 === 1) {
      return 2 + weirdBunnyEarsCounter(numbOfBunnies - 1)
    } else {
      return 3 + weirdBunnyEarsCounter(numbOfBunnies - 1)
    }
  } else {
    return 0;
  }
}

console.log(weirdBunnyEarsCounter(7));
console.log(weirdBunnyEarsCounter(8));
console.log(weirdBunnyEarsCounter(9));
console.log(weirdBunnyEarsCounter(10));
console.log(weirdBunnyEarsCounter(11));
