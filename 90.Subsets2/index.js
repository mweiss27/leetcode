/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  const results = []

  const backtrack = (currentResult = [], currentIndex = 0) => {
    results.push(currentResult)

    for (let i = currentIndex; i < nums.length; i++) {
      backtrack([...currentResult, nums[i]], i + 1)
      while (nums[i] === nums[i + 1]) i++;
    }
  }
  backtrack()

  return results
}

console.log(subsetsWithDup([1, 2, 2]))
