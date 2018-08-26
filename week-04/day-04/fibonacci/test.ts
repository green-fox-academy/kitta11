
import { fibonacci } from "./fibonacci";
const test = require('tape')
'use strict'

test ('testing the Fibonacci function', t => {
  
  t.equal (fibonacci(0), 0, 'Fibonacci value of 0 is 0')
  t.equal (fibonacci(1), 1, 'Fibonacci value of 1 is 1')
  t.equal (fibonacci(12), 144, 'Fibonacci value of 12 is 144')
  //QUESTION: HOW CAN WE TEST AGAINS EXCEPTION ERROR THROWING
  t.throws (function() {fibonacci(-12)}, 'Please provide a positive number') 
  t.end()
})

