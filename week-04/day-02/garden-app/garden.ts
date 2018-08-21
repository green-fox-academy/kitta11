import { Plant } from "./plant"
import { Tree } from "./tree"
import { Flower } from "./flower"

'use strict';

export class Garden {
  plantList: Plant[];
  constructor() {
    this.plantList = [];
  }

  addFlower(name) {
    let newFlower: Flower = new Flower(name);
    this.plantList.push(newFlower);
  }

  addTree(name) {
    let newTree: Tree = new Tree(name);
    this.plantList.push(newTree);
  }

  checkWaterNeed() {
    this.plantList.forEach((element) => {
      if (element.needsWater()) {
        return `${element.getName()} needs water`;
      } else {
        return `${element.getName()} does not need water`;
      }
    })
  }

  watering(amountWater: number) {
    let numOfWateredPlants: number = 0;
    this.plantList.forEach(element => {
      if (element.needsWater()) {
        numOfWateredPlants++
      }
    return numOfWateredPlants;
    })

    this.plantList.forEach((element) => {
      if (element.needsWater()) {
        element.waterAmount += amountWater / numOfWateredPlants * element.getAbsorbCap()
      }
    })
  }
}

