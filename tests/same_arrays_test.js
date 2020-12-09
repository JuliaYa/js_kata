import test from 'ava';
import comp from '../src/same_arrays.js'

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
const a3 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

const a4 = [85, 81, 86];
const a5 = [7225, 6561, 7396];
const a6 = [70, 70];
const a7 = [4900, 4900];
const a8 = [4900, 4900, 4900];

test('If one or both of input arrays are null or undefined return false.', t => {
  t.false(comp([3, 6, 9], undefined));
  t.false(comp(null, [3, 6, 9]));
  t.false(comp(null, undefined));
});

test('If arrays have different length return false.',  t => {
  t.false(comp(a6, a8));
});

test('If arrays are both empty return true.', t => {
  t.true(comp([], []));
})

test('Arrays are the "same" if they have the "same" elements, with the same multiplicities.', t => {
  t.true(comp(a1, a2));
  t.true(comp(a6, a7));
  t.true(comp(a4, a5));
});

test('Arrays are not the "same" if they haven\'t the "same" elements, with the same multiplicities.', t => {
  t.false(comp(a1, a3));
  t.false(comp(a4, a7));
});
