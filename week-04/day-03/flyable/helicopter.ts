import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

'use strict';

export class Helicopter extends Vehicle implements Flyable {

  constructor(name: string, maxCapacity: number, maxFlyingHeight: number = 1000) {
    super(name);
    this.maxCapacity = maxCapacity;
    this.maxFlyingHeight = maxFlyingHeight;
  }

  land(){
    if (this.currentCapacity>this.maxCapacity*0.8) {
      console.log(`Please take your seat and fasten your seatbelt. 
      We are going to land a little bit bumpy because ${this.name} is boarded close to his maximum capacity`)
    } else {
      console.log(`You can do whatever you want because it will be a smooth landing`)
    }

  }

  fly(inputAltitude: number = this.maxFlyingHeight) {
    if (inputAltitude>this.maxFlyingHeight) {
      console.log(`I am not able to fly above ${this.maxFlyingHeight}, please reduce my flying altitude`);
    } else {
      console.log(`New flying altitude is set to ${inputAltitude}`)
    }
  }

  takeOff() {
    if (this.getCurrentCap() > 0) {
      console.log(`Taking off with ${this.getCurrentCap()} and aiming the ${this.maxFlyingHeight} flying altitude`)
    } else {
      console.log(`Please board first`);

    }
  }


}