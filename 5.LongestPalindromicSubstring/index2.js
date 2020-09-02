/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestSubstring = ""

  const findSubstringFromIndex = (i, j) => {
    while (i >= 0 && j < s.length && s.charAt(i) === s.charAt(j)) {
      i--
      j++
    }
    return s.substring(i + 1, j)
  }

  for (let i = 0; i < s.length; i++) {
    const s1 = findSubstringFromIndex(i, i)
    const s2 = findSubstringFromIndex(i, i+1)
    const longer = s1.length > s2.length ? s1 : s2
    if (longer.length > longestSubstring.length) {
      longestSubstring = longer
    }
  }

  return longestSubstring
}

console.log(longestPalindrome("babad"))
