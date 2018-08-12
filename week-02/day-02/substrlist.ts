'use strict';
export { };
//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list
//  Example
//console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
//console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`

function substrlist(lookUpString: string, inputArray: string[]) {
    if (inputArray.toString().search(lookUpString) !== -1) {
        console.log(`"${lookUpString}" is in the sentence`);
    } else {
        console.log(`"${lookUpString}" can not be found in the sentence`);
    }
}

substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']);
//  should print: `4`
substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']);
//  should print: `-1`
