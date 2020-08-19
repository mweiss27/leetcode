/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let lastSeen = nums[0];
  for (let i = 1; i < nums.length; ) {
    if (nums[i] === lastSeen) {
      nums.splice(i, 1);
    } else {
      lastSeen = nums[i];
      i++;
    }
  }

  return nums.length;
};
