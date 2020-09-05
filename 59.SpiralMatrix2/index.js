/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) {
    return [[]]
  }

  if (n === 1) {
    return [[1]]
  }

  let direction = "right"
  const output = Array(n)
    .fill(0)
    .map((r) => Array(n).fill(0))

  const getNextDirection = (direction) => {
    switch (direction) {
      case "right":
        return "down"
      case "down":
        return "left"
      case "left":
        return "up"
      case "up":
        return "right"
    }
  }

  const getNextPair = (i, j, direction) => {
    switch (direction) {
      case "right":
        return [i, j + 1]
      case "down":
        return [i + 1, j]
      case "left":
        return [i, j - 1]
      case "up":
        return [i - 1, j]
    }
  }

  const hasVisited = (i, j) => !!output[i][j]

  const isOutOfBounds = (i, j) => i < 0 || i >= output.length || j < 0 || j >= output[0].length

  let num = 1
  for (let i = 0, j = 0; ; ) {
    if (hasVisited(i, j) || isOutOfBounds(i, j)) {
      break
    }

    output[i][j] = num++

    let nextPair = getNextPair(i, j, direction)
    if (isOutOfBounds(nextPair[0], nextPair[1]) || hasVisited(nextPair[0], nextPair[1])) {
      direction = getNextDirection(direction)
      nextPair = getNextPair(i, j, direction)
    }
    i = nextPair[0]
    j = nextPair[1]
  }

  return output
}

console.log(generateMatrix(1))
console.log(generateMatrix(2))
console.log(generateMatrix(3))
console.log(generateMatrix(4))
