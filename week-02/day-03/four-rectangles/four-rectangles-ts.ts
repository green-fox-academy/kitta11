'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let indexMaxRec: number = Math.floor(Math.random()*6);
for (let index = 0; index < indexMaxRec; index++) {
    let widthRectangle: number = Math.floor(Math.random()*canvas.width/3);
    let heightRectangle: number = Math.floor(Math.random()*canvas.height/3);
    let xIndex: number = Math.floor(Math.random()*canvas.width/4);
    let yIndex: number = Math.floor(Math.random()*canvas.height/4);
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    
    ctx.fillStyle = color;
    ctx.fillRect(xIndex, yIndex, widthRectangle, heightRectangle);
}