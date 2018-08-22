'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected breedingMethod: string;
  protected favFood: string;


  constructor(name: string){
    this.name = name;
  }

  getName(){
    return this.name
  }

  breed() {
    return this.breedingMethod;
  }

  feed (){
    console.log(`${this.name}: Give me my favorites ${this.favFood}!!!`)
  }

}