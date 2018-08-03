'use strict';
let lineCountDiamond: number = 7;


let sideBlock: string = '---';
let diamondStar: string = '*';
console.log(sideBlock + diamondStar + sideBlock);

for (let index = 1; index < lineCountDiamond; index++) {
    if (index <= Math.floor(lineCountDiamond/2)) {
    sideBlock = sideBlock.replace('-','');
    diamondStar = '*' + diamondStar + '*';
    console.log(sideBlock + diamondStar + sideBlock);
} else {
    diamondStar = diamondStar.replace('**','');
    sideBlock = sideBlock + '-';
    console.log(sideBlock + diamondStar + sideBlock);}
}