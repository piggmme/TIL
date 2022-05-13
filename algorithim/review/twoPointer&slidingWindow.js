// 1. 최대 매출
{
  function solution(nums, k) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += nums[i];
    answer = sum;
    for (let i = k; i < nums.length; i++) {
      sum += nums[i] - nums[i - k];
      answer = Math.max(answer, sum);
    }
    return answer;
  }
  //   console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
  //   console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
  //   console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); //342
}

// 2. 매출액의 종류
{
  function solution(nums, k) {
    let nH = new Map();
    let answer = [];

    for (let i = 0; i < k - 1; i++) {
      nH.set(nums[i], nH.get(nums[i]) + 1 || 1);
    }
    let lt = 0;
    for (let rt = k - 1; rt < nums.length; rt++) {
      nH.set(nums[rt], nH.get(nums[rt]) + 1 || 1);
      answer.push(nH.size);
      nH.set(nums[lt], nH.get(nums[lt]) - 1);
      if (nH.get(nums[lt]) === 0) nH.delete(nums[lt]);
      lt++;
    }
    return answer;
  }
  //   console.log(solution([20, 12, 20, 10, 23, 17, 10], 4)); // [3, 4, 4, 3]
  //   console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3)); // [3, 2, 2, 2, 2, 1, 1, 2]
}

// 3. 연속 부분수열1
{
  function solution(nums, m) {
    let lt = 0;
    let sum = 0;
    let answer = 0;

    for (let rt = 0; rt < nums.length; rt++) {
      sum += nums[rt];
      if (sum === m) answer++;
      while (sum > m) {
        sum -= nums[lt++];
        if (sum === m) answer++;
      }
    }
    return answer;
  }
  //   console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
  //   console.log(solution([1, 1, 1, 1, 1, 1], 3)); //4
  //   console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); //6
  //   console.log(solution([1, 2, 1, 2, 7, 2, 1], 3)); // 4 => 7까지 다 빼버릴 수 있음.
}

// 4. 연속 부분수열2
{
  function solution(nums, m) {
    let answer = 0;
    let sum = 0;
    let nH = new Map();
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum === m) answer++;
      if (nH.has(sum - m)) answer += nH.get(sum - m);
      nH.set(sum, nH.get(sum) + 1 || 1);
    }
    return answer;
  }
  //   console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
  //   console.log(solution([-1, 0, 1], 0)); // 2
  //   console.log(solution([-1, -1, -1, 1], 0)); // 1
  //   console.log(solution([1, 1, -1, 1, 2, 1, -1, 1], 3)); // 8
}
{
  function solution(nums, m) {
    let sum = 0;
    let nH = new Map();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum === m) result++;
      if (nH.has(sum - m)) result += nH.get(sum - m);
      nH.set(sum, nH.get(sum) + 1 || 1);
    }
    return result;
  }
  // console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
  // console.log(solution([-1, 0, 1], 0)); // 2
  // console.log(solution([-1, -1, -1, 1], 0)); // 1
  // console.log(solution([1, 1, -1, 1, 2, 1, -1, 1], 3)); // 8
}

// 5. 연속 부분수열3
{
  function solution(nums, m) {
    let n = nums.length;
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < n; rt++) {
      sum += nums[rt];
      while (sum > m) {
        sum -= nums[lt++];
      }
      answer += rt - lt + 1;
    }
    return answer;
  }
  // console.log(solution([1, 3, 1, 2, 3], 5)); // 10
  // console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 15
  // console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); // 22
  // console.log(solution([1, 1, 7], 5)); // 3
}
{
  function solution(nums, m) {
    let n = nums.length;
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < n; rt++) {
      sum += nums[rt];
      while (sum > m) {
        sum -= nums[lt++];
      }
      answer += rt - lt + 1;
    }
    return answer;
  }
  // console.log(solution([1, 3, 1, 2, 3], 5)); // 10
  // console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 15
  // console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); // 22
  // console.log(solution([1, 1, 7], 5)); // 3 => 7인 경우 lt++이기 때문에, 22번째 줄 연산 이후 1증가하여 0이됨.
}
