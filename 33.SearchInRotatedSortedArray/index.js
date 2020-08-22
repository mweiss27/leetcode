/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
        // [left:middle] is sorted
        if (target > nums[middle] || target < nums[left]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    } else {
        // [middle:right] is sorted
        if (target < nums[middle] || target > nums[right]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

  }

  return -1;
};

console.log(search([0, 1, 2, 3, 4, 5, 6], 3));
console.log(search([4, 5, 6, 0, 1, 2, 3], 5));
console.log(search([3, 4, 5, 6, 0, 1, 2], 5));
console.log(search([1, 3], 1));
