import { countletters } from "./countletters";

const test = require('tape')

test ('testing the Countletter function', t => {
  let stringTestOne: string = 'barbanegra';
  
  t.equal (countletters(stringTestOne)[1]["letter"]==='b', true, 'Dictionary object second item is letter b')
  t.equal (countletters(stringTestOne)[1]["occurence"]==='b', false, 'Dictionary object second item occurence is not b')
  t.equal (countletters(stringTestOne)[1]["occurence"]=== 2, true, 'Dictionary object second item occurence is not b')
  t.end()

})
