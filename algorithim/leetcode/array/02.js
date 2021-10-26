// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = prices => {
  const dy = Array(prices.length);
  dy[0] = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    dy[i] = Math.max(dy[i - 1], prices[i] - min);
  }
  return dy[dy.length - 1];
};
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
