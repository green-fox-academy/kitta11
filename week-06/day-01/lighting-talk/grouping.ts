'use strict'

let nameString: string = `
Berei, Daniel
Toth, Boglarka
Balazs, Eszter
Kallai, Milos
`
let nameRegExp = /(\w+), (\w+)/g;

let newNameString = nameString.replace(nameRegExp, "$2 $1");

console.log(newNameString)
/* 
Daniel Berei
Boglarka Toth
Eszter Balazs
Milos Kallai
*/