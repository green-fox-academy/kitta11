'use strict'

let myFridge = "1 lemon, 2 bananas, and 101 eggs";

function minusOne(match, $1, $2) {
  $1 = Number($1) - 1;
  if ($1 == 1) { // only one left, remove the 's'
  $2 = $2.slice(0, $2.length - 1);
  } else if ($1 == 0) {
    $1 = "no";
  }
  return $1 + " " + $2;
}
console.log(myFridge.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs
