import { Plant } from "./plant"
'use strict';

export class Tree extends Plant {
  
  constructor(name: string, ) {
    super(name);
    this.type = 'tree';
    this.absorbingCap = 0.4;
  }
}