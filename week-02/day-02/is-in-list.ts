'use strict';
export{};
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums (inputArray: number[]) {
    if (inputArray.indexOf(4) > 0 && inputArray.indexOf(8) > 0 && inputArray.indexOf(12) > 0 && inputArray.indexOf(16) > 0) 
    {
        return true;
    } else {
        return false;
    };
}
console.log(checkNums(listOfNumbers));