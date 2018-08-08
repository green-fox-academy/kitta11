'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

let colorPalette: string []=['pink', 'green', 'blue', 'yellow'];

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.strokeStyle = colorPalette[0];
ctx.lineTo(450,50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450,50);
ctx.strokeStyle = colorPalette[1];
ctx.lineTo(450,350);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 350);
ctx.strokeStyle = colorPalette[2];
ctx.lineTo(50,350);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 350);
ctx.strokeStyle = colorPalette[3];
ctx.lineTo(50,50);
ctx.stroke();