'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    //ctx.strokeStyle = colorPalette[Math.floor(Math.random()*colorPalette.length)];  
let canvasWidth: number = canvas.width;
let canvasHeight: number = canvas.height;

function generateSquareRec(xStart: number, yStart: number, startSize: number, loopNum: number) {
  if (loopNum > 0) {
    ctx.strokeStyle = 'purple';
    ctx.strokeRect(xStart + startSize, yStart, startSize, startSize);
    ctx.strokeRect(xStart + 2 * startSize, yStart + startSize, startSize, startSize);
    ctx.strokeRect(xStart, yStart + startSize, startSize, startSize);
    ctx.strokeRect(xStart + startSize, yStart + 2 * startSize, startSize, startSize);
    
    startSize /= 3;
    generateSquareRec(xStart+startSize*3, yStart, startSize, loopNum - 1);
    generateSquareRec(xStart+startSize*6, yStart+startSize*3, startSize, loopNum - 1);
    generateSquareRec(xStart+startSize*3, yStart+startSize*6, startSize, loopNum - 1);
    generateSquareRec(xStart, yStart+startSize*3, startSize, loopNum - 1);

  } else {
  }
}

generateSquareRec(0, 0, canvasWidth/3, 5);