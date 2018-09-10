// show and replace all matches

let stringTestOne: string = "HO-Ho-ho";
let stringTestTwo: string = 'This sentence intends to demonstrate this case when we want to replace all this word to that'


function replacer(str, offset, s) {
  console.log(`Found ${str} at position ${offset} in string ${s}`);
  return str.toLowerCase();
}

console.log(stringTestOne.replace(/ho/gi, replacer));
console.log(stringTestTwo.replace(/this/gi, 'that'));


