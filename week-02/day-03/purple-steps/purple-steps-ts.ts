'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


let squareSize: number = 20;
let numberOfSteps: number = canvas.height/squareSize
for (let index = 1; index < numberOfSteps; index++) {
    ctx.fillStyle = "purple";
    ctx.fillRect(index * squareSize, index * squareSize, squareSize, squareSize);
}