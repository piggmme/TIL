// 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

{
  const longestSubarray = (nums, limit) => {
    const n = nums.length;
    let answer = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    const current = [];

    for (let rt = 0; rt < n; rt++) {
      current.push(nums[rt]);

      min = Math.min(min, nums[rt]);
      max = Math.max(max, nums[rt]);

      while (current.length && max - min > limit) {
        const num = current.shift();
        if (num === min) min = Math.min(...current);
        if (num === max) max = Math.max(...current);
      }

      answer = Math.max(answer, current.length);
    }
    return answer;
  };
  console.log(longestSubarray([8, 2, 4, 7], 4)); // 2
  console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
  console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));
}
