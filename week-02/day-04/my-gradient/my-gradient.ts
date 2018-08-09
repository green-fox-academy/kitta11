'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasHeight: number = canvas.height;
const canvasWidth: number = canvas.width;
const gradWidth: number = 10;
const GradColNo: number = canvasWidth / gradWidth;
let xIndex: number = 0;
const alpha: number = 0.8;

//function to generate rgba string based on dynamically generated r, g, b, a codes
function colorConcate(r: number, g: number, b: number) {
    let gradColor: string = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return gradColor
}
//function to draw a rectangle using x spectrum coordinate and dynamicly changing color
function drawGradRectangle(xIndex, gradColor) {
    ctx.fillStyle = gradColor;
    ctx.fillRect(xIndex, 0, gradWidth, canvasHeight)
}

//Setting left side color
let colorLeftRed: number = 13;
let colorLeftGreen: number = 58;
let colorLeftBlue: number = 25;
let colorLeft: string = colorConcate(colorLeftRed, colorLeftGreen, colorLeftBlue);

//Setting right side color numbers
let colorRightRed: number = 194;
let colorRightGreen: number = 121;
let colorRightBlue: number = 225;
let colorRight: string = colorConcate(colorRightRed, colorRightGreen, colorRightBlue);

// lets begin to draw, first the left and right side
drawGradRectangle(xIndex, colorLeft);
drawGradRectangle(canvasWidth - gradWidth, colorRight);

//calculation of the diff I need to use to define the next col rgb code
let redStep: number = (colorRightRed-colorLeftRed)/(GradColNo-2);
let greenStep: number = (colorRightGreen-colorLeftGreen)/(GradColNo-2);
let blueStep: number = (colorRightBlue-colorLeftBlue)/(GradColNo-2);

//drawing the inner gradients
for (let xIndex = 1; xIndex < GradColNo - 1; xIndex++) {
    let gradColorRed: number = colorLeftRed+xIndex*redStep;
    let gradColorGreen: number = colorLeftGreen+xIndex*greenStep;
    let gradColorBlue: number = colorLeftBlue+xIndex*blueStep;
    let gradColor: string = colorConcate(gradColorRed, gradColorGreen, gradColorBlue)
    drawGradRectangle(xIndex * gradWidth, gradColor);
}

    





