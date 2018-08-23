'use strict'
import { Sharpie } from "./Sharpie";

class SharpieSet {
  sharpieList: Sharpie[];

  constructor() {
    this.sharpieList = [];
  }

  countUsable() {
    let usableNo: number = 0;;
    for (let index = 0; index < this.sharpieList.length; index++) {
      if (this.sharpieList[index].getInkAmount() > 0) {
        usableNo++;
      }
    };
    return usableNo;
  }
  
 // filterrel tudom returnolni de nem valtoztatja meg az alap arrayt ezert nem jo
  // removeTrash() {
  //   return this.sharpieList.filter(function (element) {
  //     return element.inkAmount > 0
  //   })
  // }

  removeTrash() {
    for (let i = 0; i < this.sharpieList.length; i++) {
      if (this.sharpieList[i].getInkAmount()===0) {
        this.sharpieList.splice(i, 1);
        i--;
      }      
    }
  }
}


//testing
let sharpieSetTest: SharpieSet = new SharpieSet();

//uploading 10 sharpies
let colorPalette: string[] = ['pink', 'blue', 'gree', 'black', 'red', 'purple', 'yellow', 'orange']
for (let index = 0; index < 10; index++) {
  sharpieSetTest.sharpieList[index] = new Sharpie(colorPalette[Math.floor(Math.random() * 7)], 10 + Math.floor(Math.random() * 10));
}
console.log(sharpieSetTest);

// using one sharpie fully
for (let index = 0; index < 100; index++) {
  sharpieSetTest.sharpieList[7].use();
}
// console.log(sharpieSetTest.sharpieList[7]);

console.log(sharpieSetTest.countUsable());

sharpieSetTest.removeTrash();
console.log(sharpieSetTest);






