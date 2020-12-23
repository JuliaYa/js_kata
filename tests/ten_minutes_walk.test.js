import test from 'ava';
import isValidWalk from '../src/ten_minutes_walk';

test('Person end up at starting point after 10 minutes.', (t) => {
  t.is(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
  t.is(isValidWalk(['w', 's', 'e', 'n', 'e', 'w', 'w', 's', 'e', 'n']), true);
});

test('Person does not end up at starting point in 10 minutes.', (t) => {
  t.is(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'n']), false);
});

test('Walk is invalid if it lasts more or less than 10 minutes.', (t) => {
  t.is(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n']), false);
  t.is(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 'w', 'e', 'w', 'e', 'w']), false);
});
