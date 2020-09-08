/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let seen = 1
    while (nums[i] === nums[i + 1]) {
      seen++
      if (seen > 2) {
        nums.splice(i, 1)
      } else {
        i++
      }
    }
  }

  return nums.length
}

const arr = [1,1,1,2,2,3]
const arr2 = [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(arr), arr)
console.log(removeDuplicates(arr2), arr2)