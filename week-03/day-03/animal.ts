'use strict';
export{};
class Animal {
  hunger: number;
  thirst: number;
  constructor (hunger: number = 50, thirst: number= 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat () {
   return this.hunger-=1;  
  }

  drink () {
    return this.thirst-=1;
  }

  play () {
    return [this.hunger+=1, this.thirst+=1]
  }
}

let tiger: Animal = new Animal (12, 34);
let lion: Animal = new Animal ();
let rabbit: Animal = new Animal(60)

console.log(tiger);
console.log(tiger.eat());
console.log(tiger.drink());
console.log(tiger.play());
console.log(tiger.drink());
console.log(tiger.eat());
console.log(tiger.drink());
console.log(tiger.play());