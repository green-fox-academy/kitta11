'use strict';
export {};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
function reverse(inputString:string) {
    let stringArray: string [] = inputString.split('');
    let reversedArray: string [] = stringArray.reverse();
    let reversedString: string = reversedArray.join('');
    return reversedString    
}

console.log(reverse(reversed));

