import {isAnagram} from "./anagram"
const test = require('tape')

test ('testing the Anagram function', t => {
  let stringTestBase: string = 'listen';
  let stringTestAnagram: string = 'silent';
  let stringTestNotAnagram: string = 'silont';
  
  t.equal (isAnagram(stringTestBase, stringTestAnagram), true, 'stringTestBase and stringTestAnagram are anagrams')
  t.equal (isAnagram(stringTestBase, stringTestNotAnagram), false, 'stringTestBase and stringTestNotAnagram are not anagrams')
  t.end()

})