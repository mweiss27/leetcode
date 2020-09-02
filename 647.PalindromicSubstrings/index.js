/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const findSubstringsFrom = (i, j) => {
    const substrings = []
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      const ss = s.substring(i, j + 1)
      if (ss.length > 0) {
        substrings.push(ss)
      }
      i--
      j++
    }
    return substrings
  }

  const substrings = []

  for (let i = 0; i < s.length; i++) {
    const ss1 = findSubstringsFrom(i, i)
    const ss2 = findSubstringsFrom(i, i + 1)
    substrings.push(...ss1, ...ss2)
  }

  return substrings.length
}

console.log(countSubstrings("aaa"))
