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
