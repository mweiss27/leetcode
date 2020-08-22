/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    } else if (nums[i] > target) {
      return result
    } else {
      result++
    }
  }

  return result
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
