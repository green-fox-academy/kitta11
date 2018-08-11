'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth: number = canvas.width;
//triangle side size

//eual side triangle generator based on starting point and side size
function drawEqTriangle(x, y, triangleSideSize) {
    //triangle height
    const height: number = triangleSideSize * Math.sqrt(3) / 2;
    ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.moveTo(x + triangleSideSize / 2, y);
    ctx.lineTo(x + triangleSideSize, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + triangleSideSize / 2, y);
    ctx.stroke()
}
//pattern related variables and loops
const a: number = 50;
const h: number = a * Math.sqrt(3) / 2;
for (let i = 0; i < canvasWidth / a; i++) {
    for (let j = 0; j < i + 1; j++) {
        let startX = canvasWidth / 2 + j * a - (i * a / 2) - a / 2;
        let startY = i * h;
        console.log(startX, startY);
        drawEqTriangle(startX, startY, a);
    }
}

/*This one here helped me to construct the loop
drawEqTriangle(canvasWidth / 2 + 0 * a - 1 * (a / 2), 0 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 2 * (a / 2), 1 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 2 * (a / 2), 1 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 3 * (a / 2), 2 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 3 * (a / 2), 2 * h, a);
drawEqTriangle(canvasWidth / 2 + 2 * a - 3 * (a / 2), 2 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 4 * (a / 2), 3 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 4 * (a / 2), 3 * h, a);
drawEqTriangle(canvasWidth / 2 + 2 * a - 4 * (a / 2), 3 * h, a);
drawEqTriangle(canvasWidth / 2 + 3 * a - 4 * (a / 2), 3 * h, a);
*/