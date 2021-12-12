const solution = nums => {
  let lt = 0;
  let rt = 1;
  let answer = 0;

  const findSum = n => ((n + 1) * n) / 2;

  while (rt < nums.length && lt <= rt) {
    // 등차
    if (nums[lt + 1] - nums[lt] === nums[rt] - nums[rt - 1]) {
      rt++;
    } else {
      if (rt - lt >= 2) {
        answer += findSum(rt - lt - 2);
      }
      lt = rt - 1;
    }
  }

  if (nums[lt + 1] - nums[lt] === nums[rt - 1] - nums[rt - 2]) {
    answer += findSum(rt - lt - 2);
  }

  return answer;
};

console.log(solution([1, 2, 3, 5, 7, 6, 5, 4])); // 5
console.log(solution([1, 2, 3, 4, 5])); // 6
console.log(solution([1, 2, 3, 7, 8, 9])); // 2
