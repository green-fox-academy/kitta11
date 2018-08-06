'use strict';
export {};
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum (untilWhenSum: number): number {
    let total = 0;
    for (let i = 1; i <= untilWhenSum; i++) {
        total = total + i; 
    }
    return total;   
}
let untilWhenSum: number = Math.floor(Math.random() * 100);
console.log(`The computer wants me to sum numbers from 1 to ${untilWhenSum}
the sum of these numbers is ${sum(untilWhenSum)}
I am unbelievably smart... :)`);
