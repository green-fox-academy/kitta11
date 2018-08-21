import { Plant } from "./plant"
'use strict';

export class Flower extends Plant {
  
  constructor(name: string, ) {
    super(name);
    this.absorbingCap = 0.75;
  }

}