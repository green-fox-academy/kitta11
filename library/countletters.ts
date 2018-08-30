'use strict'

export function countletters(inputString: string) {
  let dictionary: object[] = [];
  let sortedString = inputString.split('').sort().join('');
  let tempString = sortedString;

  for (let index = 0; index < sortedString.length; index++) {

    if (sortedString[index] === tempString[0]) {
      let dictionaryItem = {
        letter: tempString.slice(0, 1),
        occurence: tempString.slice(0, tempString.lastIndexOf(tempString.slice(0, 1)) + 1).length
      }
      dictionary.push(dictionaryItem);
      tempString = tempString.slice(tempString.lastIndexOf(tempString.slice(0, 1))+1);
    }
  }
  return dictionary
}
