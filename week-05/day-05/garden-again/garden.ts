import { Plant } from "./plant";

'use strict'

export class Garden {
  plants: Plant[];

  constructor() {
    this.plants = []

  }

  addToGarden(item: Plant) {
    this.plants.push(item)
  }

  watering(totalWater: number) {
    let noOfPlantsNeedWat: number = this.plants.filter(element => {
      return element.needWater()
    }).length
    console.log(`Watering with ${totalWater}`)
    this.plants.forEach(element => {
      if (element.needWater()) {
        element.beWatered(totalWater / noOfPlantsNeedWat)
        console.log(`The ${element.getColor()} ${element.getType()} needs water`)
      } else {
        console.log(`The ${element.getColor()} ${element.getType()} does not need water`)
      }
    })
  }


}
