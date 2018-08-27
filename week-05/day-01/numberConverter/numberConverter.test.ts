import { numberConverterToHundred, numberConverterOverHundred, overThousand } from "./numberConverter";

'use strict'
const test = require('tape')


test('Write out one, if input number is 1', t => {
  let inputNumber: number = 1;
  let result: string = numberConverterToHundred(inputNumber);

  t.equal(result, 'one', '1 in written is one')
  t.end()  

})

test('Write out two, if input number is 2', t => {
  let inputNumber: number = 2;
  let result: string = numberConverterToHundred(inputNumber);

  t.equal(result, 'two', '2 in written is two')
  t.end()  

})

test('Write out three, if input number is 3', t => {
  let inputNumber: number = 3;
  let result: string = numberConverterToHundred(inputNumber);

  t.equal(result, 'three', '3 in written is three')
  t.end()  

})

test('Write out ten, if input number is 10', t => {
  let inputNumber: number = 10;
  let result: string = numberConverterToHundred(inputNumber);

  t.equal(result, 'ten', '10 in written is ten')
  t.end()  

})



test('Write out twenty-two, if input number is 22', t => {
  let inputNumber: number = 22;
  let result: string = numberConverterToHundred(inputNumber);

  t.equal(result, `twenty-two`, '22 in written is twenty-two')
  t.end()  

})


test('Write out fifty, if input number is 50', t => {
  let inputNumber: number = 50;
  let result: string = numberConverterToHundred(inputNumber);

  t.equal(result, `fifty`, '50 in written is fifty')
  t.end()  

})


test('Write out one hundred, if input number is 100', t => {
  let inputNumber: number = 100;
  let result: string = numberConverterOverHundred(inputNumber);

  t.equal(result, `one hundred`, '100 in written is one hundred')
  t.end()  

})


test('Write out two hundred and fifty-nine, if input number is 259', t => {
  let inputNumber: number = 259;
  let result: string = numberConverterOverHundred(inputNumber);

  t.equal(result, `two hundred and fifty-nine`, '259 in written is two hundred and fifty-nine')
  t.end()  

})

test('Write out twenty-two thousand two hundred and fifty-nine, if input number is 22259', t => {
  let inputNumber: number = 22259;
  let result: string = overThousand(inputNumber);

  t.equal(result, `twenty-two thousand two hundred and fifty-nine`, '22259 in written is twenty-two thousand two hundred and fifty-nine')
  t.end()  

})

test('Write out twenty-two thousand two hundred and fifty-nine, if input number is 22259', t => {
  let inputNumber: number = 122259;
  let result: string = overThousand(inputNumber);

  t.equal(result, `one hundred and twenty-two thousand two hundred and fifty-nine`, '22259 in written is twenty-two thousand two hundred and fifty-nine')
  t.end()  

})

test('Write out nine hundred and ninety-nine thousand nine hundred and ninety-nine, if input number is 999999', t => {
  let inputNumber: number = 999999;
  let result: string = overThousand(inputNumber);

  t.equal(result, `nine hundred and ninety-nine thousand nine hundred and ninety-nine`, 'nine hundred and ninety-nine thousand nine hundred and ninety-nine, if input number is 999999')
  t.end()  

})