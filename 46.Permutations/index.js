/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const results = []

  const backtrack = (currentPermutation = [], availableNumbers = nums) => {
    if (currentPermutation.length === nums.length) {
      results.push(currentPermutation)
      return
    }

    for (let i = 0; i < availableNumbers.length; i++) {
      backtrack(
        [...currentPermutation, availableNumbers[i]], 
        availableNumbers.slice(0, i).concat(availableNumbers.slice(i + 1, availableNumbers.length)))
    }
  }

  backtrack()
  return results
}

console.log(permute([1, 2, 3, 4]))
