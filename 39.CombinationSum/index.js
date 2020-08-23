/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];

  const backtracking = (currentResult, remaining, currentIndex) => {
    console.log(
      `Attempting solution with currentResult=`,
      currentResult,
      `remaining=${remaining}, candidates=`,
      candidates.slice(currentIndex)
    );
    if (remaining < 0) {
      return false;
    } else if (remaining === 0) {
      result.push(currentResult);
      return false;
    }

    for (let i = currentIndex; i < candidates.length; i++) {
      backtracking(
        [...currentResult, candidates[i]],
        remaining - candidates[i],
        i
      );
    }
  };

  backtracking([], target, 0);

  return result;
};

// console.log(combinationSum([7, 6, 3, 2], 7));
console.log(combinationSum([2, 3, 5], 8));
