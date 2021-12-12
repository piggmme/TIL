// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function (nums, k) {
  let sH = new Map();
  let sum = 0;
  let answer = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];

    if (sum === k) answer += 1;
    if (sH.has(sum - k)) answer += sH.get(sum - k);

    sH.set(sum, sH.get(sum) + 1 || 1);
  }

  return answer;
};
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1], 0)); // 0
console.log(subarraySum([1, -1, 0], 0)); // 3
