// lv3 징검다리 건너기
// https://programmers.co.kr/learn/courses/30/lessons/64062

// 이분탐색 풀이 => 성공!
{
  function cntNum(mid, stones, k) {
    // mid를 뺀 stones에서 음수 또는 0으로 이루어진
    // 연속된 k 길이 이상의 구간이 존재하는지 확인 => 있다면 구간 길이의 최대값을 담는다
    // 반환값은 구간의 길이.
    let result = 0,
      n = stones.length;

    let tp = 0,
      flag = false;
    for (let i = 0; i < n; i++) {
      if (stones[i] - mid <= 0) {
        tp++;
        flag = true;
      } else if (flag) {
        result = Math.max(result, tp);
        tp = 0;
        flag = false;
      }
    }
    if (flag) {
      result = Math.max(result, tp);
    }
    return result;
  }
  function solution(stones, k) {
    let answer = 200000000;
    let lt = 0,
      rt = 200000000;

    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);

      if (cntNum(mid, stones) >= k) {
        answer = mid;
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }
    return answer;
  }
  // console.log(solution([23, 41, 86, 6, 38, 90, 66, 11, 34, 1, 6, 2], 5)); // 34
  // console.log(solution([1, 3, 1], 2)); // 3
  // console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); //3
  // console.log(solution([1, 1, 4, 2, 2, 1, 4, 2, 5, 1], 3)); //2
  // console.log(solution([1, 1, 4, 2, 1, 4, 1, 2, 5, 1], 3)); // 4
  // console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3)); // 1
  // console.log(solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3)); // 3
  // console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 1, 1], 3)); // 2
}

// 연습) 랜선 문제 - 이분탐색
{
  // 조건을 만족하는지 확인하는 함수
  function cntNum(x, nums) {
    let result = 0;

    // 길이 x로 랜선을 잘라서 만들 수 있는 랜선의 갯수를 구함
    for (let i of nums) {
      result += parseInt(i / x);
    }
    return result;
  }
  function solution(nums, n) {
    // 랜선의 최대길이가 1000000이므로, 그 사이 안에서 정답이 나온다. => 이분탐색
    let lt = 0,
      rt = 1000000;
    let answer;

    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      let cnt = cntNum(mid, nums); // 조건을 만족하는지 확인하는 함수.

      if (cnt >= n) {
        answer = mid;
        lt = mid + 1;
      } else if (cnt < n) {
        rt = mid - 1;
      }
    }
    return answer;
  }
  //   console.log(solution([802, 743, 457, 539], 11)); // 200
}

// 효율성 통과 X
{
  function solution(stones, k) {
    let answer = 0;
    let n = stones.length;
    let jump = 0;

    while (1) {
      let tp_j = 1;
      for (let i = 0; i < n; i++) {
        if (stones[i] === 0) {
          tp_j++;
          jump = Math.max(jump, tp_j);
        } else {
          stones[i]--;
          tp_j = 1;
        }
      }
      if (jump > k) return answer;
      else {
        answer++;
      }
    }
    return answer;
  }
  //   console.log(solution([23, 41, 86, 6, 38, 90, 66, 11, 34, 1, 6, 2], 5)); // 41
  //   console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); //3
  //   console.log(solution([1, 1, 4, 2, 2, 1, 4, 2, 5, 1], 3)); //2
  //   console.log(solution([1, 1, 4, 2, 1, 4, 1, 2, 5, 1], 3)); // 4
  //   console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3)); // 1
  //   console.log(solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3)); // 3
  //   console.log(solution([23, 41, 5, 6, 38, 90, 66, 11, 34, 88, 6, 2], 5));
}

// 효율성 13번 통과 X 나머지 통과
{
  function solution(stones, k) {
    let answer = 900000000;
    let n = stones.length;
    // k구간내 가장 작은 값
    let max = 0;
    let max_idx = 0;

    for (let i = 0; i < k; i++) {
      if (max < stones[i]) {
        max = stones[i];
        max_idx = i;
      }
    }

    let lt = 0,
      rt = k;
    for (; rt < n; rt++) {
      // 최소값 갱신
      if (max_idx < lt) {
        max = 0;
        for (let i = lt; i < rt; i++) {
          if (max < stones[i]) {
            max = stones[i];
            max_idx = i;
          }
        }
      }
      answer = Math.min(answer, max);

      lt++;
    }
    if (max_idx < lt) {
      max = 0;
      for (let i = lt; i <= rt; i++) {
        if (max < stones[i]) {
          max = stones[i];
          max_idx = i;
        }
      }
    }
    answer = Math.min(answer, max);
    return answer;
  }
  //   console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 1, 1], 3)); // 2
  //   console.log(solution([23, 41, 86, 6, 38, 90, 66, 11, 34, 1, 6, 2], 5)); // 34
  //   console.log(solution([1, 3, 1], 2)); // 3
  //   console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); //3
  //   console.log(solution([1, 1, 4, 2, 2, 1, 4, 2, 5, 1], 3)); //2
  //   console.log(solution([1, 1, 4, 2, 1, 4, 1, 2, 5, 1], 3)); // 4
  //   console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3)); // 1
  //   console.log(solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3)); // 3
  //   console.log(solution([23, 41, 5, 6, 38, 90, 66, 11, 34, 88, 6, 2], 5)); // 41
}
