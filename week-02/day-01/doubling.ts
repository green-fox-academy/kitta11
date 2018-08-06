'use strict';
let baseNum: number = 123;
//I used this other variable to demonstrate how we can reuse a function
let numberOfCats: number = 20;
function doubling (inputNumber: number): number {
    return inputNumber*2;
}

console.log(doubling(baseNum));
console.log(doubling(numberOfCats));