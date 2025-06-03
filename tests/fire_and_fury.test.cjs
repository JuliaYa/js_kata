const chai = require("chai");
const assert = chai.assert;
const {fireAndFury} = require('../src/fire_and_fury');

describe("fire and fury", function() {

  it("ex1", function() {
    assert.strictEqual(fireAndFury("FURYYYFIREYYFIRE"), "I am furious. You and you are fired!");
  });
  
  it("ex2", function() {
    assert.strictEqual(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"), "You are fired! I am really furious. You are fired!");
  });
  
  it("ex3", function() {
    assert.strictEqual(fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet.");
  });
  
  it("ex4", function() {
    assert.strictEqual(fireAndFury("FYRYFIJHGRUFIREFURE"), "Fake tweet.");
  });
});
