
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let startSquareSize: number = 15;
let numberOfSteps: number = 7;
//coordinate variable will help me to calculate the x and y coordinates step by step
let coordinate: number = startSquareSize; 
for (let index = 0; index < numberOfSteps; index++) {
    ctx.fillStyle = "purple";
    ctx.fillRect(coordinate, coordinate, index*startSquareSize, index*startSquareSize);
    //I add to the sum of the coordinates the current square size
    coordinate = coordinate + index * startSquareSize;
}