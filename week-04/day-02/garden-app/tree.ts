'use strict';

export class Tree {
  name: string;
  waterAmount: number;
  absorbingCap: number;

  constructor (name: string = 'nonameTree'){
    this.name = name;
    this.waterAmount = 5;
    this.absorbingCap = 0.4;
  }

  needsWater(){
    if (this.waterAmount<10) {
      return true
    } else {
      return false
    }
  }

}