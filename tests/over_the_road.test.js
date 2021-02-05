import test from 'ava';
import overTheRoad from '../src/over_the_road';

test('returns a even number of opposite house', (t) => {
  t.is(overTheRoad(1, 3), 6);
});

test('returns a odd number of opposite house', (t) => {
  t.is(overTheRoad(2, 3), 5);
});

test('returns a valid value for big numbers also', (t) => {
  t.is(overTheRoad(23633656673, 310027696726), 596421736780);
});
