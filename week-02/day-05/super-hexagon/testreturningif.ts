'use strict'

let testArray: number[] = [1, 2, 3, 4, 5, 6, 7];

for (let index = 0; index < testArray.length; index++) {
    let z: number = 1;
    if (index < testArray.length / 2) {
        console.log(testArray[index] + 1);
    } else {
        console.log(testArray[index] - z * 1 );
        z++
    }
}