import test from 'ava';
import arrayDiff from '../src/array_diff';

test('returns empty when first array is empty', (t) => {
  t.deepEqual(
    arrayDiff([], [4, 5]),
    [],
  );
});

test('returns first array when second array is empty', (t) => {
  t.deepEqual(
    arrayDiff([1, 8, 2], []),
    [1, 8, 2],
  );
});

test('returns an array with difference between first and second arrays', (t) => {
  t.deepEqual(
    arrayDiff([1, 2], [1]),
    [2],
  );
});

test('returns an array contained difference without repeated numbers', (t) => {
  t.deepEqual(
    arrayDiff([1, 2, 2, 2, 3], [2]),
    [1, 3],
  );
});
