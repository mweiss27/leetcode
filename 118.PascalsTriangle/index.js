/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return []
  }
  
  const rows = [[1]]
  for (let i = 1; i < numRows; i++) {
    const nextRow = Array(i)
      .fill(0)
      .map((_, idx) => {
        const prevLeft = rows[i - 1][idx - 1] || 0
        const prevRight = rows[i - 1][idx] || 0
        return prevLeft + prevRight
      }).concat(1)
    rows.push(nextRow)
  }

  return rows
}

console.log(generate(5))