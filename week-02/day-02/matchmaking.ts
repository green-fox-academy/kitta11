'use strict';
export { };
// Write a function that joins two array by matching one girl with one boy in a new array
// Expected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchMaking(inputArrayOne: string[], inputArrayTwo: string[]) {
    let matchedArray: string[] = [];
    let matchedi: number = 0;
    //let noPairList: string [] = [];
    for (let i = 0; i < inputArrayTwo.length && i < inputArrayOne.length; i++) {
        matchedArray[matchedi] = inputArrayOne[i];
        matchedi++;
        matchedArray[matchedi] = inputArrayTwo[i];
        matchedi++;
    }
    console.log(`
The pairs: ${matchedArray}`)
    //They dont have pairs: ${noPairList}`);
}
matchMaking(girls, boys);

function MatchMakingPush(inputArrayOne: string[], inputArrayTwo: string[]) {
    let matchedArray: string[] = [];
    for (let i = 0; i < inputArrayTwo.length && i < inputArrayOne.length; i++) {
        matchedArray.push(inputArrayOne[i]);
        matchedArray.push(inputArrayTwo[i]);
    }
    console.log(`
    The pairs: ${matchedArray}`)
}
MatchMakingPush(girls, boys);