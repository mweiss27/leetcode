/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let totalDuration = 0
  for (let i = 0; i < timeSeries.length; i++) {
      const now = timeSeries[i]
      const next = timeSeries[i+1]
      if (next == null) {
          totalDuration += duration
      } else {
          totalDuration += Math.min(next - now, duration)
      }
  }

  return totalDuration
}

console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
