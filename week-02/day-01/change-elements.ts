'use strict';
export {};

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

//solving the problem with splice method
//numList.splice(3, 1, 4);
//console.log(numList);

let changedNumList = numList.map(function(elem:number) {
    return elem/2;
});

console.log(changedNumList[3]);
