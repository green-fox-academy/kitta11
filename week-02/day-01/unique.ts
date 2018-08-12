'use strict';
export{};

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let testArray: number[] = [34, 1, 111, 34, 110, 52, 12, 44, 61, 1, 4, 112, 34];

//FIRST STEPS: I have found this onlyUnique function on the net, tested it and since it worked I used it

function unique(inputArray: any[]) {
    //this is the magical function
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let filteredArray: any[] = inputArray.filter(onlyUnique);
    return filteredArray.sort();
}
console.log(unique(testArray));

let testArray2: string[] = ['Soma', 'Kinga', 'Soma', 'Kitta', 'Kinga', 'Soma', 'soma'];
console.log(unique(testArray2));

//AND THE HEUREKA MOMENT

//but after I realized the sort() method sort the numbers alphabetically so we need an extra function

function compare(a, b) {
    return a-b;
}

function myUnique(inputArray: number[]) {
    inputArray.sort(compare);
    let uniqueArray: number[] = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i + 1] !== inputArray[i]) {
            uniqueArray.push(inputArray[i]);
        }
    }
    return uniqueArray;
}
let arrTest2: number[] = [9, 9, 111., 2, 3, 4, 4, 5, 7];
console.log(myUnique(arrTest2));
console.log(myUnique(testArray));

