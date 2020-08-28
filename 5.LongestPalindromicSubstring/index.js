/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || !s.length) {
      return ""
  }
  
  const findPalindromeFromCenter = (left, right) => {
      let l = left, r = right
      while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
          l--
          r++
      }
      return s.substring(l + 1, r)
  }
  
  let sl = 0, sr = 0
  let winner = ""
  for (let i = 0; i < s.length; i++) {
      const oddPalindrome = findPalindromeFromCenter(i, i)
      const evenPalindrome = findPalindromeFromCenter(i, i + 1)
              
      const longerSubstring = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome
      if (longerSubstring.length > winner.length) {
          winner = longerSubstring
      }
  }
  
  return winner
};