import test from 'ava';
import songDecoder from '../src/dubstep_dj.js';

test('Remix succesfully decoded to initial song.', t => {
  t.is(songDecoder("AWUBBWUBC"), "A B C");
  t.is(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
});

test('Remix not decoded to the song.', t => {
  t.not(songDecoder("AWUBBWUBCGWUBCB"), "A B C");
  t.not(songDecoder("AWUBWUBWWUBBWUBBWUBWUBC"), "A B C");
});
