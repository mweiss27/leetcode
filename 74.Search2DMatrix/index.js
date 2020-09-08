/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) {
    return false
  }

  let left = 0,
    right = matrix.length * matrix[0].length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const row = Math.floor(mid / matrix[0].length)
    const col = mid % matrix[0].length

    if (matrix[row][col] === target) {
      return true
    }

    if (matrix[row][col] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    12
  )
)
