/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // Case where nums is already sorted without a pivot
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) {
    return nums[0]
  }

  // [5,1,2,3,4]
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[mid+1]) {
      return nums[mid+1]
    }

    if (nums[mid-1] > nums[mid]) {
      return nums[mid]
    }

    if (nums[left] < nums[mid]) {
      // Our turning point is on the right
      left = mid + 1
    } else {
      // Our turning point is on the left
      right = mid - 1
    }
  }

  return -1
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2, 3]))
console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([5, 1, 2, 3, 4]))
