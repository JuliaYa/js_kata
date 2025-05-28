const { consecutive } = require('../src/consecutive_nums');
const { strictEqual } = require('chai').assert;

describe('Tests', function () {
 
  function doTest(input, expected) {
    const actual = consecutive(input.slice());
    strictEqual(actual, expected, `for array = ${JSON.stringify(input)}\n`);
  }

  it('sample tests', function () {
    doTest([4, 8, 6], 2);
    doTest([1, 2, 3, 4], 0);
    doTest([], 0);
    doTest([1], 0);
  });

  function solution(arr) {
    arr = arr.slice().sort(function (a, b) { return a - b; });
    return (arr[arr.length - 1] - arr[0]) - (arr.length - 1) || 0;
  }

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  it('random tests', function () {
    for (let test = 0; test < 100; test++) {
      const array = [...new Set(
        Array.from({length : rand(0, 30)}, _ => rand(-60, +60))
      )];
      doTest(array, solution(array));
    }
  });
});