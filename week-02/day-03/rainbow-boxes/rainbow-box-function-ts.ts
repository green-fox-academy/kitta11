'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

//the function generates a square with a given color
function squareDrawTwoParam (squareSize: number, squareColor: string) {
    ctx.fillStyle = squareColor;
    ctx.fillRect((canvas.width-squareSize)/2, (canvas.height-squareSize)/2, squareSize, squareSize);
}
let rainbowColorsArray: string []=["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
let rainbowWidth: number = canvas.height/rainbowColorsArray.length/2;
for (let index = rainbowColorsArray.length; index > 0; index--) {
    let color = rainbowColorsArray[index-1];
    squareDrawTwoParam(index*rainbowWidth*2,color);
}

