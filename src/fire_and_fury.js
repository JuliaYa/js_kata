// The President's phone is broken
// He is not very happy.

// The only letters still working are uppercase E, F, I, R, U, Y.

// An angry tweet is sent to the department responsible for presidential phone maintenance.

// Kata Task
// Decipher the tweet by looking for words with known meanings.

// FIRE = "You are fired!"
// FURY = "I am furious."
// If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

// Notes
// The tweet reads left-to-right.
// Any letters not spelling words FIRE or FURY are just ignored
// If multiple of the same words are found in a row then plural rules apply -
// FIRE x 1 = "You are fired!"
// FIRE x 2 = "You and you are fired!"
// FIRE x 3 = "You and you and you are fired!"
// etc...
// FURY x 1 = "I am furious."
// FURY x 2 = "I am really furious."
// FURY x 3 = "I am really really furious."
// etc...
// Examples
// ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
// ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
// ex3. FYRYFIRUFIRUFURE = "Fake tweet."

function parseMessage(str) {

  const matches = [...str.matchAll(/FIRE|FURY/g)].map(m => m[0]);

  if (matches.length === 0) return [];

  const result = [];
  let current = matches[0];
  let count = 1;

  for (let i = 1; i < matches.length; i++) {
    if (matches[i] === current) {
      count++;
    } else {
      result.push([current, count]);
      current = matches[i];
      count = 1;
    }
  }

  result.push([current, count]);

  return result;
}

export function fireAndFury(tweet) {
  const reg = /^[FIREUY]+$/;

  if (!reg.test(tweet)) { // if unexpected letters are encountered
    return 'Fake tweet.';
  }
  
  var hlpArray = parseMessage(tweet);
  if (hlpArray.length === 0) return 'Fake tweet.'

  let decipheredTweet = '';

  hlpArray.forEach(pair => {
    let phrase = '';
    let [word, count] = pair;

    if (word === 'FIRE') {
      phrase = 'You ';
      count--;

      while (count > 0) {
        phrase += 'and you ';
        count--;
      }

      phrase += 'are fired!';
    } else {
      phrase = 'I am ';
      count--;

      while (count > 0) {
        phrase += 'really ';
        count--;
      }

      phrase += 'furious.';
    }

    if (decipheredTweet.length === 0) {
      decipheredTweet = phrase;
    } else {
      decipheredTweet = decipheredTweet + ' ' + phrase;
    }
  });

  return decipheredTweet;
}
