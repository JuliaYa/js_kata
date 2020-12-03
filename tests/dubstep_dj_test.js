import test from 'ava';
import songDecoder from '../src/dubstep_dj.js';

test('Should be equal', t => {
  t.is(songDecoder("AWUBBWUBC"), "A B C");
  t.is(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
});

test('Not equal', t => {
  t.not(songDecoder("AWUBBWUBCGWUBCB"), "A B C");
  t.not(songDecoder("AWUBWUBWWUBBWUBBWUBWUBC"), "A B C");
});
