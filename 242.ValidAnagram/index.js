/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const lookup = {}
  for (const char of s) {
      lookup[char] = (lookup[char] || 0) + 1
  }
  
  for (const char of t) {
      if (!lookup[char] || lookup[char] === 0) {
          return false
      }
      lookup[char]--
  }
  
  return Object.values(lookup).every(count => count === 0)
};