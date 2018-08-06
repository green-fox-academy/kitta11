'use strict';
export {};
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];
//swapping in this case is the same as reversing
//console.log(abc.reverse());

//here I tried the array destructuring but it seems to be a little complicated:)
let [first, second, third] = abc;
//testing the success of destructuring
console.log(third);
console.log(first);

//making the swap
abc[0]=third;
abc[2]=first;
//print the modified array
console.log(abc);



