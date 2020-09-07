/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
  const incrementIndex = index => {
      digits[index]++
  
      if (digits[index] === 10) {
          // We have to add 1 to the previous digit. If no previous digit exists, we need to prepend a 1
          // We do this until we stop encountering a carry
          digits[index] -= 10

          if (index === 0) {
              return [1, ...digits]
          } else {
              return incrementIndex(index - 1)
          }
      }
      
      return digits
  }
  
  digits = incrementIndex(digits.length - 1)
  return digits
};

console.log(plusOne([0]))
console.log(plusOne([1,2,3]))
console.log(plusOne([1,2,9]))
console.log(plusOne([1,9,9]))
console.log(plusOne([9,9,9]))