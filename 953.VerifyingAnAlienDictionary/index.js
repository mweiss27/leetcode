/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const scoreLookup = order.split("").reduce((result, char, index) => {
    result[char] = index;
    return result;
  }, {});

  for (let i = 0; i < words.length - 1; i++) {
    const leftWord = words[i];
    const rightWord = words[i + 1];
    const minLength = Math.min(leftWord.length, rightWord.length);

    for (let k = 0; k < minLength; k++) {
      const leftScore = scoreLookup[leftWord.charAt(k)];
      const rightScore = scoreLookup[rightWord.charAt(k)];

      if (leftScore < rightScore) {
        break;
      } else if (rightScore < leftScore) {
        return false;
      } else if (k === minLength - 1 && leftWord.length > rightWord.length) {
        return false;
      }
    }
  }

  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
