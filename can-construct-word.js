/**
 * 1. Understand
 * restate: Given a word and some letters, determine if we could create that word
 * with the letters given (can't use a letter more than once, ok to have letters that don't exist in word)
 * i: word and letter
 * o: boolean: t/f
 * enough info: empty word or letter strings, different data structures
 * names: word, letters
 *
 * 2. Concrete
 * concrete examples: given
 *
 * 3. Break it down
 * Make a counter object for word and letters
 * compare the keys and the count for each key
 * ignore extra keys from the letters
 * return false if the count of the matching letters don't match
 * return true if each key in the word has a matching key in the letters, with same
 * count
 *
 * Q: throw an error?
 */

// add whatever parameters you deem necessary & write doc comment
/**
 *
 * @param {string} word
 * @param {string} letter
 * @returns boolean that determines whether the first string can be made the
 * chars in the second string
 */
function canConstructWord(word, letter) {

  const wordObj = getFrequencyCounter(word);
  const letterObj = getFrequencyCounter(letter);

  for (let key in wordObj) {

    if(!(key in letterObj) || wordObj[key] > letterObj[key]) {
      // will exclude cases where chars in word do not exist in letter
      // letter string can only create word string if it has at least the same
      //num of chars as the other for a given char
      return false;
    }

  }

  return true;
}

/**
 *
 * @param {string} items can be either input strings
 * @returns an object that contains the chars of the input string
 * as keys, and then frequency of the char as its value
 */
function getFrequencyCounter(items) {
  const freqs = {};

  for (let item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

console.log(canConstructWord('aa', 'abc'));
  // false -- can't build "aa" with only 1 "a"

console.log(canConstructWord('abc', 'dcba'));
  // true -- can build "abc" with letters "abcd"

console.log(canConstructWord('aabb', 'bcabad'));
  // true -- can build "aabbcc" with those letters


