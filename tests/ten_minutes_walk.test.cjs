const chai = require('chai');
const { isValidWalk } = require('../src/ten_minutes_walk');

const { assert } = chai;
chai.config.truncateThreshold = 0;

const fail = [
  ['n'],
  ['n', 's'],
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
  ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's', 'e', 'w'],
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'],
  ['e', 'e', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
  ['n', 'e', 'n', 'e', 'n', 'e', 'n', 'e', 'n', 'e'],
  ['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
  ['e', 's', 'e', 's', 'e', 's', 'e', 's', 'e', 's'],
  ['w', 's', 'w', 's', 'w', 's', 'w', 's', 'w', 's'],
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w'],
];

const pass = [
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
  ['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w'],
  ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's'],
  ['n', 'n', 'n', 's', 's', 's', 'e', 'w', 'n', 's'],
];

describe('Walk Validator', () => {
  it('should return false if walk is too short', () => {
    assert.isFalse(isValidWalk(fail[0]), 'should return false');
    assert.isFalse(isValidWalk(fail[1]), 'should return false');
  });
  it('should return false if walk is too long', () => {
    assert.isFalse(isValidWalk(fail[2]), 'should return false');
    assert.isFalse(isValidWalk(fail[3]), 'should return false');
    assert.isFalse(isValidWalk(fail[10]), 'should return false');
  });
  it('should return false if walk does not bring you back to start', () => {
    assert.isFalse(isValidWalk(fail[4]), 'should return false');
    assert.isFalse(isValidWalk(fail[5]), 'should return false');
    assert.isFalse(isValidWalk(fail[6]), 'should return false');
    assert.isFalse(isValidWalk(fail[7]), 'should return false');
    assert.isFalse(isValidWalk(fail[8]), 'should return false');
    assert.isFalse(isValidWalk(fail[9]), 'should return false');
  });
  it('should return true for a valid walk', () => {
    assert.isTrue(isValidWalk(pass[0]), 'should return true');
    assert.isTrue(isValidWalk(pass[1]), 'should return true');
    assert.isTrue(isValidWalk(pass[2]), 'should return true');
    assert.isTrue(isValidWalk(pass[3]), 'should return true');
  });
});

describe('Random Walk Validator', () => {
  function isValidWalkReference(walk) {
    const time = walk.length; const
      totals = {
        n: 0, s: 0, w: 0, e: 0,
      };

    if (time !== 10) return false;

    walk.forEach((el) => {
      totals[el] += 1;
    });

    return totals.n === totals.s && totals.w === totals.e;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function randInt(n) {
    return Math.floor(Math.random() * n);
  }

  function generateValidWalk() {
    const pairs = [['n', 's'], ['e', 'w']];
    let path = [];
    for (let i = 0; i < 5; i++) {
      path = path.concat(pairs[randInt(2)]);
    }
    return path;
  }

  function generateInvalidWalk() {
    const invalidPaths = [['n', 'n', 's', 'e', 'e', 'w'], ['n', 's', 's', 'e', 'e', 'w'], ['n', 'n', 's', 'e', 'w', 'w'], ['n', 's', 's', 'e', 'w', 'w']];
    const pairs = [['n', 's'], ['e', 'w']];
    const pairsToAdd = randInt(4);
    let path = invalidPaths[randInt(4)];
    for (let i = 0; i < pairsToAdd; i++) {
      path = path.concat(pairs[randInt(2)]);
    }
    return path;
  }

  for (let i = 0; i < 100; i++) {
    const expected = [randInt(2) < 1];
    expected.push(expected[0] ? generateValidWalk() : generateInvalidWalk());
    shuffle(expected[1]);
    it(`should return ${expected[0]} for a${expected[0] ? ' ' : 'n in'}valid walk`, () => {
      if (expected[0]) {
        assert.isTrue(isValidWalk(expected[1]), 'should return true');
      } else {
        assert.isFalse(isValidWalk(expected[1]), 'should return false');
      }
    });
  }
});
