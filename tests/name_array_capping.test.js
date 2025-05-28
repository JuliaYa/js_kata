const { assert } = require('chai');
const { capMe } = require('../src/name_array_capping');

describe("capMe", function() {

  it ("should return array of capitalized names if lowercase are given", function() {
    assert.deepEqual(capMe(['johnny']), ['Johnny']);                               
  });

  it ("should return an array of capitalized names if uppercase strings are given", function() {
    assert.deepEqual(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);
  });
  
  it ("should return an array of capitalized names if random names are given.", function() {
    let getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    let randOne   = String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122));
    let randTwo   = String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122));
    let randThree = String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122)) + String.fromCharCode(getRandomInt(97, 122));
    
    assert.deepEqual(capMe([randOne, randTwo]), [randOne.charAt(0).toUpperCase() + randOne.substring(1).toLowerCase(), randTwo.charAt(0).toUpperCase() + randTwo.substring(1).toLowerCase()]);
  });

});