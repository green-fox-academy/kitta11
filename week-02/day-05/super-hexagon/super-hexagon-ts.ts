'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function hexagonDrawer(x: number, y: number, a: number) {
    //hexagon is 6 eq triangles so we can use the sidesize (a) and height (h) to calc the track
    const h: number = a * Math.sqrt(3) / 2;
    ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.moveTo(x, y);
    ctx.lineTo(x + a / 2, y - h);
    ctx.lineTo(x + a / 2 + a, y - h);
    ctx.lineTo(x + 2 * a, y);
    ctx.lineTo(x + a / 2 + a, y + h);
    ctx.lineTo(x + a / 2, y + h);
    ctx.lineTo(x, y);
    ctx.stroke()
}
const canvasWidth: number = canvas.width;
const hexA: number = 20;
const hexH: number = hexA * Math.sqrt(3) / 2;

const bigHexsize: number = 6;
let startX: number = (canvasWidth - ((bigHexsize * 2) + (bigHexsize - 1)) * hexA) / 2;
let startY: number = 2 * (bigHexsize - 1) * hexH;

let minus = 0;
for (let j = 0; j < ((bigHexsize * 2 - 1) / 2); j++) {
    for (let i = 0; i < j + 4; i++) {
        hexagonDrawer(startX, startY + (i * 2 * hexH), hexA);
    }
    startX += 3 / 2 * hexA;
    startY -= hexH;
}
startY += hexH;
for (let j = Math.ceil((bigHexsize * 2 - 1) / 2); j < (bigHexsize * 2 - 1); j++) {
    startY += hexH;
    for (let i = 0; i < (bigHexsize * 2 - 2) - minus; i++) {
        hexagonDrawer(startX, startY + (i * 2 * hexH), hexA);
    }
    minus++;
    startX += 3 / 2 * hexA;
    //    startY += hexH;
}
/*
hexagonDrawer(startX + (0 * 3 / 2 * hexA), startY + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (0 * 3 / 2 * hexA), startY + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (0 * 3 / 2 * hexA), startY + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (0 * 3 / 2 * hexA), startY + (3 * 2 * hexH), hexA);

hexagonDrawer(startX + (1 * 3 / 2 * hexA), startY - (1 * hexH) + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (1 * 3 / 2 * hexA), startY - (1 * hexH) + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (1 * 3 / 2 * hexA), startY - (1 * hexH) + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (1 * 3 / 2 * hexA), startY - (1 * hexH) + (3 * 2 * hexH), hexA);
hexagonDrawer(startX + (1 * 3 / 2 * hexA), startY - (1 * hexH) + (4 * 2 * hexH), hexA);

hexagonDrawer(startX + (2 * 3 / 2 * hexA), startY - (2 * hexH) + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (2 * 3 / 2 * hexA), startY - (2 * hexH) + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (2 * 3 / 2 * hexA), startY - (2 * hexH) + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (2 * 3 / 2 * hexA), startY - (2 * hexH) + (3 * 2 * hexH), hexA);
hexagonDrawer(startX + (2 * 3 / 2 * hexA), startY - (2 * hexH) + (4 * 2 * hexH), hexA);
hexagonDrawer(startX + (2 * 3 / 2 * hexA), startY - (2 * hexH) + (5 * 2 * hexH), hexA);

hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (3 * 2 * hexH), hexA);
hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (4 * 2 * hexH), hexA);
hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (5 * 2 * hexH), hexA);
hexagonDrawer(startX + (3 * 3 / 2 * hexA), startY - (3 * hexH) + (6 * 2 * hexH), hexA);

hexagonDrawer(startX + (4 * 3 / 2 * hexA), startY - (2 * hexH) + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (4 * 3 / 2 * hexA), startY - (2 * hexH) + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (4 * 3 / 2 * hexA), startY - (2 * hexH) + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (4 * 3 / 2 * hexA), startY - (2 * hexH) + (3 * 2 * hexH), hexA);
hexagonDrawer(startX + (4 * 3 / 2 * hexA), startY - (2 * hexH) + (4 * 2 * hexH), hexA);
hexagonDrawer(startX + (4 * 3 / 2 * hexA), startY - (2 * hexH) + (5 * 2 * hexH), hexA);

hexagonDrawer(startX + (5 * 3 / 2 * hexA), startY - (1 * hexH) + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (5 * 3 / 2 * hexA), startY - (1 * hexH) + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (5 * 3 / 2 * hexA), startY - (1 * hexH) + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (5 * 3 / 2 * hexA), startY - (1 * hexH) + (3 * 2 * hexH), hexA);
hexagonDrawer(startX + (5 * 3 / 2 * hexA), startY - (1 * hexH) + (4 * 2 * hexH), hexA);

hexagonDrawer(startX + (6 * 3 / 2 * hexA), startY - (0 * hexH) + (0 * 2 * hexH), hexA);
hexagonDrawer(startX + (6 * 3 / 2 * hexA), startY - (0 * hexH) + (1 * 2 * hexH), hexA);
hexagonDrawer(startX + (6 * 3 / 2 * hexA), startY - (0 * hexH) + (2 * 2 * hexH), hexA);
hexagonDrawer(startX + (6 * 3 / 2 * hexA), startY - (0 * hexH) + (3 * 2 * hexH), hexA);
*/
