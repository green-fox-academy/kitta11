'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const halfCanvas: number = canvas.width / 2;
const divider: number = 40;
let distance: number = halfCanvas / divider;
console.log(distance);
console.log(halfCanvas / divider);

function drawLine(xStart: number, yStart: number, xEnd: number, yEnd: number, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
}

//Note: if I set i=0 than I have line in the middle but I need to set i<=div too
//Note2: check whether I can modify the drawing tech in a way that I need only one for loop with ifs

for (let i = 0; i <= divider; i++) {
    drawLine(halfCanvas - i * distance, halfCanvas, halfCanvas, i * distance, "pink");
}

for (let i = 0; i <= divider; i++) {
    drawLine(halfCanvas, i * distance, i * distance + halfCanvas, halfCanvas, "pink");
}

for (let i = 0; i <= divider; i++) {
    drawLine(i * distance, halfCanvas, halfCanvas, halfCanvas + i * distance, "pink");
}

for (let i = 1; i <= divider; i++) {
    drawLine(i * distance + halfCanvas, halfCanvas, halfCanvas, halfCanvas * 2 - i * distance, "pink");
}
