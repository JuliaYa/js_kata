const chai = require('chai');
const { overTheRoad } = require('../src/over_the_road');

const { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Examples', () => {
  it('(1,3) --> 6', () => {
    assert.strictEqual(overTheRoad(1, 3), 6);
  });
  it('(3,3) --> 4', () => {
    assert.strictEqual(overTheRoad(3, 3), 4);
  });
  it('2,3) --> 5', () => {
    assert.strictEqual(overTheRoad(2, 3), 5);
  });
  it('(3,5) --> 8', () => {
    assert.strictEqual(overTheRoad(3, 5), 8);
  });
  it('(7,11) --> 16', () => {
    assert.strictEqual(overTheRoad(7, 11), 16);
  });
  it('(20,1000000) -->1999981', () => {
    assert.strictEqual(overTheRoad(20, 1000000), 1999981);
  });
  it('(23633656673,310027696726) --> 596421736780', () => {
    assert.strictEqual(overTheRoad(23633656673, 310027696726), 596421736780);
  });
});

function r13(a, b) {
  return 2 * b - a + 1;
}

describe('Advanced Tests', () => {
  for (let i = 0; i < 193; i++) {
    it(`Test ${i + 1}`, () => {
      street = Math.ceil(Math.random() * 500000000000);
      address = Math.ceil(Math.random() * (2 * street - 1));
      expected = r13(address, street);
      assert.strictEqual(overTheRoad(address, street), expected, `address=${address}, street=${street}`);
    });
  }
});
