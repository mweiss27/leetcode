/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = Number.MIN_VALUE
  let prev = 0
  
  for (let i = 0; i < nums.length; i++) {
      prev = Math.max(nums[i], prev + nums[i])
      max = Math.max(prev, max)
  }
  
  return max
};