/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const paths = []
  const checkPath = (currentM = 1, currentN = 1, currentPath = []) => {
    if (currentM === m && currentN === n) {
      paths.push(currentPath)
      return
    }

    if (currentM < m) {
      checkPath(currentM + 1, currentN, [...currentPath, [currentM, currentN]])
    }

    if (currentN < n) {
      checkPath(currentM, currentN+1, [...currentPath, [currentM, currentN]])
    }
  }

  checkPath()
  return paths.length
};

console.log(uniquePaths(23, 12))