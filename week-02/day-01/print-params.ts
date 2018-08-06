'use strict';
export {};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

//Version 1: print it line by line as part of the for loop
function printParams (...restOfParameters: any[]) {
    for (let i = 0, numOfArguments=restOfParameters.length; i < numOfArguments; i++) {
        console.log(restOfParameters[i]);     
    }    
}
printParams('cat','dog', 1, 'unsure', true, 'izebize', 'meghackelek mindent');

//Version 2: print it as an array which was returned by the printParams function
/*function printParams (...restOfParameters: any[]) {
    for (let i = 0, numOfArguments=restOfParameters.length; i < numOfArguments; i++) {
         return restOfParameters;
    }    
}
console.log(printParams('macska','kutya', 1, 'biztos', true, 'izebize', 'meghackelek mindent'));*/
