'use strict';
let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let remainingSec: number = (24*60*60)-(currentHours*60*60 + currentMinutes*60 + currentSeconds);
console.log(`${remainingSec} seconds has remained from your day. Namaste!`);
