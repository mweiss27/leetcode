/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const lookup = {}
  for (const num of nums) {
      lookup[num] = num
  }

  for (let i = 1;;i++) {
      if (!lookup[i]) {
          return i
      }
  }
}

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))
