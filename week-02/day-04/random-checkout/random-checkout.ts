'use strict';
export { };

let checkinQuotes: string[][] = [
    ['Eleget', 'Nem sokat', 'Nullát'],
    ['1 sört', '1 sört', 'sok sört', 'reggelig'],
    ['átnéztem', 'félig néztem meg'],
    ['indiai pasi dupla sebességgel', 'szivárványos arc', 'amikor apit írtam a csempéhez'],
    ['frusztrált vagyok', 'nem vagyok frusztrált']
]
function randomCheckIn(inputArray: string[][]) {
    let generatedCheckInText: string = '';
    let randomIdOne: number = Math.floor(Math.random() * inputArray[0].length);
    let randomIdTwo: number = Math.floor(Math.random() * inputArray[1].length);
    let randomIdThree: number = Math.floor(Math.random() * inputArray[2].length);
    let randomIdFour: number = Math.floor(Math.random() * inputArray[3].length);
    let randomIdFive: number = Math.floor(Math.random() * inputArray[4].length);
    generatedCheckInText = `
    ${inputArray[0][randomIdOne]} aludtam. 
    Tegnap ${inputArray[1][randomIdTwo]} ittam. 
    A tananyagot ${inputArray[2][randomIdThree]}. 
    Csúcspont volt ${inputArray[3][randomIdFour]}.
    Overall ${inputArray[4][randomIdFive]}`;
    return generatedCheckInText;
}

console.log(randomCheckIn(checkinQuotes));
console.log(randomCheckIn(checkinQuotes));
console.log(randomCheckIn(checkinQuotes));
console.log(randomCheckIn(checkinQuotes));
console.log(randomCheckIn(checkinQuotes));

