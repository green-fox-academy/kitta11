let stringTesting: string = 'I want to become a coaching string';
/*console.log(`string constructor: ${stringTesting.constructor}`);
console.log(`string charAt: ${stringTesting.charAt(8)}`);
console.log(`string charCodeAt: ${stringTesting.charCodeAt(8)}`);

let stringTestingTwo: string = 'I will be added to the first string';
let stringConcated: string = stringTesting.concat(stringTestingTwo);
console.log(stringConcated);

console.log(`indexOf: ${stringTesting.indexOf('i')}`);

let stringToBeCompared: string = 'coaching';
console.log(`comparison: ${stringTesting.localeCompare(stringToBeCompared)}`);

console.log(`match: ${stringTesting.match('I want to become a coaching string')}`);

console.log(`replace: ${stringTesting.replace(stringToBeCompared, 'business')}`);

console.log(`search method: ${stringTesting.search('business')}`);

//we use the max value if we want to get rid of a part, e.g. in a csv manipulation
let splittedString: string [] = stringTesting.split(' ', 5);
console.log(splittedString);
*/

//substr, where first parameter is from when, second par how many characters
console.log(`substr test ${stringTesting.substr(4, 5)}`);

//substring test
console.log(`substring test ${stringTesting.substring(4, -3)}`);

//slice test
console.log(`slice test ${stringTesting.slice(4, -3)}`);

//I still cant see the difference
console.log(`local Uppercase test ${stringTesting.toLocaleUpperCase()}`);
console.log(`normal Uppercase test ${stringTesting.toUpperCase()}`);

//what is the meaning of toString method or the diff from valueOf
console.log(`stringtostring test: ${stringTesting.toString()}`);
console.log(`what the heck is the difference from that: ${stringTesting}`);
console.log(`valuof test: ${stringTesting.valueOf()}`);