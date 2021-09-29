// 210805 동적 계획법: 다이나믹 프로그래밍
// 1. 계단 오르기
{
  function solution(n) {
    const dy = Array.from({ length: n + 1 }).fill(0);
    dy[1] = 1;
    dy[2] = 2;

    for (let i = 3; i <= n; i++) {
      dy[i] = dy[i - 2] + dy[i - 1];
    }
    return dy[n];
  }
  //   console.log(solution(7)); // 21
}

// 2. 돌다리 건너기
{
  function solution(n) {
    const dy = Array.from({ length: n + 1 }).fill(0);
    dy[1] = 1;
    dy[2] = 2;

    for (let i = 3; i <= n + 1; i++) {
      dy[i] = dy[i - 2] + dy[i - 1];
    }
    return dy[n + 1];
  }
  //   console.log(solution(7)); //34
}

// 3. 최대 부분 증가 수열
{
  function solution(nums) {
    const n = nums.length;
    const dy = Array.from({ length: n }, () => 0);
    let answer = 0;
    dy[0] = 1;
    for (let i = 1; i < n; i++) {
      let max = 0;
      for (let j = i; j >= 0; j--) {
        if (nums[i] > nums[j]) {
          max = Math.max(max, dy[j]);
        }
      }
      dy[i] = max + 1;
      answer = Math.max(answer, dy[i]);
    }
    return answer;
  }

  //   console.log(solution([2, 7, 5, 8, 6, 4, 7, 12, 3])); // 5
  //   console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
  //   console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 4
}

// 4. 효율적인 공부
{
  function solution(times, r) {
    let answer = 0;
    const n = times.length;
    const dy = Array.from({ length: n }, () => 0);

    times.sort((a, b) => a[1] - b[1]);
    dy[0] = times[0][2];
    for (let i = 1; i < n; i++) {
      const [start, end, eff] = times[i];
      let max = 0;

      for (let j = i; j >= 0; j--) {
        const [preStart, preEnd, preEff] = times[j];
        if (start >= preEnd + r) {
          max = Math.max(max, dy[j]);
        }
      }
      dy[i] = max + eff;
      answer = Math.max(answer, dy[i]);
    }
    return answer;
  }
  //   console.log(
  //     solution(
  //       [
  //         [3, 5, 20],
  //         [4, 7, 16],
  //         [1, 2, 5],
  //         [11, 13, 7],
  //         [9, 10, 6],
  //       ],
  //       2
  //     )
  //   ); //28
}

// 5. 가방문제 (냅색 알고리즘)
{
  function solution(nums, m) {
    const n = nums.length;
    const dy = Array.from({ length: m + 1 }, () => 0);

    for (const [weight, value] of nums) {
      for (let i = weight; i <= m; i++) {
        if (dy[i] < dy[i - weight] + value) dy[i] = dy[i - weight] + value;
      }
    }

    return dy[m];
  }
  //   console.log(
  //     solution(
  //       [
  //         [5, 12],
  //         [3, 8],
  //         [6, 14],
  //         [4, 7],
  //       ],
  //       11
  //     )
  //   ); // 28
}

// 6. 동전 교환 (냅색 알고리즘)
{
  function solution(nums, m) {
    const dy = Array.from({ length: m + 1 }, () => Number.MAX_SAFE_INTEGER);
    dy[0] = 0;
    nums.sort((a, b) => a - b);

    for (let coin of nums) {
      for (let i = coin; i <= m; i++) {
        if (dy[i] > dy[i - coin] + 1) dy[i] = dy[i - coin] + 1;
      }
    }
    return dy[m];
  }
  //   console.log(solution([1, 2, 5], 15)); // 3
  //   console.log(solution([1, 4, 6], 8)); // 2
}

// 7. 최대 점수 구하기 (냅색)
{
  // 뒤에서 앞으로 이동하면서 계산
  function solution(nums, m) {
    const dy = Array.from({ length: m + 1 }, () => 0);

    for (const [score, time] of nums) {
      for (let i = m; i >= time; i--) {
        if (dy[i] < dy[i - time] + score) dy[i] = dy[i - time] + score;
      }
    }
    return dy[m];
  }
  //   console.log(
  //     solution(
  //       [
  //         [10, 5],
  //         [25, 12],
  //         [15, 8],
  //         [6, 3],
  //         [7, 4],
  //       ],
  //       20
  //     )
  //   ); //41
}

// 8. 최대 공통 부분 문자열
// 9. 최소 편집
