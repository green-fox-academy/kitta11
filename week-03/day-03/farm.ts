'use strict';
import { Animal } from "./animal";

class Farm {
  private animalList: Animal[];
  private freeSlot: number;

  constructor() {
    this.animalList = [];
    this.freeSlot = 10;
  }

  breed() {
    if (this.freeSlot > 0) {
      //myAnimal egy ideiglenes valtozo nev, utana mar csak erteke van
      let myAnimal: Animal = new Animal()
      this.animalList.push(myAnimal)
      this.freeSlot--

    } else {
      console.log('You need to slaughter before you can breed');
    }
  }

  slaughter(): void {
    if (this.animalList.length !== 0) {
      let index = 0;
      for (let i = 0; i < this.animalList.length; i++) {
        let leastHungry: Animal = this.animalList[index];
        let currentAnimal: Animal = this.animalList[i];
        if (currentAnimal.getHungry() < leastHungry.getHungry()) {
          index = i;
        }
      }
      this.animalList.splice(index, 1);
      this.freeSlot++
    }
  }
}

