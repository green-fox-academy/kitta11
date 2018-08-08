'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawTheLine (inputX:number, inputY: number) {
    //let colorPalette: string []=['red', 'blue', 'pink', 'orange', 'green', 'purple', 'black']
    ctx.beginPath();
    //RGB color generator fuck yeah
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    //ctx.strokeStyle = colorPalette[Math.floor(Math.random()*colorPalette.length)];  
    ctx.strokeStyle = color;
    ctx.moveTo(inputX, inputY);
    ctx.lineTo(canvas.width/2, canvas.height/2)
    ctx.stroke();    
}

let indexMax: number = Math.floor(Math.random()*50);
for (let index = 0; index < indexMax; index++) {
    let x: number = Math.floor(Math.random()*canvas.width);
    let y: number = Math.floor(Math.random()*canvas.height);
    drawTheLine(x, y);
} 