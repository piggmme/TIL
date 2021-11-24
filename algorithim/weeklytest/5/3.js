{
  function solution(nums) {
    let n = nums.length;
    let answer = Array.from({ length: n }, () => 0);
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
        answer[stack[stack.length - 1]] = i + 1;
        stack.pop();
      }
      stack.push(i);
    }

    return answer;
  }
  //   console.log(solution([50, 57, 52, 53, 51]));
  //console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));
}

// 연습
{
  const solution = nums => {
    const stack = [];
    const answer = Array(nums.length).fill(0);

    for (let i = nums.length - 1; i >= 0; i--) {
      while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
        answer[stack[stack.length - 1]] = i + 1;
        stack.pop();
      }
      stack.push(i);
    }
    return answer;
  };
  console.log(solution([50, 57, 52, 53, 51]));
  //console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));
}
