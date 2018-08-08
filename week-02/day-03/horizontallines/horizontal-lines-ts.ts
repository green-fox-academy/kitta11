'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawLine (xIndex: number, yIndex: number) {
    ctx.beginPath();
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    //ctx.strokeStyle = colorPalette[Math.floor(Math.random()*colorPalette.length)];  
    ctx.strokeStyle = color;
    ctx.moveTo(xIndex, yIndex);
    ctx.lineTo(xIndex+50, yIndex);
    ctx.stroke();    
}

let indexMaxNo: number = Math.floor(Math.random()*100);
for (let index = 0; index < indexMaxNo; index++) {
    let x: number = Math.floor(Math.random()*canvas.width);
    let y: number = Math.floor(Math.random()*canvas.height);
    drawLine(x, y);
} 