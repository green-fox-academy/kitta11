'use strict';
export { };

// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(inputArray: string[], wordOne: string, wordTwo: string) {
    let iWordOne: number = words.indexOf(wordOne);
    let iWordTwo: number = words.indexOf(wordTwo);
    let tempWord = wordOne;
    inputArray.splice(iWordOne, 1, wordTwo);
    inputArray.splice(iWordTwo, 1, tempWord);
    return inputArray;
}
console.log(quoteSwap(words, "do", "cannot"));



//function quoteSwap (inputArray: string[]) {


//}

//console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
