'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLines(xIndex: number, yIndex: number) {
    ctx.beginPath()
    ctx.strokeStyle = 'pink';
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke()
}

let distanceOfLines: number = 20;
let xMax: number = canvas.width / distanceOfLines;
let yMax: number = canvas.height / distanceOfLines;

for (let iX = 0; iX < xMax; iX++) {
    for (let jY = 0; jY < yMax; jY++) {
        if (iX == 0 && jY !== 0) {
            drawLines(iX, jY * distanceOfLines);
        } else if (iX != 0 && jY == 0) {
            drawLines(iX * distanceOfLines, jY);
        } else if (iX == xMax && jY !== 0) {
            drawLines(iX, jY * distanceOfLines);
        } else if (iX != 0 && jY == yMax) {
            drawLines(iX * distanceOfLines, jY);
        } else {
            drawLines(iX * distanceOfLines, jY * distanceOfLines);
        }
    }
}