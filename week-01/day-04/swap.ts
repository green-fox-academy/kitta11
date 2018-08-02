'use strict';
let a: number = 123;
let b: number = 526;

//without using a temp variables it is called bitwise xor op
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`value of a: ${a}
value of b: ${b}`);

let c: number = 123;
let d: number = 526;

//with using a temp variables
let temp = c;
c = d;
d = temp;

console.log(`value of c: ${c}
value of d: ${d}`);