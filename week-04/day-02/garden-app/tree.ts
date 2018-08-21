import { Plant } from "./plant"
'use strict';

export class Tree extends Plant {
  
  constructor(name: string, ) {
    super(name);
    this.absorbingCap = 0.4;
  }
}