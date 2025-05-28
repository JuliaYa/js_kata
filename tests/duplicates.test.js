const { assert } = require('chai');
const { duplicateCount } = require('../src/duplicates');

describe('Full tests', () => {

  function dotest(input, expected) {
    assert.strictEqual(duplicateCount(input), expected, `Incorrect answer for text="${input}"`);
  }
  
  let lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase();
  
  it("Example tests", function(){
    dotest("", 0);
    dotest("abcde", 0);
    dotest("aabbcde", 2);
    dotest("Indivisibility", 1)
    dotest(lowers, 0)
    dotest(lowers+lowers, 26)
  });

  
  it("should ignore case", function(){
    dotest("aabBcde", 2);
    dotest(lowers+uppers, 26);
  });
  
  it("characters may not be adjacent", function(){
    dotest("Indivisibilities", 2);
    dotest(lowers + "baaAAB", 2);    
  });

  it("Random tests", function(){
    let rnd = function(x){ return ~~(Math.random()*x) };
    for( let t=0; t<50; t++ ){
      let len = 3+rnd(5), i=len+1, str = lowers.slice(0,len*2);
      if( rnd(100)<70 ){
        while( i-- ) str += ([lowers,uppers][rnd(2)]).slice(0,i);
      }else{
        str += lowers.slice(-len);
        len = 0;
      }
      dotest(str,len);
    }
  });
});