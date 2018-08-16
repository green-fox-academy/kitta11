'use strict';
export { };

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(inputNumber: number): any {
  let errorMessage: string = "we are not in the business of negativity! please provide a number bigger than 0"
  if (inputNumber <= 0) {
    return errorMessage
  } else {
    if (inputNumber === 1) {
      return 1;
    } else {
      return inputNumber * refactorio(inputNumber - 1)
    }
  }
}

console.log(refactorio(4));
console.log(refactorio(7));
console.log(refactorio(-7));

