// https://leetcode.com/problems/minimum-size-subarray-sum/
{
  const minSubArrayLen = (target, nums) => {
    let answer = Number.MAX_SAFE_INTEGER;

    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < nums.length; rt++) {
      if (sum < target) {
        sum += nums[rt];
      }
      while (sum >= target) {
        answer = Math.min(answer, rt - lt + 1);
        sum -= nums[lt++];
        if (answer === 1) return answer;
      }
    }

    return answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
  };
  console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
  console.log(minSubArrayLen(4, [1, 4, 4])); // 1
  console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
}
