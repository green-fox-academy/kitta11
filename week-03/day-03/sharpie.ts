import { userInfo } from "os";

'use strict';

export class Sharpie {
  private color: string;
  private width: number;
  public inkAmount: number;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use () {
    this.inkAmount--;
  }

  getInkAmount() {
    return this.inkAmount;
  }
}

//test
let item1: Sharpie = new Sharpie ('pink', 10);
console.log(item1);
let item2: Sharpie = new Sharpie ('red', 12);
console.log(item2);
item1.use()
console.log(item1);

