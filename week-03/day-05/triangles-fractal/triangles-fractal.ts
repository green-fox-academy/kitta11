'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth: number = canvas.width;
const canvasHeight: number = canvas.height;
//triangle side size

//equal side triangle generator based on starting point and side size
function drawEqTriangle(x, y, size) {
  //triangle height
  let height: number = size * Math.sqrt(3) / 2;
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x + size / 2, y + height);
  ctx.lineTo(x - size / 2, y + height);
  ctx.lineTo(x, y);
  ctx.stroke()

}

function triangleFractal(x: number, y: number, size: number, loopNo: number) {
  if (loopNo > 1) {
    let startH: number = size * Math.sqrt(3) / 2;
    drawEqTriangle(x, y, size);

    let startXOne: number = x + size / 2
    let startYOne: number = y;
    let startXTwo: number = x;
    let startYTwo: number = y + startH;
    let startXThree: number = x - size / 2;
    let startYThree: number = y;

    size /= 2;
    startH /= 2;

    triangleFractal(startXOne, startYOne, size, loopNo - 1)
    triangleFractal(startXTwo, startYTwo, size, loopNo - 1)
    triangleFractal(startXThree, startYThree, size, loopNo - 1)
  }
}

let startSize: number = canvasWidth / 2;
let startX: number = canvasWidth / 2;
let startY: number = 0;

triangleFractal(startX, startY, startSize, 7)

