'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth: number = canvas.width;
const canvasHeight: number = canvas.height;
const divider: number = 16;
let distance: number = canvasWidth/divider; 
function drawLine (xStart: number, yStart:number,xEnd: number, yEnd: number, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
}
for (let i = 0; i < canvasWidth/divider; i++) {
    drawLine(i*distance, 0, canvasWidth, i*distance, "pink");    
}

for (let j = 0; j < canvasHeight/divider; j++) {
    drawLine(0, j*distance, j*distance, canvasHeight, "green");    
}