'use strict';

export function anagramCheck (inputstringOne: string, inputstringTwo: string): boolean {
  return inputstringOne.split(``).sort().join() === inputstringTwo.split(``).sort().join();

}