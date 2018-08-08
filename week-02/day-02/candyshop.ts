'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function correction(inputArray: any[]) {
    let newItemOne: string = 'Croissant';
    let newItemTwo: string = 'Ice cream';
    let errorIndexOne: number = inputArray.indexOf(2);
    let errorIndexTwo: number = inputArray.indexOf(false);
    inputArray.splice(errorIndexOne, 1, newItemOne);
    inputArray.splice(errorIndexTwo, 1, newItemTwo);
    return console.log(inputArray);
}
correction(shopItems);

//version two

function correctionTwo(inputArray: any[]) {
    inputArray.forEach(element => {
        if (element === 2) {
            inputArray.splice(element - 1, 1, 'Croissant');
        } else if (element === false) {
            inputArray.splice(element - 1, 1, 'Ice cream');
        } else { }
    });
    return inputArray;
}
console.log(correctionTwo(shopItems));

