'use strict';

export class Animal {
  private hunger: number;
  private thirst: number;
  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++
    this.thirst++
  }

  getHungry() {
    return this.hunger;
  }
}

let tiger: Animal = new Animal(12, 34);
let lion: Animal = new Animal();
let rabbit: Animal = new Animal(60)
new Animal()

console.log(tiger);
console.log(tiger.eat());
console.log(tiger.drink());
console.log(tiger.play());
console.log(tiger.drink());
console.log(tiger.eat());
console.log(tiger.drink());
console.log(tiger.play());

