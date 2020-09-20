/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (!nums.length) {
    return false
  }

  let iterations = 0
  while (iterations++ < nums.length && nums[0] === nums[nums.length - 1]) {
    nums = nums.slice(1).concat(nums[nums.length-1])
  }

  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return true
    }

    while (mid > 0 && nums[mid] === nums[mid - 1]) {
      mid--
    }

    // 1, 3, 1, 1, 1 --- 3
    if (nums[left] <= nums[mid]) {
      // [left:mid] is in sorted order
      if (target > nums[mid] || target < nums[left]) {
        // Need to search right
        while (nums[mid] === nums[++mid]);
        left = mid
      } else {
        while (nums[mid] === nums[--mid]);
        right = mid
      }
    } else {
      // [mid:right] is in sorted order
      if (target < nums[mid] || target > nums[right]) {
        // Need to search left
        while (nums[mid] === nums[--mid]);
        right = mid
      } else {
        while (nums[mid] === nums[++mid]);
        left = mid
      }
    }
  }

  return false
}

// Already sorted case, unique
const arr1 = [1, 2, 3, 4, 5, 6, 7]
console.log(search(arr1, 1) === true, search(arr1, 3) === true, search(arr1, 5) === true, search(arr1, 7) === true, search(arr1, 9) === false)

// Pivot halfway, unique
const arr2 = [4, 5, 6, 7, 1, 2, 3]
console.log(search(arr2, 4) === true, search(arr2, 6) === true, search(arr2, 8) === false, search(arr2, 3) === true, search(arr2, 4) === true)

// Already sorted case, duplicates
const arr3 = [1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7]
console.log(search(arr3, 0) === false, search(arr3, 4) === true, search(arr3, 8) === false)

// Pivot halfway, duplicates
const arr4 = [4, 5, 6, 6, 8, 8, 1, 1, 2, 3, 3]
console.log(search(arr4, 4) === true, search(arr4, 6) === true, search(arr4, 7) === false, search(arr4, 2) === true, search(arr4, 3) === true)

// Pivot with duplicates on ends
const arr5 = [1, 3, 1, 1, 1]
console.log(search(arr5, 3) === true)

console.log(search([], 5) === false)

console.log(search([1, 1, 1, 1], 1) === true)