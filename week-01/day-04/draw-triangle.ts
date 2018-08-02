'use strict';

let lineCount: number = 4;


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let stars: string = '*';

for (let indexLine = 1; indexLine <= lineCount; indexLine++) {
    console.log(stars);
    stars = stars + '*';
    }

//does not work in TS    console.log('*'.repeat(count: index));    


