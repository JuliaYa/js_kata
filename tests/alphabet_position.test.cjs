const { strictEqual } = require('chai').assert;
const { alphabetPosition } = require('../src/alphabet_position');

function ap(text) {
  return text.toLowerCase().split('').filter((l) => /[a-z]/.test(l)).map((l) => l.charCodeAt() - 96)
    .join(' ');
}

function randomChar() {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? '; const
    rand = Math.floor(Math.random() * chars.length);
  return chars[rand];
}

describe('Replace with alphabet position', () => {
  it('Fixed tests:', () => {
    for (let i = 65; i <= 122; i++) {
      const letter = String.fromCharCode(i);
      strictEqual(alphabetPosition(letter), ap(letter));
    }
    strictEqual(alphabetPosition("-.-'"), '');
  });
});
describe('Randomly generated tests:', () => {
  for (let i = 0; i < 50; i++) {
    let x = '';
    for (let j = 0; j < 8; j++) {
      x += randomChar();
    }
    it(`Testing "${x}"`, () => strictEqual(alphabetPosition(x), ap(x)));
  }
});
