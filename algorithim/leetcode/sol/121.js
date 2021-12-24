// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
{
  //   var maxProfit = function (prices) {
  //     let answer = 0;
  //     const n = prices.length;
  //     let sum = 0;
  //     const DFS = start => {
  //       if (start >= n - 1) {
  //         answer = Math.max(answer, sum);
  //         return;
  //       }
  //       for (let i = start + 1; i < n; i++) {
  //         if (prices[start] < prices[i]) {
  //           const dist = prices[i] - prices[start];
  //           sum += dist;
  //           DFS(i + 1);
  //           sum -= dist;
  //         }
  //       }
  //       DFS(start + 1);
  //     };
  //     DFS(0);
  //     return answer;
  //   };
  //   console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
  //   console.log(maxProfit([1, 2, 3, 4, 5])); // 4
  //   console.log(maxProfit([7, 6, 4, 3, 1])); // 0
}

{
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
  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
  console.log(maxProfit([1, 2, 3, 4, 5])); // 4
  console.log(maxProfit([7, 6, 4, 3, 1])); // 0
}
