'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

//the ruined string
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

//one solution with replace
let fixedQuote: string = quote.replace('It you', 'It always takes longer than you');

console.log(fixedQuote);
console.log(quote.replace('It you', 'It always takes longer than you'));

//second solution with slice
let sliceIndexOne: number = quote.indexOf('It');
let slideIndexTwo: number = quote.indexOf('you');
let missingPiece: string = 'always takes longer than'

console.log(`${quote.slice(0, sliceIndexOne+2)} ${missingPiece} ${quote.slice(slideIndexTwo)}`);
