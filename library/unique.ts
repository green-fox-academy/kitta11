'use strict'

export function unique(inputArray: any[]) {
  function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }
  let filteredArray: any[] = inputArray.filter(onlyUnique);
  return filteredArray.sort();
}
