'use strict';
export { };
// Write a function that joins two array by matching one girl with one boy in a new array
// Expected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchMaking(inputArrayOne: string[], inputArrayTwo: string[]) {
    let matchedArray: string[] = [];
    let matchedIndex: number = 0;
    let noPairList: string [] = [];
    for (let index = 0; index < inputArrayTwo.length && index < inputArrayOne.length; index++) {
        matchedArray[matchedIndex] = inputArrayOne[index];
        matchedIndex++;
        matchedArray[matchedIndex] = inputArrayTwo[index];
        matchedIndex++;
    }
    return console.log(`
The pairs: ${matchedArray}`)
//They dont have pairs: ${noPairList}`);
}
matchMaking(girls, boys);
