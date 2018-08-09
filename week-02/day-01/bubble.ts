'use strict';
export { };

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

let testArrayOne: number[] = [34, 12, 24, 9, 5];
let testArrayTwo: number[] = [111, 22, 43, 102, 34, 2, 1, 35]

function bubble(inputArray: number[]) {
    let sortedArray: number [] = inputArray.sort(function (a, b) { return a - b });
    return sortedArray;
}

console.log(bubble(testArrayOne));
console.log(bubble(testArrayTwo));

function advancedBubble (inputArray: number[], truth: boolean) {
    let sortedArray: number [] = inputArray.sort(function (a, b) { return a - b });
    if (!truth) {
    return sortedArray;} else {return sortedArray.reverse()}
}

console.log(advancedBubble(testArrayOne, true));
console.log(advancedBubble(testArrayTwo, false));
//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
