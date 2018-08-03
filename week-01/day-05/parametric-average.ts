'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let howManyNumbers: number = Math.ceil(Math.random() * 20);
let generatedNumbers: number[] = [];
let generatedNum: number;
let sum: number = 0;

for (let index = 0; index < howManyNumbers; index++) {
    generatedNum = Math.ceil(Math.random() * 100);
    generatedNumbers.push(generatedNum);
}

for (let iAvg = 0; iAvg < generatedNumbers.length; iAvg++) {
    sum = sum + generatedNumbers[iAvg];     
}

let genNumAvg: number = Math.floor(sum/generatedNumbers.length*100)/100;

console.log(generatedNumbers);
console.log(sum);
console.log(`You - Dear computer,
wanted to generate ${howManyNumbers} numbers
and you provided the following ones:
${generatedNumbers}
The SUM of these numbers is: ${sum}
Their average is: ${genNumAvg}
I hope you have a great day too
xoxo`);


