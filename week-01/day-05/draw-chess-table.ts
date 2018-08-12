'use strict';

let lineNumberChess: number = 14;
let evenChessPattern: string = 'X '
let notEvenChessPattern: string = ' X'

/*
//this solution is using a method I found on the next but I need more explanation
for (let i = 0; i < lineNumberChess; i++) {
    if (i % 2 == 0) {
        console.log(Array(lineNumberChess/2).join(evenChessPattern));
    }
    else
    {
        console.log(Array(lineNumberChess/2).join(notEvenChessPattern));
    }    
}
*/

let aChar: string = 'XO';
let bChar: string = 'OX';
let line: string = ''
for (let i = 0; i < lineNumberChess; i++) {
    for (let j = 0; j < lineNumberChess; j++) {
        if (i % 2 === 1 && j % 2 === 1) {
            line += aChar;
        } else if (i%2===0 && j % 2 === 1) {
            line += bChar
        } else {}
    };
    console.log(line);
    line = ''
}