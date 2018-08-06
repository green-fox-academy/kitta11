'use strict';
export {};
// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

let colors : string [] []= [
["lime", "forest green", "olive", "pale green", "spring green"],
["orange red", "red", "tomato"],
["orchid", "violet", "pink", "hot pink"]
];
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])

//testing how to address a specific element in the matrix
console.log(colors[0][3]);
//testing how to add elements to multidim array
colors[1].push('dark');
console.log(colors[1]);
colors[1][4]='superdark';
console.log(colors[1]);

