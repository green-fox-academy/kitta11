'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

ctx.beginPath();
ctx.moveTo(0,0);
ctx.strokeStyle = 'green';
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width,0);
ctx.strokeStyle = 'red';
ctx.lineTo(0, canvas.height);
ctx.stroke();
