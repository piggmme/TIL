// 다시 볼 문제 : (4). 바이토닉 수열, (5). 거리두기

// 1. 수열 축소
{
  function solution(nums, m) {
    let n = nums.length;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        nums[j] = nums[j + 1] - nums[j];
      }
    }
    return nums.slice(0, n - m);
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
      if (arr[i] < arr[i + 1]) sum += arr[i + 1] - arr[i];
      else {
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
    result = Math.max(result, up, down);
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

    while (i + 1 < n && nums[i] < nums[i + 1]) {
      i++;
    }
    if (i === n - 1 || i === 0) {
      return 'NO';
    }
    while (i + 1 < n && nums[i] > nums[i + 1]) {
      i++;
    }
    if (i !== n - 1) return 'NO';
    return 'YES';
  }
  //   console.log(solution([1, 2, 3, 4, 5, 3, 1]));
  //   console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
  //   console.log(solution([1, 2, 3, 4, 5]));
}
// 바이토닉 한번더
{
  function solution(nums) {
    let i = 0;
    while (i < nums.length - 1 && nums[i] < nums[i + 1]) {
      i++;
    }
    if (i === 0 || i === nums.length - 1) {
      return false;
    }

    while (i < nums.length - 1 && nums[i] > nums[i + 1]) {
      i++;
    }
    if (i !== nums.length - 1) return false;
    return true;
  }
  //   console.log(solution([1, 2, 3, 4, 5, 3, 1]));
  //   console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
  //   console.log(solution([1, 2, 3, 4, 5]));
}

// 5. 거리두기
{
  function solution(nums) {
    let d = 1000;
    let dist = [];
    for (let n of nums) {
      if (n === 0) {
        d += 1;
        dist.push(d);
      } else {
        d = 0;
        dist.push(0);
      }
    }
    d = 1000;
    for (let i = nums.length; i >= 0; i--) {
      if (nums[i] === 0) {
        d += 1;
        dist[i] = Math.min(dist[i], d);
      } else {
        d = 0;
      }
    }
    return Math.max(...dist);
  }
  //   console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
  //   console.log(solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
}
// 거리두기 한번더
{
  function solution(nums) {
    let dist = [];
    let d = 1000;
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
        dist[i] = Math.min(d, dist[i]);
      } else {
        d = 0;
      }
    }
    return Math.max(...dist);
  }
  //   console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
  //   console.log(solution([0, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
}

// 6. 2차원 배열 1의 개수
{
  function solution(nums) {
    const answer = nums
      .map((row, i) => ({ i, cnt: row.reduce((acc, cur) => acc + cur, 0) }))
      .sort((a, b) => a.cnt - b.cnt)
      .map(a => a.i);
    return answer;
  }
  //   console.log(
  //     solution([
  //       [1, 0, 0, 1],
  //       [0, 0, 0, 1],
  //       [1, 1, 0, 1],
  //       [0, 1, 0, 1],
  //     ])
  //   ); //[1, 0, 3, 2]
}

// 7. 행과열의 최솟값
{
  function solution(nums) {
    let answer = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      let min = nums[i][0];
      let pos;
      for (let j = 1; j < n; j++) {
        if (min > nums[i][j]) {
          min = nums[i][j];
          pos = j;
        }
      }

      let row;
      for (row = 0; row < n; row++) {
        if (nums[row][pos] < min) break;
      }
      if (row === n) answer.push(min);
    }
    answer.sort((a, b) => a - b);
    return answer;
  }
  //   console.log(
  //     solution([
  //       [4, 6, 22, 1],
  //       [9, 3, 10, 12],
  //       [30, 7, 20, 2],
  //       [15, 8, 5, 13],
  //     ])
  //   ); // [1, 3, 5]
}

// 8. 봉우리
{
  function solution(arr) {
    let answer = 0;
    const n = arr.length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let flag = true;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
            flag = false;
            break;
          }
        }
        if (flag) answer += 1;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [5, 3, 7, 2, 3],
  //       [3, 7, 1, 6, 1],
  //       [7, 2, 5, 3, 4],
  //       [4, 3, 6, 4, 1],
  //       [8, 7, 3, 5, 2],
  //     ])
  //   ); // 10
}
