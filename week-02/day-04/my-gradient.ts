'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasHeight: number = canvas.height;
const canvasWidth: number = canvas.width;
const gradWidth: number = 20;
const GradColNo: number = canvasWidth / gradWidth;
let xIndex: number = 0;
const alpha: number = 1;

let colorLeftRed: number = 100;
let colorLeftGreen: number = 45;
let colorLeftBlue: number = 16;

let colorRightRed: number = 36;
let colorRightGreen: number = 12;
let colorRightBlue: number = 255;

let redStep: number = (colorRightRed-colorLeftRed)/(GradColNo-2);
let greenStep: number = (colorRightGreen-colorLeftGreen)/(GradColNo-2);
let blueStep: number = (colorRightBlue-colorLeftBlue)/(GradColNo-2);

function colorConcate(r: number, g: number, b: number) {
    let gradColor: string = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return gradColor
}

let colorLeft: string = colorConcate(colorLeftRed, colorLeftGreen, colorLeftBlue);
let colorRight: string = colorConcate(colorRightRed, colorRightGreen, colorRightBlue);
let gradColor: string = "rgba(180, 200, 220, 1)";

function drawGradRectangle(xIndex, gradColor) {
    ctx.fillStyle = gradColor;
    ctx.fillRect(xIndex, 0, gradWidth, canvasHeight)
}

drawGradRectangle(xIndex, colorLeft);
drawGradRectangle(canvasWidth - gradWidth, colorRight);
for (let xIndex = 1; xIndex < GradColNo - 1; xIndex++) {
    let gradColorRed: number = colorLeftRed+xIndex*redStep;
    let gradColorGreen: number = colorLeftGreen+xIndex*greenStep;
    let gradColorBlue: number = colorLeftBlue+xIndex*blueStep;
    let gradColor: string = colorConcate(gradColorRed, gradColorGreen, gradColorBlue)
    drawGradRectangle(xIndex * gradWidth, gradColor);
}

    





