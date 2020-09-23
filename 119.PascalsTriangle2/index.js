/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  
  let row = [1]
  for (let i = 1; i <= rowIndex; i++) {
    const nextRow = Array(i)
      .fill(0)
      .map((_, idx) => {
        const prevLeft = row[idx - 1] || 0
        const prevRight = row[idx] || 0
        return prevLeft + prevRight
      }).concat(1)
      row = nextRow
  }

  return row
}

console.log(getRow(3))