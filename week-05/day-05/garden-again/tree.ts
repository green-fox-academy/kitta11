import { Plant } from "./plant";

'use strict';

export class Tree extends Plant {

  constructor(color: string){
    super(color)
    this.absorbingCap = 0.4;
  }

  needWater(): boolean {
    return this.currentWaterAm<10;
  }  
  
  getType() {
    return 'tree'
  }
  
}