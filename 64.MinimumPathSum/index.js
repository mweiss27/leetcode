/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rows = grid.length
  let columns = grid[0].length

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (r !== 0 && c !== 0) {
        // We can come from up or left
        grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1])
      } else if (r !== 0) {
        // We can come from up
        grid[r][c] += grid[r - 1][c]
      } else if (c !== 0) {
        // We can come from left
        grid[r][c] += grid[r][c - 1]
      }
    }
  }

  return grid[rows - 1][columns - 1]
}

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]))
