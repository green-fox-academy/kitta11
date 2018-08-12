'use strict';
export { };
'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

let arrayIntOne: number[] = [1, 11, 34, 52, 61];
let arrayIntTwo: number[] = [1, 11, 34, 52, 61, 133, 300];
let lookUp: string = '1';

function subInt(inputArray: any[], lookUpNo: string) {
    let tempArrayString: string[] = [];
    let filteredArray: any [] = []
    for (let i = 0; i < inputArray.length; i++) {
        tempArrayString.push(inputArray[i].toString());
    }
    for (let i = 0; i < tempArrayString.length; i++) {
        filteredArray.push(tempArrayString.filter(function (element) {
            return element.toString().search(lookUpNo) !== -1;
        }));
    }
    return filteredArray;
}

console.log(subInt(arrayIntOne, lookUp));
console.log(subInt(arrayIntTwo, '3'));




// Example
//console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

