'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function generateSquareRec(x: number, y: number, size: number, loopNum: number) {
  if (loopNum > 0) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    //ctx.strokeStyle = colorPalette[Math.floor(Math.random()*colorPalette.length)];  
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, size, size);

    size /= 3;
    generateSquareRec(x + size, y, size, loopNum - 1);
    generateSquareRec(x + 2 * size, y + size, size, loopNum - 1);
    generateSquareRec(x + size, y + 2 * size, size, loopNum - 1);
    generateSquareRec(x, y + size, size, loopNum - 1);

  }
}

generateSquareRec(0, 0, canvasWidth, 5);