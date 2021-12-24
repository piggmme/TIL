// 합승 택시 요금
// https://programmers.co.kr/learn/courses/30/lessons/72413
{
  function solution(n, s, a, b, fares) {
    var answer = 0;

    let dist = Array.from(Array(n + 1), () =>
      Array(n + 1).fill(Number.MAX_SAFE_INTEGER),
    );
    for (let i = 0; i <= n; i++) dist[i][i] = 0;
    for (let [from, to, fee] of fares) {
      dist[from][to] = fee;
      dist[to][from] = fee;
    }

    // 간선 간 최소 비용 설정
    for (let k = 1; k <= n; k++) {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }

    answer = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
      answer = Math.min(answer, dist[s][i] + dist[i][a] + dist[i][b]);
    }

    return answer;
  }
  console.log(
    solution(6, 4, 6, 2, [
      [4, 1, 10],
      [3, 5, 24],
      [5, 6, 2],
      [3, 1, 41],
      [5, 1, 24],
      [4, 6, 50],
      [2, 4, 66],
      [2, 3, 22],
      [1, 6, 25],
    ]),
  ); // 82
}
