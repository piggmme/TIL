// 210806 최단거리, Trie
// 다시 볼 문제 : (1) 동전 바꿔주기 (3) 회장 뽑기

// 1. 동전 바꿔주기
{
  // 개수 제한 존재 => 뒤에서 부터
  function solution(t, coins) {
    let answer = 0;
    let dy = Array.from({ length: t + 1 }, () => 0);
    dy[0] = 1;

    for (let [p, n] of coins) {
      // 동전 선택
      for (let j = t; j >= 1; j--) {
        // 전체 금액 20, 19, 18, ...
        for (let k = 1; k <= n; k++) {
          // 동전의 갯수만큼 반복
          if (j - p * k < 0) break;
          dy[j] += dy[j - p * k];
        }
      }
    }
    answer = dy[t];
    return answer;
  }
  // console.log(
  //   solution(20, [
  //     [5, 3],
  //     [10, 2],
  //     [1, 5],
  //   ])
  // ); // 4
}

// 2. 플로이드 와샬 알고리즘
{
  function solution(n, edges) {
    const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(1000));

    for (let i = 0; i <= n; i++) dist[i][i] = 0;

    for (let [a, b, c] of edges) {
      dist[a][b] = c;
    }

    for (let k = 1; k <= n; k++) {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
    return dist;
  }
  // console.log(
  //   solution(5, [
  //     [1, 2, 6],
  //     [1, 3, 3],
  //     [3, 2, 2],
  //     [2, 4, 1],
  //     [2, 5, 13],
  //     [3, 4, 5],
  //     [4, 2, 3],
  //     [4, 5, 7],
  //   ])
  // );
}

// 3. 회장뽑기
{
  function solution(n, edges) {
    const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(50));
    for (let i = 0; i <= n; i++) dist[i][i] = 0;
    for (const [a, b] of edges) {
      dist[a][b] = 1;
      dist[b][a] = 1;
    }
    for (let k = 1; k <= n; k++) {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
    let PS = 100;
    let answer = [];
    let score = Array.from(Array(n + 1), () => 0);
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        score[i] = Math.max(score[i], dist[i][j]);
      }
      PS = Math.min(PS, score[i]);
    }
    console.log(score);
    answer.push(PS);
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      if (score[i] === PS) cnt++;
    }
    answer.push(cnt);
    return answer; // 2점이 3명
  }
  // console.log(
  //   solution(5, [
  //     [1, 2],
  //     [2, 3],
  //     [3, 4],
  //     [4, 5],
  //     [2, 4],
  //     [5, 3],
  //   ])
  // );
}
