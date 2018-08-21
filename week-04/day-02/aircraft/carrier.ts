import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

'use strict';

export class Carrier {
  airCraftList: Aircraft[];
  storeOfAmmo: number;
  healthPoint: number;
  totalDamage: number;

  constructor(storeOfAmmo: number, healthPoint: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.healthPoint = healthPoint;
    this.airCraftList = [];
    this.totalDamage = 0;
  }

  addF16() {
    let newF16: F16 = new F16()
    return this.airCraftList.push(newF16)
  }


  addF35() {
    let newF35: F35 = new F35()
    return this.airCraftList.push(newF35)
  }

  getNoOfPriorityPlanes() {
    let noOfPrior: number = 0;
    this.airCraftList.forEach(element => {
      if (element.isPriority()) {
        noOfPrior++
      }
    });
    return noOfPrior;
  }

  fill() {
    let allAmmoNeed = 0
    this.airCraftList.forEach(element => {
      allAmmoNeed += element.getReFillNeed()
    });

    if (allAmmoNeed > this.storeOfAmmo && this.storeOfAmmo !== 0) {
      this.airCraftList.forEach(element => {
        if (element.isPriority()) {
          element.refill(this.storeOfAmmo / this.getNoOfPriorityPlanes());
        }
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

  calcTotalDamage() {
    this.airCraftList.forEach(element => {
      this.totalDamage += element.getAllDamage();
    });
    return this.totalDamage;
  }

  fight(targetCarrier: Carrier) {
    let totalDamage: number = 0;
    this.airCraftList.forEach(element => {
      totalDamage += element.fight();
    });
    targetCarrier.healthPoint -= totalDamage
    targetCarrier.airCraftList.forEach(element => {
      element.attacked(totalDamage / targetCarrier.airCraftList.length);
    });
  }
  geStatus() {
    if (this.healthPoint > 0) {
      console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.airCraftList.length}, 
    Ammo Storage: ${this.storeOfAmmo}, Total damage: ${this.calcTotalDamage()}
    Aircraft:`);
      this.airCraftList.forEach(element => {
        console.log(element.getStatus());
      });
    } else {
      console.log(`It's dead Jim :(`)
    }
  }
}
