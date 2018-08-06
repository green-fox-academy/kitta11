'use strict';
export {};

let name: string = 'Greenfox';
function greet (greetedName: string='Dear Student') {
    console.log(`Have a wonderful day ${greetedName}!`);
    
}

greet(name);
greet();