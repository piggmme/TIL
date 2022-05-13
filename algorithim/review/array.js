// 1. 수열 축소
{
  function solution(nums, m) {
    let N = nums.length;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < N - i - 1; j++) {
        nums[j] = nums[j + 1] - nums[j];
      }
    }
    return nums.slice(0, N - m);
  }
  //   console.log(solution([5, 3, 7, 9, -2], 1)); // [-2, 4, 2, -11]
  //   console.log(solution([5, 3, 7, 9, -2], 2)); // [6, -2, -13]
}

// 2. 가장 높은 증가수열
{
  function solution(arr) {
    let answer = 0;
    let sum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        sum += arr[i + 1] - arr[i];
      } else {
        answer = Math.max(answer, sum);
        sum = 0;
      }
    }
    answer = Math.max(answer, sum);
    return answer;
  }
  //   console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11])); // 8
  //   console.log(solution([8, 12, 2, 3, 7, 6, 20, 3])); // 14
}

// 3. 가장 긴 수열
{
  function solution(nums) {
    let up = 1;
    let down = 1;
    let result = 0;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) up += 1;
      else {
        result = Math.max(result, up);
        up = 1;
      }
      if (nums[i - 1] > nums[i]) down += 1;
      else {
        result = Math.max(result, down);
        down = 1;
      }
    }
    if (up > 1) result = Math.max(result, up);
    if (down > 1) result = Math.max(result, down);
    return result;
  }
  //   console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2])); // 5
  //   console.log(solution([5, 2, 4, 7, 6, 3, 9, 10, 11])); // 4
  //   console.log(solution([1, 2, 3, 3, 4, 5, 6, 7, 7])); // 5
}

// 4. 바이토닉 수열
{
  function solution(nums) {
    let i = 0;
    let n = nums.length;

    while (i + 1 < n && nums[i] < nums[i + 1]) i++;
    if (i === n - 1 || i === 0) return false;
    while (i + 1 < n && nums[i] > nums[i + 1]) i++;
    return i === n - 1;
  }
  //   console.log(solution([1, 2, 3, 4, 5, 3, 1])); // true
  //   console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])); // false
  //   console.log(solution([1, 2, 3, 4, 5])); // false
}

// 5. 거리 두기
{
  function solution(nums) {
    let d = 1000;
    const dist = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        d += 1;
        dist.push(d);
      } else {
        d = 0;
        dist.push(d);
      }
    }

    d = 1000;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === 0) {
        d += 1;
        dist[i] = Math.min(dist[i], d);
      } else {
        d = 0;
      }
    }
    return Math.max(...dist);
  }
  //   console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1])); // 2
  //   console.log(solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 1])); // 4
}

// test 가장 긴 바이토닉 수열
{
  function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dist = Array.from({ length: n }, () => 0);
    let ch = Array.from({ length: n }, () => 0);

    ch[0] = 1;
    let d = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] < arr[i]) {
        d++;
        dist[i] = d;
      } else {
        d = 1;
        ch[i] = 1;
      }
    }

    d = 1;
    ch[n - 1] = 1;
    for (let i = n - 1; i >= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        d++;
        dist[i] += d;
      } else {
        d = 1;
        ch[i] = 1;
      }
    }

    for (let i = 0; i < n; i++) {
      if (ch[i] === 0 && dist[i] - 1 > answer) answer = dist[i] - 1;
    }
    return answer;
  }
  //   console.log(solution([7, 4, 8])); //0
  //   console.log(solution([2, 1, 4, 7, 3, 2, 5])); //5
  //   console.log(solution([1, 2, 1, 2, 3, 4, 5])); //3
  //   console.log(solution([10, 10, 9, 2, 1, 5, 5])); //0
  //   console.log(solution([1, 2, 3, 4, 2, 5, 7, 4, 3, 2, 1, 3])); //7
  //   console.log(solution([1, 1, 1, 1, 1])); //0
  //   console.log(solution([5, 4, 3, 2, 1])); //0
  //   console.log(solution([10, 10, 9, 2, 1, 5, 4])); //3
  //   console.log(solution([2, 2, 9, 9, 1, 5, 5])); //0
  //   console.log(solution([10, 8, 9, 2, 2, 2, 2])); //3
}
