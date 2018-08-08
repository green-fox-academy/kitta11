'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

//the function generates a square with a random color
function squareDrawTwoParam (squareSize: number, squareColor: string) {
    ctx.fillStyle = squareColor;
    ctx.fillRect((canvas.width-squareSize)/2, (canvas.height-squareSize)/2, squareSize, squareSize);
}
//Generates a number which defines the width of a rainbow line
let rainbowWidth: number = (Math.floor(Math.random()*8))*10;
//let rainbowWidth: number = 20;
//calculates based on the rainbow width and the canvas size the number of rainbow squares
let rainbowColorNumber: number = canvas.height/2/rainbowWidth;
//draw that many squares as we have based on the rainbowcolornumber
for (let index = rainbowColorNumber; index > 0; index--) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`; 
    squareDrawTwoParam(index*rainbowWidth*2,color);
}

