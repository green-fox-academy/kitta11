'use strict';
export {};

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList = [1, 2, 3];
let secondList = [4, 5];
if (secondList.length > firstList.length) {
    console.log(`[${secondList}] has more elements than [${firstList}]`);
} else {
    console.log(`Que linda es este dia... No [${secondList}] has not more elements than [${firstList}]`);
    
    
}