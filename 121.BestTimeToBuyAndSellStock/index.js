/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minBuy = Number.MAX_VALUE
  let maxProfit = 0
  for (const price of prices) {
      if (price < minBuy) {
          minBuy = price
      } else if (price - minBuy > maxProfit) {
          maxProfit = price - minBuy
      }
  }
  return maxProfit
};