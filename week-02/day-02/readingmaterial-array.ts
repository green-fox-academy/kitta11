'use strict';
export {};

let sampleArray: number []=[2, 3, 5, 7, 11];

sampleArray.forEach(element => {
    console.log(element/2);
});

console.log(sampleArray.join('---'));

//using this reduce stuff for summing the array elements
console.log(sampleArray.reduce(function(a, b) {return a+b}));

console.log(sampleArray.reduceRight(function(a, b) {return a-b}));

console.log(sampleArray.toString());

//practicing array destructuring
let sampleDestruct: string [] = [
    'How we gonna stop the time',
    'I wanna leave it all behind',
    'I never wanna let you go',
];
//console.log(sampleDestruct);
let [x, y, z] = sampleDestruct;
//console.log(x);

sampleDestruct[0]=z;
sampleDestruct[2]=x;
console.log(sampleDestruct);

