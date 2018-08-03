'use strict';

let lineCount: number = 6;

let sideSquare: string = '%';
let innerSquare: string = ' ';

for (let index = 1; index <= lineCount; index++) {
    if (index === 1 || index === lineCount) {
        console.log(Array(lineCount).join(sideSquare));
    }   
    else  
    {
        console.log(sideSquare + Array(lineCount - 2).join(innerSquare) + sideSquare);
    }
}