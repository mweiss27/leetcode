/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)

  const result = []

  const backtracking = (currentResult, remaining, currentIndex) => {
    if (remaining < 0) {
      return false
    } else if (remaining === 0) {
      result.push(currentResult)      
      return false
    }

    for (let i = currentIndex; i < candidates.length;) {
      backtracking([...currentResult, candidates[i]], remaining - candidates[i], i + 1)
      while (candidates[i] === candidates[++i]);
    }
  }

  backtracking([], target, 0)

  return result
}

// console.log(combinationSum([7, 6, 3, 2], 7));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
