const { assert } = require('chai');
const { capMe } = require('../src/name_array_capping');

describe('capMe', () => {
  it('should return array of capitalized names if lowercase are given', () => {
    assert.deepEqual(capMe(['johnny']), ['Johnny']);
  });

  it('should return an array of capitalized names if uppercase strings are given', () => {
    assert.deepEqual(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);
  });

  it('should return an array of capitalized names if random names are given.', () => {
    const getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randOne = String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122));
    const randTwo = String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122));

    assert.deepEqual(capMe([randOne, randTwo]), [randOne.charAt(0).toUpperCase() + randOne.substring(1).toLowerCase(), randTwo.charAt(0).toUpperCase() + randTwo.substring(1).toLowerCase()]);
  });
});
