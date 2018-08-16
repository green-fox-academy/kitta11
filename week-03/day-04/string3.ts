'use strict';
export { };

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let teststring: string = 'kutyabajom';


function addStar(inputString: string, separator: string): any {
  return inputString.split('').join(separator);
}

console.log(addStar('kutyabajom mert nem tudom vajon jol csinaltam', '*'));
console.log(addStar('kutyabajom mert nem tudom vajon jol csinaltam', '-'));