/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = ""
  let carry = 0
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let aIndex = (a.length - 1) - i
    let bIndex = (b.length - 1) - i

    let added = +(a[aIndex] || "0") + +(b[bIndex] || "0") + carry
    carry = 0
    
    if (added >= 2) {
      carry = 1
      added -= 2
    }

    result = `${added}${result}`
  }

  return carry ? `${carry}${result}` : result
};

console.log(addBinary("11", "11"))
console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))