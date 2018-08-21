'use strict';

export class Aircraft{
  protected type: string;
  protected maxAmmo: number;
  protected currentAmmo: number;
  protected baseDamage: number;
  protected allDamage: number;

  constructor() {
    this.type = '';
    this.maxAmmo = 0;
    this.currentAmmo = 0;
    this.baseDamage = 0;
    this.allDamage = 0;
  }

  fight(){

  }

  refill(){

  }

  getType(){
    return this.type;
  }

  getStatus(){
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage}`
  }

  isPriority(){
    if (this.type === 'F35') {
      return true;
    } else if (this.type ==='F16') {
      return false;
    } else {
      console.log(`You called the function with a wrong type`);   
    }
  }
}