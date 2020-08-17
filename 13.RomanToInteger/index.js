const numerals = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
])

const subtractionNumerals = new Map([
  ["I", ["V", "X"]],
  ["X", ["L", "C"]],
  ["C", ["D", "M"]]
])

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
  
  /* 
  * @param {number} index
  * @return {[number, number]} A tuple [value, charsConsumed]
  */
  const determineValue = index => {
      const firstChar = s[index]
      const secondChar = s[index + 1]
      if (secondChar && subtractionNumerals.has(firstChar) && subtractionNumerals.get(firstChar).includes(secondChar)) {
          return [numerals.get(secondChar) - numerals.get(firstChar), 2]
      }
      
      return [numerals.get(firstChar), 1]
  }
  
  let startIndex = 0
  let result = 0
  while (startIndex < s.length) {
      const [value, charsConsumed] = determineValue(startIndex)
      result += value
      startIndex += charsConsumed
  }
  
  return result
};

console.log(romanToInt("LVIII"))
