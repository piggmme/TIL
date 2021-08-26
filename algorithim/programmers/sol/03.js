// lv3 징검다리 건너기
// https://programmers.co.kr/learn/courses/30/lessons/64062

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
  console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 1, 1], 3)); // 2
  console.log(solution([23, 41, 86, 6, 38, 90, 66, 11, 34, 1, 6, 2], 5)); // 34
  console.log(solution([1, 3, 1], 2)); // 3
  console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); //3
  console.log(solution([1, 1, 4, 2, 2, 1, 4, 2, 5, 1], 3)); //2
  console.log(solution([1, 1, 4, 2, 1, 4, 1, 2, 5, 1], 3)); // 4
  console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3)); // 1
  console.log(solution([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3)); // 3
  console.log(solution([23, 41, 5, 6, 38, 90, 66, 11, 34, 88, 6, 2], 5)); // 41
}
