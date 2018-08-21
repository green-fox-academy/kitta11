'use strict'

let sharpieList: object[] = [
  { color: 'blue', width: 15, inkAmount: 100 },
  { color: 'gree', width: 15, inkAmount: 100 },
  { color: 'red', width: 10, inkAmount: 100 },
  { color: 'purple', width: 18, inkAmount: 100 },
  { color: 'black', width: 18, inkAmount: 100 },
  { color: 'red', width: 18, inkAmount: 100 },
  { color: 'purple', width: 11, inkAmount: 100 },
  { color: 'yellow', width: 18, inkAmount: 0 },
  { color: 'red', width: 11, inkAmount: 100 },
  { color: 'pink', width: 16, inkAmount: 100 }
]

console.log(sharpieList[7]["inkAmount"]);
console.log(sharpieList.inkAmount);


let tempArray = sharpieList.filter(function(element) {
 return element.inkAmount > 0
})
console.log(tempArray);


function removeTrash(inputArray) {
  return inputArray.filter(function (element) {
    element['inkAmount'] > 0
  }
  )
}

console.log(removeTrash(sharpieList));
