const chai = require('chai');
const { arrayDiff } = require('../src/array_diff');

const { assert } = chai;
chai.config.truncateThreshold = 0;

try {
  arrayDiff([1], [1]);
} catch (error) {
  arrayDiff = array_diff;
}

describe('Basic tests', () => {
  it('Should pass Basic tests', () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], 'a was [1,2], b was [1]');
    assert.deepEqual(arrayDiff([1, 2, 2], [1]), [2, 2], 'a was [1,2,2], b was [1]');
    assert.deepEqual(arrayDiff([1, 2, 2], [2]), [1], 'a was [1,2,2], b was [2]');
    assert.deepEqual(arrayDiff([1, 2, 2], []), [1, 2, 2], 'a was [1,2,2], b was []');
    assert.deepEqual(arrayDiff([], [1, 2]), [], 'a was [], b was [1,2]');
    assert.deepEqual(arrayDiff([1, 2, 3], [1, 2]), [3], 'a was [1,2,3], b was [1,2]');
  });
});

describe('Random tests', () => {
  const array_diff_sol = (a, b) => a.filter((e) => !b.includes(e));
  function shuffle(arr) {
    for (let cIdx = arr.length - 1; cIdx > 0; cIdx--) {
      const rIdx = Math.floor(Math.random() * (cIdx + 1));
      [arr[cIdx], arr[rIdx]] = [arr[rIdx], arr[cIdx]];
    }
    return arr;
  }
  const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  for (let i = 0; i < 40; i++) {
    const a = [];
    let b = [];
    const aLength = generateRandomInt(0, 20);
    const bLength = generateRandomInt(0, aLength);
    for (let j = 0; j < aLength; j++) a.push(generateRandomInt(0, 40) - 20);
    b = shuffle(a).slice(0, generateRandomInt(0, aLength));
    const expected = array_diff_sol(a, b);
    it(`Testing for arrayDiff([${a}],[${b}])`, () => {
      assert.deepEqual(arrayDiff(a, b), expected, 'Should work for random arrays too');
    });
  }
});
