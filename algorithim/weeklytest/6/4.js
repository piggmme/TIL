const solution = (nums, t) => {
  let source = 0;
  let weight = Array(t).fill(0);
  let students = Array(nums.length).fill(0);
  let answer = 0;

  for (let i = 0; i < t; i++) {
    weight[i] = 2 ** i;
  }

  for (let i = 0; i < nums.length; i++) {
    students[i] += nums[i].reduce((acc, cur) => acc + weight[cur - 1], 0);
  }

  // 조합으로 소스 뽑아
  const DFS = (L, s, k) => {
    if (L === k) {
      if (students.every(student => !((student & source) === student))) {
        answer += 1;
      }
      return;
    }
    for (let i = s; i < t; i++) {
      source += weight[i];
      DFS(L + 1, i + 1, k);
      source -= weight[i];
    }
  };

  for (let i = 0; i < t; i++) {
    DFS(0, 0, i);
    source = 0;
  }

  return answer;
};

console.log(solution([[2], [1, 3]], 4)); // 6
