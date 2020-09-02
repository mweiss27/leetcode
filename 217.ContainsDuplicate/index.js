/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const lookup = {}
  for (const num of nums) {
      if (lookup[num]) {
          return true
      }
      lookup[num] = 1
  }
  
  return false
};
