/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (nums.length < 4) {
    return [];
  }

  console.log(nums);

  let result = [];
  const seenPairs = new Set()

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      let m = i + 1;
      let n = j - 1;
      while (m < n) {
        const sum = nums[i] + nums[m] + nums[n] + nums[j];
        if (sum === target) {
          const pair = `${nums[i]},${nums[m]},${nums[n]},${nums[j]}`
          if (!seenPairs.has(pair)) {
            result.push([nums[i], nums[m], nums[n], nums[j]]);
            seenPairs.add(pair)
          }
          while (nums[m] === nums[++m]);
          while (nums[n] === nums[--n]);
        } else if (sum < target) {
          while (nums[m] === nums[++m]);
        } else {
          while (nums[n] === nums[--n]);
        }
      }
    }
  }

  return result;
};

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
console.log(fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4));
console.log(fourSum([-5, -4, -3, -2, 1, 3, 3, 5], 11));
