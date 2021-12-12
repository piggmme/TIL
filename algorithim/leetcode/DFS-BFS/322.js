// 322. Coin Change
// https://leetcode.com/problems/coin-change/

{
  var coinChange = function (coins, amount) {
    const dy = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    coins.forEach(coin => (dy[coin] = 1));

    if (amount === 0) return 0;

    for (const coin of coins) {
      for (let i = coin + 1; i <= amount; i++) {
        dy[i] = Math.min(dy[i], dy[i - coin] + 1);
      }
    }

    return dy[amount] === Number.MAX_SAFE_INTEGER ? -1 : dy[amount];
  };
  console.log(coinChange([1, 2, 5], 11)); // 3
  console.log(coinChange([2], 3)); // -1
  console.log(coinChange([1], 0)); // 0
  console.log(coinChange([1], 2)); // 2
}
