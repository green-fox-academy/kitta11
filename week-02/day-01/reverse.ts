'use strict';
export {};

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   DONE: -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number [] = [3, 4, 5, 6, 7];
console.log(numList.reverse());

//console.log(reversedList);

let tempArray: number []= [];
for (let index = 0; index < numList.length; index++) {
    tempArray.push(numList[index]);
}
console.log(tempArray);

