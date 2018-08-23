import { Numberlist} from "./sum";

const test = require('tape')

test ('testing NumberList class numbertoadd method', t =>  {
  let testmultiplNum: Numberlist = new Numberlist([23, 12, 8, 32, 100]);
  t.equal (testmultiplNum.addNum(), 175, '23+12+8+32+100 sum is 175');
  let testNoNumber: Numberlist = new Numberlist([]);
  t.equal (testNoNumber.addNum(), 0, 'no number in array should return 0');
  let testOneNumber: Numberlist = new Numberlist([11]);
  t.equal (testOneNumber.addNum(), 11, 'one element in array should return the element');
  let testNullinArray: Numberlist = new Numberlist([null]);
  t.equal (testNullinArray.addNum(), 0, 'null in the array will return 0');
  let teststringinArray: Numberlist = new Numberlist(['string']);
  t.equal (teststringinArray.addNum(), 0, 'string in the array will throw error');
  t.end();
})