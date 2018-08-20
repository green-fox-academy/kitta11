'use strict';

export class Counter {
  value: number;
  defaultValue: number;

  constructor(value: number = 0) {
    this.value = value;
    this.defaultValue = value;
  }

  add(number?: number) {
    if (number == undefined) {
      this.value++;
    }
    else {
      this.value += number;
    }
  }
  get() {
    return this.value.toString()
  }

  reset() {
    this.value = this.defaultValue;
  }
}

//test

let counterOne: Counter = new Counter ()
console.log(counterOne);
counterOne.add(12);
console.log(counterOne);
counterOne.add();
console.log(counterOne);
console.log(counterOne.get());
counterOne.reset()
console.log(counterOne);

let counterTwo: Counter = new Counter(10)
console.log(counterTwo);
counterTwo.add(2);
console.log(counterTwo);
counterTwo.add();
console.log(counterTwo);
console.log(counterTwo.get());
counterTwo.reset()
console.log(counterTwo);