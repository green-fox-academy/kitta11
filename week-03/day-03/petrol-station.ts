'use strict';

export class Station {
  gasAmount: number;

  constructor (gasAmount: number = 1000){
    this.gasAmount=gasAmount;
  }

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount +=car.capacity;
}
}

export class Car {
  gasAmount: number;
  capacity: number
  constructor() {
    this.gasAmount = 0;
    this.capacity = 100
  }

}

//test

let stationOne: Station = new Station (1500);
let stationTwo: Station = new Station ();
let carTest: Car = new Car ();
console.log(stationOne, stationTwo, carTest);
stationOne.refill(carTest);
stationTwo.refill(carTest);
console.log(stationOne, stationTwo, carTest);
stationOne.refill(carTest);
stationTwo.refill(carTest);
console.log(stationOne, stationTwo, carTest);
