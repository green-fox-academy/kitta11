'use strict';
export { };

let lineCount: number = 10;

let sideChar: string = '0';
let innerChar: string = ' ';
let line: string = '';

/*for (let i = 0; i < lineCount; i++) {
    if (i === 0 || i === lineCount - 1) {
        console.log(Array(lineCount).join(sideChar));
    } else {
        console.log(sideChar + Array(lineCount - 2).join(innerChar) + sideChar);
    }
}*/
//in this way I can write x times (currently 10) of a string (currently kutya)
//console.log(Array(10).join('kutya'));

for (let i = 0; i < lineCount; i++) {
    for (let j = 0; j < lineCount; j++) {
        if (i === 0 || i === lineCount - 1 || j === 0 || j === lineCount - 1) {
            line = line + sideChar;
        } else {
            line = line + innerChar
        }
    }
    console.log(line);
    line = '';
}
