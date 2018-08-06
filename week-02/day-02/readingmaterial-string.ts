let stringTesting: string = 'I want to become a coaching string';
console.log(`string constructor will be printed here whatever it is ${stringTesting.constructor}`);
console.log(`string charAt works like this ${stringTesting.charAt(8)}`);
console.log(`string charCodeAt works like this ${stringTesting.charCodeAt(8)}`);

let stringTestingTwo: string = 'I will be added to the first string';
let stringConcated: string = stringTesting.concat(stringTestingTwo);
console.log(stringConcated);

console.log(`how indexOf works: ${stringTesting.indexOf('i')}`);

let stringToBeCompared: string = 'coaching';
console.log(`comparison result: ${stringTesting.localeCompare(stringToBeCompared)}`);

console.log(`match result: ${stringTesting.match('I want to become a coaching string')}`);

console.log(`match and replace result: ${stringTesting.replace(stringToBeCompared, 'business')}`);

console.log(`search methpd: ${stringTesting.search('business')}`);

let splittedString: string [] = stringTesting.split('t', 20);
console.log(splittedString);

console.log(`substring test ${stringTesting.substr(3, 17)}`);

//I still cant see the difference
console.log(`local Uppercase test ${stringTesting.toLocaleUpperCase()}`);
console.log(`normal Uppercase test ${stringTesting.toUpperCase()}`);

//what is the meaning of toString method or the diff from valueOf
console.log(`stringtostring test: ${stringTesting.toString()}`);
console.log(`what the heck is the difference from that: ${stringTesting}`);
console.log(`valuof test: ${stringTesting.valueOf()}`);
