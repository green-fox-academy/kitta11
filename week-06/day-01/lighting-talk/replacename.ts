'use string'

let strTestReplace: string = `A dream you dream alone is only a dream. 
A dream you dream together is reality`;

// console.log(`.......................................`)
// console.log(strTestReplace.replace('dream', 'nightmare'))
// console.log(`.......................................`)
// console.log(strTestReplace.replace(/dream/g, 'nightmare'))
// console.log(`.......................................`)
// console.log(strTestReplace.replace(/(dream)( alone)/g, `$2, $1`))
// console.log(`.......................................`)


//writing a function to show where is the match
function replacer(str, offset, s) {
  console.log(`Found "${str}" at position ${offset} in the provided text`);
  return str;

}
//calling replace method where the second param is the function
strTestReplace.replace(/dream/gi, replacer)