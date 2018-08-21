import {Aircraft} from "./aircraft";
'use strict';

export class F16 extends Aircraft {
  constructor(){
    super();
    this.type = 'F16'
    this.maxAmmo = 8;
    this.baseDamage = 30; 

  }

}