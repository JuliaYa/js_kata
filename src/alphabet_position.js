// Replace With Alphabet Position

// In this kata you are required to, given a string,
// replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

export default function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return text.split('').reduce((result, char) => {
    const index = alphabet.indexOf(char.toLowerCase());

    if (index >= 0) {
      result.push(index + 1);
    }

    return result;
  }, []).join(' ');
}
