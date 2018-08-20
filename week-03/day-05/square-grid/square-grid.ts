'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    //ctx.strokeStyle = colorPalette[Math.floor(Math.random()*colorPalette.length)];  
let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function squareGrid(x: number, y: number, size: number, loopNum: number) {
  if (loopNum > 0) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    //ctx.strokeStyle = colorPalette[Math.floor(Math.random()*colorPalette.length)];  
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, size, size);

    size /= 2

    squareGrid(x + 1.5 * size, y - 0.5 * size, size, loopNum-1)
    squareGrid(x + 1.5 * size, y + 1.5 * size, size, loopNum-1)
    squareGrid(x - 0.5 * size, y + 1.5 * size, size, loopNum-1)
    squareGrid(x - 0.5 * size, y - 0.5 * size, size, loopNum-1)
  }
}
let startSize: number = canvasWidth / 2;
let startX: number = startSize / 2;
let startY: number = startSize / 2;

squareGrid(startX, startY, startSize, 6)