const numberMap = new Map([
  ["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"],
]);

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) {
    return []
  }
  
  let result = [];
  console.log(digits.split("").map((digit) => numberMap.get(digit)));

  const combinations = (currentCombination, nextDigits) => {
    if (!nextDigits.length) {
      result.push(currentCombination);
    } else {
      const chars = numberMap.get(nextDigits[0]);
      for (const char of chars) {
        combinations(currentCombination + char, nextDigits.slice(1));
      }
    }
  };
  combinations("", digits);
  return result;
};

console.log(letterCombinations("234"));
