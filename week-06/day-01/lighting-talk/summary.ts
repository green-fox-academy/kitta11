export{}
let strTest: string = `A dream you dream alone is only a dream. 
A dream you dream together is reality`;

let myRegexp = /dream/;
let myRegexpG = /dream/ig;
let arrayToCollect: any [] = []
let result;

//searching for the first match
console.log(strTest.search(myRegexp))
console.log(strTest.match(myRegexp))
console.log(myRegexp.test(strTest))

//searching for all matches
console.log(strTest.match(myRegexpG))

while (result = myRegexpG.exec(strTest)) {
  console.log(`Found ${result[0]} at ${result.index}`) 
}

//search and replace
console.log(strTest.replace(myRegexpG, 'nightmare'))

