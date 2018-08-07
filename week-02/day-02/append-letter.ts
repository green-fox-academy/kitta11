'use strict';
export{};

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA (inputArray: string []){
    for (let index = 0; index < inputArray.length; index++) {
        inputArray[index]+='a'        
    }
    return inputArray;    
}
console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
