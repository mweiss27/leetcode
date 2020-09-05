/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let insertedIntervals
  if (!intervals.length) {
    insertedIntervals = [newInterval]
  } else if (newInterval[0] < intervals[0][0]) {
    // This interval goes at the beginning
    insertedIntervals = [newInterval, ...intervals]
  } else if (newInterval[0] > intervals[intervals.length - 1][0]) {
    // This interval goes at the end
    insertedIntervals = [...intervals, newInterval]
  } else {
    for (let i = intervals.length - 1; i >= 0; i--) {
      if (newInterval[0] >= intervals[i][0]) {
        insertedIntervals = [...intervals.slice(0, i + 1), newInterval, ...intervals.slice(i + 1, intervals.length)]
        break
      }
    }
  }

  for (let i = 1; i < insertedIntervals.length; ) {
    const prevEnd = insertedIntervals[i - 1][1]
    const curStart = insertedIntervals[i][0]

    if (prevEnd >= curStart) {
      insertedIntervals[i - 1][1] = Math.max(insertedIntervals[i - 1][1], insertedIntervals[i][1])
      insertedIntervals.splice(i, 1)
    } else {
      i++
    }
  }

  return insertedIntervals
}

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
)

console.log(insert([[1, 5]], [0, 3]))
