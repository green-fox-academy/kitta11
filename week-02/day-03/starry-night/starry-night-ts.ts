
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function starDrawing (xIndex: number, yIndex: number, starSize: number) {
    //z helps me to model the stardrawing steps
    let z: number= starSize/8;
    ctx.beginPath();
    ctx.fillStyle = "LightGoldenRodYellow";
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(xIndex+z, yIndex+3*z);
    ctx.lineTo(xIndex+4*z, yIndex+4*z);
    ctx.lineTo(xIndex+z, yIndex+5*z);
    ctx.lineTo(xIndex, yIndex+8*z);
    ctx.lineTo(xIndex-z, yIndex+5*z);
    ctx.lineTo(xIndex-4*z, yIndex+4*z);
    ctx.lineTo(xIndex-z, yIndex+3*z);
    ctx.lineTo(xIndex, yIndex);
    ctx.fill();
}
ctx.fillStyle= "black";
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fill();
let numberOfStars: number = 100;
for (let index = 0; index < numberOfStars; index++) {
   let xI: number = Math.floor(Math.random()*canvas.width);
   let yI: number = Math.floor(Math.random()*canvas.height);
   let generatedStarSize: number = Math.floor(Math.random()*canvas.height/20);
   starDrawing(xI, yI, generatedStarSize);    
}
