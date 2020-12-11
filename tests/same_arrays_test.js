import test from 'ava';
import comp from '../src/same_arrays.js';

test('Return false if one or both of arrays are null or undefined.', t => {
  t.false(comp([3, 6, 9], undefined));
  t.false(comp(null, [3, 6, 9]));
  t.false(comp(null, undefined));
});

test('Return false if arrays have different length.',  t => {
  t.false(comp([70, 70], [4900, 4900, 4900]));
});

test('Return true for empty arrays.', t => {
  t.true(comp([], []));
})

test('Return true if arrays have the "same" elements, with the same multiplicities.', t => {
  const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
  const a4 = [85, 81, 86];
  const a5 = [7225, 6561, 7396];
  const a6 = [70, 70];
  const a7 = [4900, 4900];
  t.true(comp(a1, a2));
  t.true(comp(a6, a7));
  t.true(comp(a4, a5));
});

test('Return false if arrays has not the "same" elements, with the same multiplicities.', t => {
  const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  const a2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
  const a3 = [85, 81, 86];
  const a4 = [7225, 6551, 7396];
  t.false(comp(a1, a2));
  t.false(comp(a3, a4));
});
