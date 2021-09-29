{
  function solution(nums, k) {
    let answer = 0,
      lt = 0,
      cnt = 0;
    for (let rt = 0; rt < nums.length; rt++) {
      if (nums[rt] === 0) cnt++;
      while (cnt > k) {
        if (nums[lt] === 0) cnt--;
        lt++;
      }
      answer = Math.max(answer, rt - lt + 1);
    }
    return answer;
  }

  //   console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
}

// my sol)
{
  function solution(nums, k) {
    let lt = 0;
    let answer = 0;
    let cnt = 0;
    const n = nums.length;
    for (let rt = 0; rt < n; rt++) {
      if (nums[rt] === 0) cnt++;
      while (cnt > k) {
        if (nums[lt] === 0) cnt--;
        lt++;
      }
      answer = Math.max(answer, rt - lt + 1);
    }
    return answer;
  }
  //   console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
}
