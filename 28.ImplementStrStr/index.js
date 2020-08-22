/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  outer: for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = i; j < haystack.length; j++) {
        const substringLength = (j - i) + 1
        
        if (haystack[j] !== needle[j - i]) {
          continue outer;
        }

        if (substringLength === needle.length) {
            return i
        }
      }
    }
  }

  return -1;
};

console.log(strStr("a", "a"));
console.log(strStr("abc", "bc"));
console.log(strStr("mississippi", "issip"));
