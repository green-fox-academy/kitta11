'use strict';
export {};
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix: number [][]= [];
let numberOfRows: number = Math.floor(Math.random()*10);

for (let i = 0; i < numberOfRows; i++) {
    matrix[i]=[]
    for (let j = 0; j < numberOfRows; j++) {
        if (j===i) {
            matrix[i][j]=1;
        } else {
            matrix[i][j]=0;
        }
    }
}
//Q: how can I save the reversed matrix without creating a new one
console.log(matrix.reverse());
