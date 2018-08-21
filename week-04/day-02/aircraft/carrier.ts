import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

'use strict';

export class Carrier {
  airCraftList: Aircraft[];
  storeOfAmmo: number;
  healthPoint: number;

  constructor(storeOfAmmo: number, healthPoint: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.healthPoint = healthPoint;
    this.airCraftList = [];
  }

  addF16() {
    let newF16: F16 = new F16()
    return this.airCraftList.push(newF16)
  }


  addF35() {
    let newF35: F35 = new F35()
    return this.airCraftList.push(newF35)
  }

  fill() {
    let allAmmoNeed = 0
    this.airCraftList.forEach(element => {
      allAmmoNeed += element.getReFillNeed()
    });

    console.log(`Needed ammo: ${allAmmoNeed} and the available ammo ${this.storeOfAmmo}`);

    if (allAmmoNeed > this.storeOfAmmo && this.storeOfAmmo !== 0) {
      this.airCraftList.forEach(element => {
        element.refill(this.storeOfAmmo/this.airCraftList.length);
      });
      this.storeOfAmmo = 0
    } else if (allAmmoNeed < this.storeOfAmmo) {
      this.airCraftList.forEach(element => {
        element.refill(element.getReFillNeed())
      })
      this.storeOfAmmo -= allAmmoNeed;
    } else {
      throw 'Your carrier run out of ammo...'
    }
  }

  fight(targetCarrier: Carrier){
    let totalDamage: number = 0;
    this.airCraftList.forEach(element => {
      totalDamage+= element.fight();
    });
    console.log(totalDamage);
    targetCarrier.healthPoint-=totalDamage
  }
}
