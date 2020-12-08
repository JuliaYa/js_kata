import test from 'ava';
import isValidWalk from '../src/ten_minutes_walk.js';

test('Person ends at starting point after 10 minutes.', t => {
  t.is(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
  t.is(isValidWalk(['w','s','e','n','e','w','w','s','e','n']), true);
});

test('Person ends up in other coordinates than 0.0 after 10 steps.', t => {
  t.is(isValidWalk(['w','e','w','e','w','e','w','e','w','n']), false);
});

test('Walk is not 10 minutes.', t => {
  t.is(isValidWalk(['n','n','n','s','n','s','n']), false);
});
