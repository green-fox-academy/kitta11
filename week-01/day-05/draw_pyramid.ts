'use strict';

let lineCount2: number = 30;

let space1: string = '';
for (let j = 0; j < Math.floor(lineCount2/2); j++) {
    space1 = space1 + '-';
}
let starsCenter: string = '*';

for (let index = 0; index < lineCount2/2; index++) {
    space1 = space1.replace('-','');
    starsCenter = '*' + starsCenter + '*';
    console.log(space1 + starsCenter + space1);
}
