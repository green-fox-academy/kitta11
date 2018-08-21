'use strict';

declare function require(path:string): any;

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");


let angle: number = 0;

ctx.rotate(angle * Math.PI / 180);

ctx.translate(canvas.width/2, canvas.height/2);

let goaPartyGenerator = (angle)  => {
  setTimeout(function () {
    ctx.rotate(angle * Math.PI / 90);
    ctx.strokeRect(-50 + angle + Math.random() * 12, -50 + Math.random() * 12, 100 + Math.random() * 12, 100 + Math.random() * 12);
    angle += + Math.random() ;
    ctx.lineWidth = Math.random()*5;
    ctx.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
    goaPartyGenerator(angle);
  }, 10);
};

goaPartyGenerator(angle);