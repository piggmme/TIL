// 1005. Maximize Sum Of Array After K Negations
// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

var largestSumAfterKNegations = function (nums, k) {
  const negatives = nums.filter(num => num < 0).sort((a, b) => b - a);
  const positives = nums.filter(num => num >= 0);

  while (negatives.length) {
    positives.push(negatives.pop() * -1);
    k--;
    if (k === 0) break;
  }

  if (k === 0)
    return [...positives, ...negatives].reduce((acc, cur) => acc + cur, 0);

  if (k % 2 === 0) return positives.reduce((acc, cur) => acc + cur, 0);

  positives.sort((a, b) => a - b);
  return positives.slice(1).reduce((acc, cur) => acc + cur, 0) - positives[0];
};

console.log(largestSumAfterKNegations([4, 2, 3], 1)); // 5
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3)); // 6
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)); // 13
console.log(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3)); // 11
