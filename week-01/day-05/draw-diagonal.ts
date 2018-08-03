'use strict';

let lineDiagonalCount: number = 16;

let patternOne: string = ' ';
let patternTwo: string = 'o';
let linepattern: string = '';

for (let i = 0; i < lineDiagonalCount; i++) {
    for (let j = 0; j < lineDiagonalCount; j++) {
        if (j == i || j==0 || j==lineDiagonalCount-1 || i==0 || i==lineDiagonalCount-1) {
            linepattern += patternTwo
        }
        else 
        {
            linepattern += patternOne
        }                
    }
    console.log(linepattern);
    linepattern= '';
}
