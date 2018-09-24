'use strict';
const tape = require('tape');
const source = require('./app');

const cards = [
  ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'],
  ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'],
  ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'],
  ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC'],
];


//in javascript you need tape.test just because....
tape.test('Is the card from the pack', t => {
  const result = true;
  const item = '2H'
  t.equal(result, source.isItemInArray(cards, item));
  t.end();
});

tape.test('Is the card from the pack', t => {
  const result = false;
  const item = '2B'
  t.equal(result, source.isItemInArray(cards, item));
  t.end();
});

tape.test('Card at hand index values', t => {
  let sampleCardSet = ['2H', '3D', '5S', '4D', 'KD'];
  let result = [[2, 0], [0, 1], [1, 3], [0, 2], [0, 11]];
  t.deepEqual(result, source.tellmeTheIndex(cards, sampleCardSet));
  t.end();
});

tape.test('is it a valid hand - scenario valid', t => {
  let sampleCardSet = ['2H', '3D', '5S', '4D', 'KD'];
  let result = true;
  t.equal(result, source.isValidHand(sampleCardSet));
  t.end();
});

tape.test('is it a valid hand - scenario invalid', t => {
  let sampleCardSetFail = ['2H', '3D', '5S', '5S', 'KD'];
  let result = false;
  t.equal(result, source.isValidHand(sampleCardSetFail));
  t.end();
});

tape.test('find highest card', t => {
  let cardSet = [[2, 0], [0, 1], [1, 3], [0, 2], [0, 11]];
  let result = [0, 11];
  t.deepEqual(result, source.findHighestCard(cardSet));
  t.end();
});

tape.test('show me the pairs case 1pair', t => {
  let cardSet = [[2, 0], [0, 5], [1, 5], [0, 2], [0, 11]];
  let result = [[0, 5], [1, 5]];
  t.deepEqual(result, source.showmethePairs(cardSet));
  t.end();
});

tape.test('show me the pairs case 2pairs', t => {
  let cardSet = [[2, 0], [0, 5], [1, 5], [0, 11], [2, 11]];
  let result = [[0, 5], [1, 5], [0, 11], [2, 11]];
  t.deepEqual(result, source.showmethePairs(cardSet));
  t.end();
});

tape.test('show me the pairs case noPair', t => {
  let cardSet = [[2, 0], [0, 5], [1, 3], [0, 11], [2, 10]];
  let result = false;
  t.deepEqual(result, source.showmethePairs(cardSet));
  t.end();
});

tape.test('show me the drill case we have a drill', t => {
  let cardSetDrill = [[2, 0], [0, 5], [1, 5], [2, 5], [2, 11]];
  let result = [[0, 5], [1, 5], [2, 5]];
  t.deepEqual(result, source.showmetheDrill(cardSetDrill));
  t.end();
});

tape.test('show me the drill - case no drill', t => {
  let cardSetNodrill = [[2, 0], [0, 5], [1, 3], [0, 11], [2, 10]];
  let result = false;
  t.deepEqual(result, source.showmetheDrill(cardSetNodrill));
  t.end();
});


