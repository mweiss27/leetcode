/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s) {
      return true
    }

    s = s.toLowerCase()

    let i = 0, j = s.length - 1
    while (i <= j) {
      while (i < j && !s[i].match(/[a-z0-9]/)) i++
      while (i < j && !s[j].match(/[a-z0-9]/)) j--

      if (s[i] !== s[j]) {
        console.log(`i=${s[i]} !== j=${s[j]}`)
        return false
      }

      i++
      j--
    }

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))