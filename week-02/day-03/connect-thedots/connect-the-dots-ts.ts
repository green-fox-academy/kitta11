'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function connectTheDots(inputArray: number[][]) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo (inputArray[0][0], inputArray[0][1]);
    for (let i = 1; i < inputArray.length; i++) {
        ctx.lineTo(inputArray[i][0], inputArray[i][1])
    };
    ctx.lineTo(inputArray[0][0], inputArray[0][1]);
    ctx.stroke(); 
}

let arrayOne: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let arrayTwo: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
connectTheDots(arrayOne);
connectTheDots(arrayTwo);