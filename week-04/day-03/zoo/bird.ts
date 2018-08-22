import { Animal } from "./animal";
import { Flyable } from "../flyable/flyable";
'use strict';

export class Bird extends Animal implements Flyable {
  canFly: boolean;
  constructor(name: string, canFly: boolean = true) {
    super(name);
    this.breedingMethod = 'laying eggs'
    this.canFly = canFly
    this.favFood = 'insects and small green stuff'

  }
  fly() {
    if (this.canFly) {
      console.log(`${this.name} says: OMG it feels awesome....`)
    } else {
      console.log(`${this.name} says: please don't stress me with this flying stuff`);
    }
  }

  land(): void {
    if (this.canFly) {
      console.log(`${this.name} says: I will never land again because I love flying!`);
    } else {
      console.log(`${this.name} says: If you can't fly you can not land badly...`);
    }
  }

  takeOff(): void {
    if (this.canFly) {
      console.log(`${this.name} says: Don't forget to put a top on my cage otherwise I will fly away, back to my real home...`)
    } else {
      console.log(`${this.name} says: Wish I could fly so I could go home and leave this zoo`)
    }
  }

}