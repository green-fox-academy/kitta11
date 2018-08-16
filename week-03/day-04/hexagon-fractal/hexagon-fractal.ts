'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const canvasWidth: number = canvas.width;
const canvasHeight: number = canvas.height;

function hexagonDrawer(x: number, y: number, a: number) {
  const h: number = a * Math.sqrt(3) / 2;
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(x, y);
  ctx.lineTo(x + a / 2, y - h);
  ctx.lineTo(x + a / 2 + a, y - h);
  ctx.lineTo(x + 2 * a, y);
  ctx.lineTo(x + a / 2 + a, y + h);
  ctx.lineTo(x + a / 2, y + h);
  ctx.lineTo(x, y);
  ctx.stroke()
}

let sideSize: number = canvasWidth/2;
let startX: number = 0;
let startY: number = canvasHeight/2;
let startH: number = sideSize * Math.sqrt(3) / 2

hexagonDrawer(startX, startY, sideSize)
sideSize/=2;
startH/=2;

hexagonDrawer(startX+sideSize/2, startY-startH, sideSize);
hexagonDrawer(startX+sideSize*2, startY, sideSize);
hexagonDrawer(startX+sideSize/2, startY+startH, sideSize);

sideSize/=2;
startH/=2;

hexagonDrawer(startX+sideSize/2+sideSize, startY-startH-2*startH, sideSize);
hexagonDrawer(startX+sideSize*2+sideSize, startY-2*startH, sideSize);
hexagonDrawer(startX+sideSize/2+sideSize, startY+startH-2*startH, sideSize);

hexagonDrawer(startX+sideSize/2+sideSize+3*sideSize, startY-startH-2*startH+2*startH, sideSize);
hexagonDrawer(startX+sideSize*2+sideSize+3*sideSize, startY-2*startH+2*startH, sideSize);
hexagonDrawer(startX+sideSize/2+sideSize+3*sideSize, startY+startH-2*startH+2*startH, sideSize);

hexagonDrawer(startX+sideSize/2+sideSize, startY-startH+2*startH, sideSize);
hexagonDrawer(startX+sideSize*2+sideSize, startY+2*startH, sideSize);
hexagonDrawer(startX+sideSize/2+sideSize, startY+startH+2*startH, sideSize);