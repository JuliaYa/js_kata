import test from 'ava';
import consecutive from '../src/consecutive_nums.js';

test('Return 0 for empty array.', (t) => {
  t.is(consecutive([]), 0);
});

test('Return 0 for array with one element.', (t) => {
  t.is(consecutive([1]), 0);
});

test('Return 0 for array with consecutive numbers.', (t) => {
  t.is(consecutive([1, 2, 3, 4, 5]), 0);
  t.is(consecutive([3, 4, 1, 2]), 0);
});

test('Return a count of numbers that make the array consecutive.', (t) => {
  t.is(consecutive([4, 8, 6]), 2);
  t.is(consecutive([4, 8, 6, 14, 18]), 10);
});
