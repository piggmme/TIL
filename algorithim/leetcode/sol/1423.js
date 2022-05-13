// 1423. Maximum Points You Can Obtain from Cards
// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

{
  var maxScore = function (cardPoints, k) {
    const n = cardPoints.length;
    const m = n - k;
    const total = cardPoints.reduce((acc, cur) => acc + cur, 0);

    let sum = 0;
    for (let i = 0; i < m; i++) {
      sum += cardPoints[i];
    }
    let answer = total - sum;

    let lt = 0;
    for (let rt = m; rt < n; rt++) {
      sum += -cardPoints[lt++] + cardPoints[rt];
      answer = Math.max(answer, total - sum);
    }
    return answer;
  };
  console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12
  console.log(maxScore([1, 1000, 1], 1)); // 1
}
