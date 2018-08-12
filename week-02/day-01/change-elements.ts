'use strict';
export { };

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

//solving the problem with splice method
numList.splice(numList.indexOf(8), 1, 4);
console.log(numList);

let numListTwo = [1, 2, 3, 8, 5, 6];

//I do not like map grrr
let changedNumList: number [] = numListTwo.map(function(element) {
    return element/2;
})
console.log(changedNumList);
