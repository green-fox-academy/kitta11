'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.


let chessSquareSize: number = 30;
let numberOfCol: number = canvas.width / chessSquareSize;
let numberOfRow: number = canvas.height / chessSquareSize;

for (let indexRow = 0; indexRow < numberOfRow; indexRow++) {
    if (indexRow % 2) {
        for (let indexCol = 0; indexCol < numberOfCol; indexCol++) {
            if (indexCol % 2) {
                ctx.fillStyle = "black";
                ctx.fillRect(indexCol * chessSquareSize, indexRow * chessSquareSize, chessSquareSize, chessSquareSize);
            } else {
                ctx.fillStyle = "white";
                ctx.fillRect(indexCol * chessSquareSize, indexRow * chessSquareSize, chessSquareSize, chessSquareSize);
            }
        }
    } else {
        for (let indexCol = 0; indexCol < numberOfCol; indexCol++) {
            if (indexCol % 2) {
                ctx.fillStyle = "white";
                ctx.fillRect(indexCol * chessSquareSize, indexRow * chessSquareSize, chessSquareSize, chessSquareSize);
            } else {
                ctx.fillStyle = "black";
                ctx.fillRect(indexCol * chessSquareSize, indexRow * chessSquareSize, chessSquareSize, chessSquareSize);
            }
        }
    }
}
