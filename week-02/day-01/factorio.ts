'use strict';
export {};
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (inputToFactored) {
    let total = 1
    //Q: can I solve this wo setting the initial sum to 0?
    for (let i = 1; i <= inputToFactored; i++) {
            total = total * i; 
        }
        return total;  
}
let iWantToFactor: number = Math.floor(Math.random() * 10);
console.log(`The computer wants me to tell you the factoral of ${iWantToFactor}
Voila: ${factorio(iWantToFactor)}
I am still unbelievably smart... :)`);
