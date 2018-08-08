'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawingSquare (squareSize: number) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`; 
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width/2)-(squareSize/2), (canvas.height/2)-(squareSize/2), squareSize, squareSize);
}

for (let index = 0; index < 4; index++) {
    let x: number = Math.floor(Math.random()*canvas.height/2);
    drawingSquare(x);
}