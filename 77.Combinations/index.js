/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];

  const backtrack = (currentResult, currentN) => {
    if (currentResult.length === k) {
      result.push(currentResult);
      return;
    }

    for (let i = currentN; i <= n; i++) {
      backtrack([...currentResult, i], i + 1);
    }
  };

  backtrack([], 1);
  return result;
};

console.log(combine(4, 2));
