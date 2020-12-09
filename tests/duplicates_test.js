import test from 'ava';
import duplicateCount from '../src/duplicates.js';

test('If string is empty should return 0.', t => {
  t.is(duplicateCount(''), 0);
});

test('If characters not repeats in string should return 0.', t => {
  t.is(duplicateCount('abcde'), 0);
});

test('Should return number of unic characters that repeats in input string.', t => {
  t.is(duplicateCount('aabbcde', 2));
  t.is(duplicateCount('aabBcde'), 2);
  t.is(duplicateCount('Indivisibility'), 1);
  t.is(duplicateCount('aA11'), 2);
});
