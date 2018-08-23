'use strict'

export function isAnagram(stringOne: string, stringTwo: string): boolean {
  return stringOne.split('').sort().join('') === stringTwo.split('').sort().join('')
}
console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('listen', 'silont'))
