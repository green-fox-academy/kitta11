'use strict';
// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

let integers = [4, 5, 6, 7];

//using a loop
for (let index = 0; index < integers.length; index++) {
    console.log(integers[index]);
}

//using the built in array method
console.log(integers.toString());

//using forEach
console.log(integers.forEach(function(element) {console.log(element);
}));

