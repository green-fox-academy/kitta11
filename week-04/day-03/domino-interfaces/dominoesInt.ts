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


function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}


let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]


// function reorderDominoes(list: Domino[]) {
//   let newDominoes: any[][] = [];
//   newDominoes.push(dominoes[0].values);
//   for (let i = 0; i < newDominoes.length; i++) {
//     for (let j = 1; j < dominoes.length; j++) {
//       if (newDominoes[i][1] === dominoes[j].values[0]) {
//         newDominoes.push(dominoes[j].values);
//       }
//     }
//   }
//   return newDominoes;
// }

// console.log(reorderDominoes(dominoes));

// //print(dominoes);

// console.log(dominoes[1]);

console.log(dominoes.sort());

