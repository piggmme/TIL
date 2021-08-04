// 바둑대회
// N(짝수)명이 출전하고, 흰돌은 N/2 검은돌은 N/2명의 선수가 출전함.
// 흰돌 검은돌 둘 다 출전은 안됨
// 각 선수들의 흰돌로 했을 때 능력과 검은돌로 했을 때 능력이 주어지면, 최상의 선택으로 선수를 뽑아야함
// 흰돌 능력치는 흰돌팀 N/2명 선수들의 흰돌로 했을 때 능력치 총합
// 검은돌도 마찬가지.
// 최상의 선택은 검은돌 흰돌팀 능력차가 최소가 될 때를 의미

// sol1)
{
  // 능력차의 최소
  function solution(nums) {
    let answer = Number.MAX_SAFE_INTEGER;
    const n = nums.length;
    const half = parseInt(n / 2);

    let path = [];

    // 조합 선택
    function DFS(L, s) {
      if (L === half) {
        // 종료조건
        let white = 0,
          black = 0;
        for (let i = 0; i < n; i++) {
          if (path.indexOf(i) !== -1) {
            white += nums[i][0];
          } else black += nums[i][1];
        }
        answer = Math.min(answer, Math.abs(white - black));
      } else {
        for (let i = s; i < n; i++) {
          path.push(i);
          DFS(L + 1, i + 1);
          path.pop();
        }
      }
    }
    DFS(0, 0);

    return answer;
  }
  //   console.log(
  //     solution([
  //       [87, 84],
  //       [66, 78],
  //       [94, 94],
  //       [93, 87],
  //       [72, 92],
  //       [78, 63],
  //     ])
  //   ); // 2
}

// 제출 sol2)
{
  // 능력차의 최소
  function solution(nums) {
    let answer = Number.MAX_SAFE_INTEGER;
    const n = nums.length;
    const half = parseInt(n / 2);
    let total_b = nums.reduce((acc, cur) => acc + cur[1], 0);

    // 조합 선택
    function DFS(L, s, white, n_black) {
      if (L === half) {
        // 절반만 뽑음, 종료조건
        answer = Math.min(answer, Math.abs(white - (total_b - n_black))); // 검은색은 전체에서 누적 검은색 능력치를 빼주면 나머지 검은색이 됨
      } else {
        for (let i = s; i < n; i++) {
          // 현재까지 뽑은 흰색 능력치와 검은색 능력치 누적을 구함
          DFS(L + 1, i + 1, white + nums[i][0], n_black + nums[i][1]);
        }
      }
    }
    DFS(0, 0, 0, 0);

    return answer;
  }
  //   console.log(
  //     solution([
  //       [87, 84],
  //       [66, 78],
  //       [94, 94],
  //       [93, 87],
  //       [72, 92],
  //       [78, 63],
  //     ])
  //   ); // 2
}
