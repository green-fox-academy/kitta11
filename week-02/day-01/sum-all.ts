'use script';
export{};
// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number [] = [3, 4, 5, 6, 7];
console.log(`Sum of all elements in this array is: ${ai.reduce(function(a, b) {return a+b})}`);
