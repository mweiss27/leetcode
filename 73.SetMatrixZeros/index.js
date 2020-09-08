/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowsToZero = new Set()
  const colsToZero = new Set()

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rowsToZero.add(r)
        colsToZero.add(c)
      }
    }
  }

  for (const row of rowsToZero) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[row][c] = 0
    }
  }
  
  for (const col of colsToZero) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][col] = 0
    }
  }

}
