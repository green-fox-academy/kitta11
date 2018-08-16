'use strict';
export { };

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function addStarRecur (inputString: string): any {
  if (inputString.length > 0) {
    return inputString.slice(0, 1)+'*' + addStarRecur(inputString.slice(1));
  } else {
    return '';
  }
}

console.log(addStarRecur('kutyabajom mert nem tudom vajon jol csinaltam'));


//without recursion
function addStar(inputString: string, separator: string): any {
  return inputString.split('').join(separator);
}
console.log(addStar('kutyabajom mert nem tudom vajon jol csinaltam', '-'));
