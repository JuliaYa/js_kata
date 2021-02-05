import test from 'ava';
import alphabetPosition from '../src/alphabet_position';

test('Returns empty string for text without letters.', (t) => {
  t.is(
    alphabetPosition('1984, 2000, 2020'),
    '',
  );
  t.is(
    alphabetPosition('! & %.36$$#'),
    '',
  );
});

test('Returns a string that contains alphabet position of letters.', (t) => {
  t.is(
    alphabetPosition("The sunset sets at twelve o' clock."),
    '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11',
  );
  t.is(
    alphabetPosition('The narwhal bacons at midnight.'),
    '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20',
  );
});
