'use strict';

export class Aircraft {
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

  getCurrentAmo() {
    return this.currentAmmo;
  }

  getAllDamage(){
    return this.allDamage
  }

  fight() {
    let causedDamage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return causedDamage;
  }

  attacked(damageInput: number){
    return this.allDamage+=damageInput
  }

  getReFillNeed() {
    return this.maxAmmo-this.currentAmmo;
  }
  refill(fillAmount: number) {
    let emptySpace: number = this.getReFillNeed();
    this.currentAmmo+= fillAmount;
    return fillAmount-emptySpace;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage}`
  }

  isPriority() {
    if (this.type === 'F35') {
      return true;
    } else  {
      return false;
    }
  }
}