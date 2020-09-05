/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const output = [...intervals]
  output.sort((a, b) => {
    if (a[0] < b[0]) return -1
    if (b[0] < a[0]) return 1
    if (a[1] < b[1]) return -1
    if (b[1] < a[1]) return 1
    return 0
  })

  for (let i = 1; i < output.length; ) {
    const prevEnd = output[i - 1][1]
    const curStart = output[i][0]

    if (prevEnd >= curStart) {
      output[i - 1][1] = Math.max(output[i - 1][1], output[i][1])
      output.splice(i, 1)
    } else {
      i++
    }
  }

  return output
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
)

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
)
