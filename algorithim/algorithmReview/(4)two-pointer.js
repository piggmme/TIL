// 다시 볼 문제: (4). 연속 부분수열 2, (5). 연속 부분수열 3, (7). 모든 아나그램 찾기

// 1. 최대 매출
{
  function solution(nums, k) {
    let answer = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += nums[i];
    }
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
      lt += 1;
    }
    return answer;
  }
  //   console.log(solution([20, 12, 20, 10, 23, 17, 10], 4)); // [3, 4, 4, 3]
  //   console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3)); // [3, 2, 2, 2, 2, 1, 1, 2]
}

// 3. 연속 부분 수열 1 (외우자)
{
  function solution(nums, m) {
    let lt = 0;
    let sum = 0;
    let answer = 0;

    for (let rt = 0; rt < nums.length; rt++) {
      // lt, rt 변화했을 때 꼭 검사 해야햇!!
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

// 4. 연속 부분수열 2
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

// 5. 연속 부분수열 3
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
  //   console.log(solution([1, 3, 1, 2, 3], 5)); // 10
  //   console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 15
  //   console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); // 22
  //   console.log(solution([1, 1, 7], 5)); // 3
}

// 6. 연속된 자연수의 합
{
  function solution(n) {
    let nums = Array.from({ length: parseInt(n / 2) + 1 }, (_, i) => i + 1);
    let m = nums.length;
    let result = 0;
    let lt = 0;
    let sum = 0;
    for (let rt = 0; rt < m; rt++) {
      sum += nums[rt];
      while (sum > n) {
        sum -= nums[lt++];
      }
      if (sum === n) result++;
    }
    return result;
  }
  //   console.log(solution(15));
  //   console.log(solution(45678)); //7
  //   console.log(solution(98765)); //3
}

// 7. 모든 아나그램 찾기
{
  function solution(s, t) {
    let sH = new Map();

    for (let x of t) {
      sH.set(x, sH.get(x) - 1 || -1);
    }

    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
      if (sH.get(s[i]) === -1) sH.delete(s[i]);
      else sH.set(s[i], sH.get(s[i]) + 1 || 1);
    }

    let lt = 0;
    let answer = 0;
    for (let rt = len; rt < s.length; rt++) {
      // rt 넣기
      if (sH.get(s[rt]) === -1) sH.delete(s[rt]);
      else sH.set(s[rt], sH.get(s[rt]) + 1 || 1);

      if (sH.size === 0) answer++;

      // lt 빼기
      if (sH.get(s[lt]) === 1) sH.delete(s[lt]);
      else sH.set(s[lt], sH.get(s[lt]) - 1 || -1);
      lt++;
    }
    return answer;
  }
  //   console.log(solution('bAcacbcba', 'abc')); // 2 => 대소문자 구별!!
  //   console.log(solution('bacacbcba', 'abc')); // 3
  //   console.log(solution('bacaAacba', 'aabc')); // 2
  //   console.log(solution('bacddacba', 'abc')); // 3
  //   console.log(solution('bacacbcba', 'aabc')); // 1
}
