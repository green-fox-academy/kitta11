'use strict';

const cards = [
  ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'],
  ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'],
  ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'],
  ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC'],
];

//checking a 2d array
const isItemInArray = (array, item) => {
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      if (array[row][col] === item) {
        return true;   // Found it
      }
    }
  }
  return false;   // Not found
}

//getting the indexes of a card at hand
const tellmeTheIndex = (arrayBig, arraySmall) => {
  let resultArray = [];
  arraySmall.forEach(item => {
    for (let row = 0; row < arrayBig.length; row++) {
      for (let col = 0; col < arrayBig[row].length; col++) {
        if (arrayBig[row][col] === item) {
          resultArray.push([row, col]);
        }
      }
    }
  });
  return resultArray;
}

const findHighestCard = (array) => {
  let highestcard = array[0];
  array.forEach(item => {
    if (item[1] > highestcard[1]) {
      highestcard = item;
    }
  })
  return highestcard;
}



//testing whether a hand is valid
const isValidHand = (inputArray) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let filteredArray = inputArray.filter(onlyUnique);
  if (filteredArray.length === inputArray.length) {
    return true;
  } else {
    return false;
  };
}


module.exports = { isItemInArray, tellmeTheIndex, isValidHand, findHighestCard }
