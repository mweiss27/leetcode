/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const dp = Array(s.length).fill(0)
  
  let prevValidIndex
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ")") {
          if (s[i - 1] === "(") {
              dp[i] = (dp[i-2] || 0) + 2
          }
      }
  }
  
  console.log(s, dp)
  return Math.max(...dp)
}

console.log(longestValidParentheses("()"))
console.log(longestValidParentheses("(())"))
console.log(longestValidParentheses("())"))
console.log(longestValidParentheses("(()"))