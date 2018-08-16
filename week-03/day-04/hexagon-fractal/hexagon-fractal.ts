'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
const canvasWidth: number = canvas.width;
const canvasHeight: number = canvas.height;


function hexagonDrawer(x: number, y: number, a: number) {
  const h: number = a * Math.sqrt(3) / 2;
  ctx.beginPath();
  ctx.strokeStyle = "dark grey";
  ctx.moveTo(x, y);
  ctx.lineTo(x + a / 2, y - h);
  ctx.lineTo(x + a / 2 + a, y - h);
  ctx.lineTo(x + 2 * a, y);
  ctx.lineTo(x + a / 2 + a, y + h);
  ctx.lineTo(x + a / 2, y + h);
  ctx.lineTo(x, y);
  ctx.stroke()
}


function hexagonFractal(x: number, y: number, size: number, loopNo: number) {
  if (loopNo > 1) {
    let startH: number = size * Math.sqrt(3) / 2
    let startXOne: number = x + size / 4;
    let startXTwo: number = x + size;
    let startXThree: number = x + size / 4;
    let startYOne: number = y - startH / 2;
    let startYTwo: number = y;
    let startYThree: number = y + startH / 2;

    hexagonDrawer(x, y, size)
    hexagonDrawer(startXOne, startYOne, size / 2);
    hexagonDrawer(startXTwo, startYTwo, size / 2);
    hexagonDrawer(startXThree, startYThree, size / 2);

    size /= 2;
    startH /= 2;

    hexagonFractal(startXOne, startYOne, size, loopNo - 1);
    hexagonFractal(startXTwo, startYTwo, size, loopNo - 1);
    hexagonFractal(startXThree, startYThree, size, loopNo - 1);
  }
}

let startX: number = 0;
let startY: number = canvasHeight / 2;
let startSize: number = canvasWidth / 2;

hexagonFractal(startX, startY, startSize, 6)