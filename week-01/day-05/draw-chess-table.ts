'use strict';

let lineNumberChess: number = 8;
let evenChessPattern: string = 'X '
let notEvenChessPattern: string = ' X'

for (let index = 0; index < lineNumberChess; index++) {
    if (index % 2 == 0) {
        console.log(Array(lineNumberChess/2).join(evenChessPattern));
    }
    else
    {
        console.log(Array(lineNumberChess/2).join(notEvenChessPattern));
    }    
}
