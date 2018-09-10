'use strict'
export{};

// console.log(/[abcde]/.test('I like regexp')) //TRUE

// console.log(/[0123456789]/.test('It is 2018')) //TRUE

// console.log(/[a-e]/.test('I like regexp')) //TRUE

// console.log(/[0-9]/.test('It is 2018')) //TRUE

// let testString: string = `Iwasborntodemonstratethehrdlifeof`
// console.log(/\d/.test(testString)) //
// console.log(/\w/.test(testString)) //
// console.log(/\s/.test(testString)) //
// console.log(/\D/.test(testString)) //
// console.log(/\W/.test(testString)) //
// console.log(/\S/.test(testString)) //
// console.log(/./.test(testString)) //


// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

// console.log(dateTime.test("09-11-2018 23:20"));
// // → true
// console.log(dateTime.test("11-sep-1977 23:20"));
// // → false

// let notPreferred = /[^ab]/
// console.log(notPreferred.test('blablabla')) //true
// console.log(notPreferred.test('bababa')) //false


console.log(/'\d+'/.test("'12122'"));
// → true
console.log(/'\d+'/.test("'ababab'"));
// → false
console.log(/'\d*'/.test("''"));
// → true
console.log(/'\d*'/.test("'abababab'"));
// → true

let color = /colou?r/;
console.log(color.test("colour")); // → true
console.log(color.test("color")); // → true
console.log(color.test("coluour")); // → false›


let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true