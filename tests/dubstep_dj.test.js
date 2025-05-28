const { strictEqual } = require('chai').assert;
const { songDecoder } = require('../src/dubstep_dj');

describe("Fixed tests", function(){
  it("It should pass fixed tests", function(){
    strictEqual(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
    strictEqual(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
    strictEqual(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");

    strictEqual(songDecoder("AWUBAWUBA"), "A A A");
    strictEqual(songDecoder("RWUBWUBWUBLWUB"), "R L");
    strictEqual(songDecoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB"), "JKD WBIRAQKF YE WV");
    strictEqual(songDecoder("WUBKSDHEMIXUJWUBWUBRWUBWUBWUBSWUBWUBWUBHWUBWUBWUB"), "KSDHEMIXUJ R S H");
    strictEqual(songDecoder("QWUBQQWUBWUBWUBIWUBWUBWWWUBWUBWUBJOPJPBRH"), "Q QQ I WW JOPJPBRH");
    strictEqual(songDecoder("WUBWUBOWUBWUBWUBIPVCQAFWYWUBWUBWUBQWUBWUBWUBXHDKCPYKCTWWYWUBWUBWUBVWUBWUBWUBFZWUBWUB"), "O IPVCQAFWY Q XHDKCPYKCTWWY V FZ");
    strictEqual(songDecoder("WUBYYRTSMNWUWUBWUBWUBCWUBWUBWUBCWUBWUBWUBFSYUINDWOBVWUBWUBWUBFWUBWUBWUBAUWUBWUBWUBVWUBWUBWUBJB"), "YYRTSMNWU C C FSYUINDWOBV F AU V JB");
    strictEqual(songDecoder("WUBKSDHEMIXUJWUBWUBRWUBWUBWUBSWUBWUBWUBHWUBWUBWUB"), "KSDHEMIXUJ R S H");
    strictEqual(songDecoder("AWUBWUBWUB"), "A");
    strictEqual(songDecoder("AWUBBWUBCWUBD"), "A B C D");
    strictEqual(songDecoder("WUBWWUBWUBWUBUWUBWUBBWUB"), "W U B");
    strictEqual(songDecoder("WUWUBBWWUBUB"), "WU BW UB");
    strictEqual(songDecoder("WUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUABWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUBWUB"), "WUAB");
    strictEqual(songDecoder("U"), "U");
    strictEqual(songDecoder("WUWUB"), "WU");
    strictEqual(songDecoder("UBWUB"), "UB");
    strictEqual(songDecoder("WUWUBUBWUBUWUB"), "WU UB U");
    strictEqual(songDecoder("WUBWWUBAWUB"), "W A");
    strictEqual(songDecoder("WUUUUU"), "WUUUUU");
    strictEqual(songDecoder("WUBWUBA"), "A");
  });
});