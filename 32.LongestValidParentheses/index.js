/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const dp = Array(s.length).fill(0)

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1] === "(") {
      // Case where we see (), add 2 to our previous valid length
      dp[i] = (dp[i - 2] || 0) + 2
    } else if (s[i] === ")" && s[i - 1] === ")") {
      const previousValidLength = dp[i - 1] || 0
      console.log(`We saw )). Previous valid ss: ${previousValidLength}`)
      // Case where we see )), add 2 to our previous length IFF the paren before our current valid length is (
      // AND the length of the valid length before that ( since it was prevously considered invalid
      if (s[i - previousValidLength - 1] === "(") {
        dp[i] = previousValidLength + (dp[i - previousValidLength - 2] || 0) + 2
      }
    }
  }

  console.log(dp)

  dp.sort((a, b) => b - a)
  return dp[0]
}

console.log(longestValidParentheses("(()())"))
