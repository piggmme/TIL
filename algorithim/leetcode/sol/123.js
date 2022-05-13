// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
// 123. Best Time to Buy and Sell Stock III
{
  var maxProfit = function (prices) {
    let k = 2;
    let dy = Array.from({ length: k + 1 }, () => Array(prices.length).fill(0));
    for (let i = 1; i <= k; i++) {
      let invest = -Infinity;
      for (let j = 1; j < prices.length; j++) {
        invest = Math.max(invest, dy[i - 1][j - 1] - prices[j - 1]);
        dy[i][j] = Math.max(dy[i][j - 1], invest + prices[j]);
      }
    }
    return dy[k][prices.length - 1];
  };
  console.log(maxProfit([7, 12, 3, 26, 50, 60])); // 62
}
