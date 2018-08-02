'use script';
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cuboidHeight: number = 20.2;
let cuboidWidth: number = 35.2;
let cuboidLength: number= 40.5;

let cuboidVolume: number = Math.floor(cuboidHeight * cuboidLength * cuboidWidth * 100) / 100;
console.log(`Volume of the cuboid ${cuboidVolume}`);

let cuboidSurface: number = Math.floor((cuboidHeight * cuboidLength * 2 + cuboidHeight * cuboidWidth * 2 + cuboidLength * cuboidWidth * 2) * 100) / 100;
console.log(`Volume of the cuboid ${cuboidSurface}`);

