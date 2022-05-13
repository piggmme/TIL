// https://leetcode.com/problems/subarrays-with-k-different-integers/
// 992. Subarrays with K Different Integers

const findGoodSubArray = (nums, k) => {
  const n = nums.length;
  const nH = new Map();
  let lt = 0;
  let unique = 0;
  let answer = 0;

  for (let rt = 0; rt < n; rt++) {
    if (!nH.has(nums[rt])) unique++;
    nH.set(nums[rt], nH.get(nums[rt]) + 1 || 1);

    while (unique > k) {
      nH.set(nums[lt], nH.get(nums[lt]) - 1);
      if (nH.get(nums[lt]) === 0) {
        unique--;
        nH.delete(nums[lt]);
      }
      lt++;
    }
    answer += rt - lt + 1;
  }
  return answer;
};
var subarraysWithKDistinct = function (nums, k) {
  return findGoodSubArray(nums, k) - findGoodSubArray(nums, k - 1);
};
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // 3
