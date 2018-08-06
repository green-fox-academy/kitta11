'use strict';
export {};
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i]+'a';     
}
console.log(animals);
