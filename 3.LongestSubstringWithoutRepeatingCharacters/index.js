/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) {
      return 0
  }
  
  let winningSubstring = s.charAt(0)

  for (let i = 0; i < s.length; i++) {
      let currentSubstring = s.charAt(i)
      
      inner:
        for (let j = i+1; j < s.length; j++) {
            const nextChar = s.charAt(j)

            if (!currentSubstring.includes(nextChar)) {
                currentSubstring = currentSubstring.concat(nextChar)
            } else {
                break inner
            }
        }
        
        if (currentSubstring.length > winningSubstring.length) {
          winningSubstring = currentSubstring
        }
  }
  
  return winningSubstring.length
};

const test = (s, expectedLength) => {
  console.log(`Actual: ${lengthOfLongestSubstring(s)} // Expected: ${expectedLength}`)
}

test('', 0)
test(' ', 1)
test('abc', 3)
test('aaabcaa', 3)
test('aaabc', 3)
test('abcdefg', 7)