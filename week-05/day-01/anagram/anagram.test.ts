import { anagramCheck } from "./anagram";

'use strict'
const test = require('tape')

test('Two inpustring are anagrams', t => {
  let stringOne: string = 'listen';
  let stringTwo: string = 'silent';
  let result = anagramCheck(stringOne, stringTwo);

  t.equal(result, true, 'Listen and silent should be anagram of each other');
  t.end();

  
})

test('Two inpustring are not anagrams', t => {
  let stringOne: string = 'listen';
  let stringTwo: string = 'sklent';
  let result = anagramCheck(stringOne, stringTwo);

  t.equal(result, false, 'Listen and sklent should not be anagram of each other');
  t.end();

  
})

test('input string is contain some special caracters', t => {
  let stringOne: string = 'listen1';
  let stringTwo: string = 'sklent';
  let result = anagramCheck(stringOne, stringTwo);

  t.equal(result, false, 'Listen and sklent should not be anagram of each other');
  t.end();

  
})
