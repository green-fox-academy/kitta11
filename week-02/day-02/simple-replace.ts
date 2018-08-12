'use strict';
export { };

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away


console.log(example.replace('dishwasher', 'galaxy'));

export = example;

//I just found a smart and more elegant way to replace an old substring with a new one
function replaceString(oldS, newS, fullS) {
    return fullS.split(oldS).join(newS);
}

console.log(replaceString('dishwasher', 'galaxy', 'In a dishwasher far far away'));