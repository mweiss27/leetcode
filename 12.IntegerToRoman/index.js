const numerals = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
])


/**
* @param {number} num
* @return {string}
*/
var intToRoman = function(num) {
  let result = ""

  const numeralValues = Array.from(numerals.keys())
  while (num > 0) {
    const highestKey = numeralValues.find(value => num >= value)
    if (highestKey) {
      result += numerals.get(highestKey)
      num -= highestKey

    } else {
      console.error(`Failed to find a numeral that we can assign for remaining num: `, num)
      break
    }
  }

  return result
};
