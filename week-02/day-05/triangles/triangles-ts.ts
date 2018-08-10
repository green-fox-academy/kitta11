'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth: number = canvas.width;
const bigTriangleHeight: number = canvasWidth * Math.sqrt(3) / 2;
//let nuOfTri: number (bigTriangleHeight)

console.log(canvasWidth, bigTriangleHeight);

//triangle side size
const a: number = 50;
const h: number = a * Math.sqrt(3) / 2;

function drawEqTriangle(x, y, triangleSideSize) {
    //triangle height
    const height: number = triangleSideSize * Math.sqrt(3) / 2;
    console.log(x, y, height, triangleSideSize / 2);
    ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.moveTo(x + triangleSideSize / 2, y);
    ctx.lineTo(x + triangleSideSize, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + triangleSideSize / 2, y);
    ctx.stroke()
}



for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i+1; j++) {
        drawEqTriangle(canvasWidth / 2 + 0 * a - j * (a / 2), (j - 1) * h, a);
    }
}

/*drawEqTriangle(canvasWidth / 2 + 0 * a - 1 * (a / 2), 0 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 2 * (a / 2), 1 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 2 * (a / 2), 1 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 3 * (a / 2), 2 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 3 * (a / 2), 2 * h, a);
drawEqTriangle(canvasWidth / 2 + 2 * a - 3 * (a / 2), 2 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 4 * (a / 2), 3 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 4 * (a / 2), 3 * h, a);
drawEqTriangle(canvasWidth / 2 + 2 * a - 4 * (a / 2), 3 * h, a);
drawEqTriangle(canvasWidth / 2 + 3 * a - 4 * (a / 2), 3 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 5 * (a / 2), 4 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 5 * (a / 2), 4 * h, a);
drawEqTriangle(canvasWidth / 2 + 2 * a - 5 * (a / 2), 4 * h, a);
drawEqTriangle(canvasWidth / 2 + 3 * a - 5 * (a / 2), 4 * h, a);
drawEqTriangle(canvasWidth / 2 + 4 * a - 5 * (a / 2), 4 * h, a);

drawEqTriangle(canvasWidth / 2 + 0 * a - 6 * (a / 2), 5 * h, a);
drawEqTriangle(canvasWidth / 2 + 1 * a - 6 * (a / 2), 5 * h, a);
drawEqTriangle(canvasWidth / 2 + 2 * a - 6 * (a / 2), 5 * h, a);
drawEqTriangle(canvasWidth / 2 + 3 * a - 6 * (a / 2), 5 * h, a);
drawEqTriangle(canvasWidth / 2 + 4 * a - 6 * (a / 2), 5 * h, a);
drawEqTriangle(canvasWidth / 2 + 5 * a - 6 * (a / 2), 5 * h, a);

*/
/*drawEqTriangle(drawEqTriangle(0, 0, canvasWidth), drawEqTriangle(0, 0, canvasWidth / 2), drawEqTriangle(0, 0, canvasWidth / 4));

for (let i = 0; i < 6; i++) {
    drawEqTriangle(drawEqTriangle(a * i, a * i, a), drawEqTriangle(a * i + a / 2, a * i + a / 2, a / 2), drawEqTriangle(a * i + a * 2, a * i + a * 2, a * 2));
}*/
