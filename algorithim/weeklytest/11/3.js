// 사과 먹기
// 현수는 N개의 사과를 먹을려고 합니다. 현수는 사과를 먹을 때 다음과 같은 규칙으로 먹으려고 합니다. 다음은 현수가 하루 동안 먹을 수 있는 사과의 개수입니다.
// 1) 사과 한 개를 먹는다.
// 2) 현재 있는 사과의 개수가 2로 나누어 떨어지는 개수라면 그 절반(사과개수 / 2)을 먹는다.
// 3) 현재 있는 사과의 개수가 3으로 나누어 떨어진다면 (사과개수 / 3) * 2 개의 사과를 먹는다.
// 현수에게 N개의 사과가 주어지면 현수가 위 3가지 중 하나를 선택해서 사과를 먹을 때 최소 몇 일만에 사과를 모두 먹을 수 있는지 알아내는 프로그램을 작성하세요.

// ▣ 입력설명매개변수 n에 사과의 개수가 주어집니다. (1<=n<=2,000,000,000)

// ▣ 출력설명
// 현수가 사과를 모두 먹기위해 필요한 최소 날수를 반환합니다.

// ▣ 매개변수 형식 1
// 10

// ▣ 반환값 형식 1
// 4

// BFS
{
  function solution(n) {
    function BFS() {
      const Q = [n];
      const ch = new Set();
      ch.add(n);
      let L = 0;

      while (Q.length) {
        const len = Q.length;
        for (let i = 0; i < len; i++) {
          const cur = Q.shift();
          for (const next of [cur - 1, cur / 2, cur - (cur / 3) * 2]) {
            if (next !== Math.floor(next) || ch.has(next) || next < 0) continue;
            if (next === 0) return L + 1;
            ch.add(next);
            Q.push(next);
          }
        }
        L += 1;
      }
    }
    return BFS(n);
  }
  console.log(solution(10)); // 4
}

// DP -> core dump (메모리 초과)
{
  function solution(n) {
    const dy = [];
    // dy[i] = k
    // i: 남은사과, k: 지난 날수
    dy[n] = 0;

    for (let i = n - 1; i >= 0; i--) {
      const j = i + 1;
      if (dy[i] === undefined) dy[i] = 2000000000;
      if (dy[j] === undefined) dy[j] = 2000000000;

      if (j % 2 === 0) {
        if (dy[j / 2] === undefined) dy[j / 2] = 2000000000;
        dy[j / 2] = Math.min(dy[j] + 1, dy[j / 2]);
      }
      if (j % 3 === 0) {
        if (dy[j - (j / 3) * 2] === undefined) dy[j - (j / 3) * 2] = 2000000000;
        dy[j - (j / 3) * 2] = Math.min(dy[j] + 1, dy[j - (j / 3) * 2]);
      }
      dy[i] = Math.min(dy[j] + 1, dy[i]);
    }
    return dy[0];
  }
  // console.log(solution(10));
  // console.log(solution(10000000));
}
