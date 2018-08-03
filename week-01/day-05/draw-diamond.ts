'use strict';
let lineCountDiamond: number = 20;


let sideBlock: string = '' 
for (let j = 0; j < Math.floor(lineCountDiamond/2); j++) {
    sideBlock = sideBlock + '-';
}
let diamondStar: string = '*';

console.log(sideBlock + diamondStar + sideBlock);

for (let index = 0; index < lineCountDiamond; index++) {
    if (index <= (Math.ceil(lineCountDiamond/2)-1)) {
    sideBlock = sideBlock.replace('-','');
    diamondStar = '*' + diamondStar + '*';
    console.log(sideBlock + diamondStar + sideBlock);
} else {
    diamondStar = diamondStar.replace('**','');
    sideBlock = sideBlock + '-';
    console.log(sideBlock + diamondStar + sideBlock);}
}
