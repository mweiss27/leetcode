/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const results = []

  const backtrack = (currentPermutation = [], availableNums = nums) => {
    if (currentPermutation.length === nums.length) {
      results.push(currentPermutation)
      return
    }

    for (let i = 0; i < availableNums.length;) {
      const otherNumbers = availableNums.slice(0, i).concat(availableNums.slice(i + 1))
      backtrack([...currentPermutation, availableNums[i]], otherNumbers)
      while (availableNums[i] === availableNums[++i]);
    }
  }

  backtrack()
  return results
}

console.log(permuteUnique([1, 1, 2]))
