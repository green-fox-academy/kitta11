import { Plant } from "./plant";

'use strict';

export class Flower extends Plant {

  constructor(color: string){
    super(color)
    this.absorbingCap = 0.75;
  }

  needWater(): boolean {
    return this.currentWaterAm<5;
  }  
  
  getType() {
    return 'flower'
  }
  
}