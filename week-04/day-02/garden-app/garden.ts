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

  watering(amountWater: number) {
    let numOfWateredPlants: number = 0;
    this.plantList.forEach(element => {
      if (element.needsWater()) {
        numOfWateredPlants++
      }
    })
    let currentWateringAmount = amountWater / numOfWateredPlants;

    this.plantList.forEach(element => {
      if (element.needsWater()) {
        element.getWatered(currentWateringAmount);
      }
    });

    console.log(`Watering with ${amountWater}`)
    this.plantList.forEach((element) => {
      if (element.needsWater()) {
        console.log(`${element.getName()} ${element.getType()} needs water`);
      } else {
        console.log(`${element.getName()} ${element.getType()} does not need water`);
      }
    })
  }
}


