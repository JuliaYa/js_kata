const { assert } = require('chai');
const { comp } = require('../src/same_arrays');

describe('Basic tests', () => {
  const tests = [

    [
      [121, 144, 19, 161, 19, 144, 19, 11],
      [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
      true,
    ],
    [
      [121, 144, 19, 161, 19, 144, 19, 11],
      [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
      false,
    ],
    [
      [121, 144, 19, 161, 19, 144, 19, 11],
      [11 * 11, 121 * 121, 144 * 144, 190 * 190, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
      false,
    ],
    [
      [2, 1, 3],
      [18, 1, 2],
      false,
    ],
    [
      [],
      [],
      true,
    ],
    [
      [],
      null,
      false,
    ],
    [
      [121, 144, 19, 161, 19, 144, 19, 11, 1008],
      [11 * 11, 121 * 121, 144 * 144, 190 * 190, 161 * 161, 19 * 19, 144 * 144, 19 * 19],
      false,
    ],
    [
      [10000000, 100000000],
      [10000000 * 10000000, 100000000 * 100000000],
      true,
    ],
    [
      [10000001, 100000000],
      [10000000 * 10000000, 100000000 * 100000000],
      false,
    ],
    [
      [2, 2, 3],
      [4, 9, 9],
      false,
    ],
    [
      [2, 2, 3],
      [4, 4, 9],
      true,
    ],
    [
      [4, 4],
      [1, 31],
      false,
    ],
    [
      [3, 4],
      [0, 25],
      false,
    ],
    [
      null,
      [],
      false,
    ],
  ];

  const stringify = (arr) => (arr === null ? 'null' : `[${arr.join(', ')}]`);

  for (const [a1, a2, expected] of tests) {
    it(`Testing for ${stringify(a1)} and ${stringify(a2)}`, () => {
      assert.strictEqual(comp(a1 ? [...a1] : null, a2 ? [...a2] : null), expected);
    });
  }
});

describe('Random tests', () => {
  function randint(a, b) { return Math.floor(Math.random() * (b - a + 1) + a); }

  function sol(a1, a2) {
    if (a1 == null || a2 == null) return false;
    a1.sort((a, b) => a - b); a2.sort((a, b) => a - b);
    return a1.map((v) => v * v).every((v, i) => v == a2[i]);
  }

  // added
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  //

  for (let i = 0; i < 200; i++) {
    // modified from 1,8 to 10,25
    testlen = randint(10, 25);
    let a1 = []; 
    let a2 = [];
    for (let j = 0; j < testlen; j++) {
      // elem=randint(0,100);
      elem = randint(0, 10);
      a1.push(elem);
      a2.push(elem * elem);
    }
    // modified
    rn = randint(0, 100);
    if (rn % 3 === 0) {
      pos = randint(0, a2.length - 1);
      // a2[pos]=a2[pos]+randint(0,1);
      a2[pos] = a2[pos] + 1;
    }
    //
    // added
    a1 = shuffle(a1);
    a2 = shuffle(a2);
    //
    it(`Testing for [${a1.join(', ')}] and [${a2.join(', ')}]`, () => {
      assert.strictEqual(comp(a1 ? [...a1] : null, a2 ? [...a2] : null), sol(a1, a2), 'It should work with random inputs too');
    });
  }
});
