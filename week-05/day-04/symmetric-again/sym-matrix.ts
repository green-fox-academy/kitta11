'use strict';

// Create a function named `isSymmetric` that takes an n×n integer matrix (two dimensional array) as parameter
// and returns true, if is that matrix is symmetric (diagonally from top-left to bottom-right)
// or false if it is not
//
// example for symmetric matrix:
// 1 0 1
// 0 2 2
// 1 2 5
//
// example for not symmetric matrix
// 7 7 7
// 6 5 7
// 1 2 1

let symmetricMatrix: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
]

let notSymmetricMatrix: number[][] = [
  [1, 0, 4],
  [0, 2, 2],
  [1, 2, 5]
]

let symmetricMatrixFive: number[][] = [
  [10, 2, 5, 4, 7],
  [2, 20, 3, 6, 8],
  [5, 3, 30, 9, 0],
  [4, 6, 9, 40, 11],
  [7, 8, 0, 11, 50]
]

function isSymmetric(inputArray: number[][]) {
  for (let row = 0; row < inputArray.length; row++) {
    for (let col = 0; col < inputArray.length; col++) {
      if (inputArray[row][col] !== inputArray[col][row])
      return false
    }
  }
  return true;
}

console.log(isSymmetric(symmetricMatrixFive))
console.log(isSymmetric(notSymmetricMatrix))
