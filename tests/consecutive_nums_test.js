import test from 'ava';
import consecutive from '../src/consecutive_nums.js';

test('If input array is empty should return 0.', t => {
  t.is(consecutive([]), 0);
});

test('If input array contains one element should return 0.', t => {
  t.is(consecutive([1]), 0);
});

test('If input array contains consecutive nums should return 0.', t => {
  t.is(consecutive([1,2,3,4,5]), 0);
  t.is(consecutive([3,4,1,2]), 0);
});

test('For valid array should return a count of numbers that make the array consecutive.', t => {
  t.is(consecutive([4,8,6]), 2);
  t.is(consecutive([4,8,6,14,18]), 10);
});
