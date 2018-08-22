import { Domino } from "./dominoInt";
'use strict';

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(4, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

let dominoes = initializeDominoes();


dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]

console.log(dominoes.sort());

for (let domino of dominoes) {
  domino.printAllFields();
}