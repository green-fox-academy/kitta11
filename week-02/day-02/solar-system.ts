'use strict';
export{};
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

function putSaturn (inputArray: string []) {
    inputArray.push('Saturn');
    return console.log(inputArray);
}

putSaturn(planetList);

planetList.push('Saturn2');
console.log(planetList);

