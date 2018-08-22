import { Animal } from "./animal";
'use strict';

export class Mammal extends Animal {
  avgNoOfNewBorns: number;

  constructor(name: string, avgNoOfNewBorns: number = 2) {
    super(name);
    this.breedingMethod = 'pushing miniature versions out'
    this.avgNoOfNewBorns = avgNoOfNewBorns;
    this.favFood = 'meat and veggies'

  }

  breed(){
    return `${this.breedingMethod}, producing ${this.avgNoOfNewBorns} per breeding`;
  }
}