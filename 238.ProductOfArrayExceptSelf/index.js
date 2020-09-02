/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array(nums.length).fill(1)

  let total = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = total
    total *= nums[i]
  }


  total = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= total
    total *= nums[i]
  }

  return result
}

console.log(`Result:\t\t`, productExceptSelf([1, 2, 3, 4]))
