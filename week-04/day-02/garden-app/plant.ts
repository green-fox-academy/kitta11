'use strict';

export abstract class Plant {
  protected name: string;
  protected type: string;
  protected waterAmount: number;
  protected absorbingCap: number;
  

  constructor (name: string = 'nonamePlant'){
    this.name = name;
    this.type = '';
    this.waterAmount = 0;
    this.absorbingCap = 0;
  }

  needsWater(){
    if (this.waterAmount<5) {
      return true;
    } else {
      return false;
    }
  }

  getName() {
    return this.name
  }

  getType() {
    return this.type;
  }
  getWaterAmont(){
    return this.waterAmount;
  }

  getAbsorbCap() {
    return this.absorbingCap;
  }

  getWatered(inputAmount: number) {
    return this.waterAmount+= inputAmount*this.absorbingCap
  }
}