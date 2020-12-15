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
  t.true(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
  ));
  t.true(comp([70, 70], [4900, 4900]));
  t.true(comp([85, 81, 86],[7225, 6561, 7396]));
});

test('Return false if arrays has not the "same" elements, with the same multiplicities.', t => {
  t.false(
    comp(
      [121, 144, 19, 161, 19, 144, 19, 11],
      [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  ));
  t.false(comp([85, 81, 86], [7225, 6551, 7396]));
});
