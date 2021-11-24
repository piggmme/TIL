function solution(nums, k) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let lt = 0,
    rt = 0,
    sum = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (nums[rt] * (rt - lt + 1) > sum + k) {
      sum -= nums[lt];
      lt++;
    }
    answer = Math.max(answer, rt - lt + 1);
  }
  return answer;
}
