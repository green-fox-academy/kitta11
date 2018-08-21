
'use strict';

export class Flower {
  name: string;
  waterAmount: number;
  absorbingCap: number;

  constructor (name: string = 'nonameFlower'){
    this.name = name;
    this.waterAmount = 5;
    this.absorbingCap = 0.75;
  }

  needsWater(){
    if (this.waterAmount<5) {
      return true
    } else {
      return false
    }
  }

}