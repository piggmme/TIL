// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let sum = 0;
  const n = nums.length;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    sum = sum < 0 ? 0 : sum;
  }

  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
