'use strict';

export class Numberlist {
  numbersToSum: number [];

  constructor(numbersToSum: number []){
    this.numbersToSum = numbersToSum;
  }

  addNum(){
    let sumofNum: number = 0;
    this.numbersToSum.forEach(element => {
      sumofNum+=element;      
    })
    return sumofNum;
  }
}

let testNoNumber: Numberlist = new Numberlist([null]);
console.log(testNoNumber)
console.log(testNoNumber.addNum())
