/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let winningSum = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return sum;
      }

      const currentWinningDistance = Math.abs(winningSum - target);
      const distanceToTarget = Math.abs(sum - target);

      if (distanceToTarget < currentWinningDistance) {
        winningSum = sum;
      }

      if (sum > target) {
        k--
      } else {
        j++
      }
    }
  }

  return winningSum;
};

console.log(threeSumClosest([0, 2, 1, -3], 1));
