import { Animal } from "./animal";
'use strict';

export class Bird extends Animal {
  canFly: boolean;
  constructor(name: string, canFly: boolean = true ) {
    super(name);
    this.breedingMethod = 'laying eggs'
    this.canFly = canFly
    this.favFood = 'insects and small green stuff'

  }
  fly(){
    if (this.canFly) {
      console.log(`Don't forget to put a top on my cage otherwise I will fly away, back to my real home...`)
    } else {
      console.log(`Wish I could fly so I could go home and leave this zoo`)
    }
  }

}