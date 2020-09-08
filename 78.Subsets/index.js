/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []

  const backtrack = (currentResult = [], currentIndex = 0) => {
    result.push(currentResult)

    for (let i = currentIndex; i < nums.length; i++) {
      backtrack([...currentResult, nums[i]], i + 1)
    }
  }

  backtrack()

  return result
}

/* 
    [], 0
    [1], 1
        [1, 2], 2
            [1, 2, 3], 3
        [1, 3], 3
    [2], 2
        [2, 3], 3
    [3], 3
*/

console.log(subsets([1, 2, 3]))
