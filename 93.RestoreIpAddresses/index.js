/**
 *
 * @param {string} part
 */
const isValidPart = (part) => {
  if (part.length === 0) {
    return false;
  }

  if (part.length === 1) {
    return true;
  }

  if (part.startsWith("0")) {
    return false;
  }

  return +part >= 0 && +part <= 255;
};

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];

  const backtrack = (currentParts, currentIndex) => {
    if (currentParts.length > 4) {
      return;
    }

    if (currentParts.length === 4 && currentIndex >= s.length) {
      result.push(currentParts.join("."));
      return;
    }

    // "25510012215"
    for (let i = currentIndex; i < s.length; i++) {
      const part = s.substr(currentIndex, (i - currentIndex) + 1);
      if (isValidPart(part)) {
        backtrack([...currentParts, part], i + 1);
      }
    }
  };

  backtrack([], 0);
  return result;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("1111"));
console.log(restoreIpAddresses("010010"));
console.log(restoreIpAddresses("101023"));
