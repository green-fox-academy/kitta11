import { Plant } from "./plant"
'use strict';

export class Flower extends Plant {
  
  constructor(name: string) {
    super(name);
    this.type = 'flower';
    this.absorbingCap = 0.75;
  }

}