import test from 'ava';
import isValidWalk from '../src/ten_minutes_walk.js';

test('Walk should be valid', t => {
  t.is(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
  t.is(isValidWalk(['w','s','e','n','e','w','w','s','e','n']), true);
});

test('Walk not valid', t => {
  t.is(isValidWalk(['n','s','n']), false);
  t.is(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
  t.is(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);
});
