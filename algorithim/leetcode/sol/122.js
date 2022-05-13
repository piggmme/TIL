// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
var maxProfit = function (prices) {
  let maxGain = 0;
  let gain;

  for (let i = 1; i < prices.length; i++) {
    gain = prices[i] - prices[i - 1];
    if (gain > 0) {
      maxGain += gain;
    }
  }

  return maxGain;
};
