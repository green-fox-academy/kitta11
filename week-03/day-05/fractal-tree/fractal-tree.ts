'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth: number = canvas.width;
const canvasHeight: number = canvas.height;

let x: number = canvasWidth/2;
let width: number = 3;
let height: number = 100;
let y: number = canvasHeight-height;
let translateX: number = x +

ctx.save();
// first rect
ctx.fillStyle = 'blue';
ctx.fillRect(x, y, width, height); 
ctx.translate(x+0.5*width, y+0.5*height); 
ctx.rotate((Math.PI / 180) * 60);
ctx.translate(-x+0.5*width, -y+0.5*height); 
ctx.fillStyle = 'black';
ctx.fillRect(x, y-height, width, height); 
ctx.restore();

