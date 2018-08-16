'use strict';
export{};
// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN (baseNumber: number, powerNumber: number): number {
  if (powerNumber===1) {
    return baseNumber;
  } else {
    return baseNumber*powerN(baseNumber, powerNumber-1)
  }
}

console.log(powerN(2,3));
console.log(powerN(5,2));
console.log(powerN(10,5));