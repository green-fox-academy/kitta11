'use strict';

const test = require('tape')
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 4 is 6', function (t: any): any {
  t.equal(add(2, 4), 6);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(6, 4, 3), 6);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(6, 6, 7), 7);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 12, 5]), 8.5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test("is vowel: k", function(t: any): any {
  t.notOk(isVowel('k'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: alma', function (t: any): any {
  t.equal(translate('alme'), 'avalmeve');
  t.end();
});