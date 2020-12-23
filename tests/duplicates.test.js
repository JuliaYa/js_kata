import test from 'ava';
import duplicateCount from '../src/duplicates';

test('Return 0 for empty string.', (t) => {
  t.is(duplicateCount(''), 0);
});

test('Return 0 for string with unic characters.', (t) => {
  t.is(duplicateCount('abcde'), 0);
});

test('Return number of uniq characters that repeats in input string.', (t) => {
  t.is(duplicateCount('aabbcde'), 2);
  t.is(duplicateCount('aabBcde'), 2);
  t.is(duplicateCount('Indivisibility'), 1);
  t.is(duplicateCount('aA11'), 2);
});
