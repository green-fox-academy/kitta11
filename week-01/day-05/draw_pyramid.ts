'use strict';

let lineCount2: number = 4;

let space1: string = '---';
let starsCenter: string = '*';
console.log(space1 + starsCenter + space1);

for (let index = 1; index < lineCount2; index++) {
    space1 = space1.replace('-','');
    starsCenter = '*' + starsCenter + '*';
    console.log(space1 + starsCenter + space1);
}