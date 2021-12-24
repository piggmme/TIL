// 배달
// https://programmers.co.kr/learn/courses/30/lessons/12978

// 플로이드 워샬
{
  function solution(N, road, K) {
    let dist = Array.from(Array(N + 1), () => Array(N + 1).fill(500000));
    // 자기자신은 거리가 0
    for (let i = 1; i <= N; i++) {
      dist[i][i] = 0;
    }
    for (let [a, b, c] of road) {
      // 만약 이미 값이 들어왔었다면, 가장 시간이 적은 도로만 지나가면 됨
      dist[a][b] = Math.min(c, dist[a][b]);
      dist[b][a] = Math.min(c, dist[b][a]);
    }

    // 플로이드 와샬
    for (let k = 1; k <= N; k++) {
      for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }

    return dist[1].filter((a) => a <= K).length;
  }
  //   console.log(
  //     solution(
  //       5,
  //       [
  //         [1, 2, 1],
  //         [2, 3, 3],
  //         [5, 2, 2],
  //         [1, 4, 2],
  //         [5, 3, 1],
  //         [5, 4, 2],
  //       ],
  //       3
  //     )
  //   ); // 4
  //   console.log(
  //     solution(
  //       6,
  //       [
  //         [1, 2, 1],
  //         [1, 3, 2],
  //         [2, 3, 2],
  //         [3, 4, 3],
  //         [3, 5, 2],
  //         [3, 5, 3],
  //         [5, 6, 1],
  //       ],
  //       4
  //     )
  //   ); // 4
}

// queue (다른사람 풀이)
{
  function solution(N, road, K) {
    const queue = [];
    const adj = Array.from(Array(N + 1), () => new Array());
    const dist = [0, 0];

    for (let i = 0; i < N - 1; ++i) dist.push(Number.MAX_VALUE);

    road.map((info) => {
      let a = info[0];
      let b = info[1];
      let c = info[2];

      adj[a].push({ to: b, weight: c });
      adj[b].push({ to: a, weight: c });
    });

    queue.push({
      to: 1,
      weight: 0,
    });

    (function () {
      while (queue.length) {
        let edge = queue.shift();
        adj[edge.to].map((next) => {
          if (dist[next.to] > dist[edge.to] + next.weight) {
            console.log(edge, next);
            dist[next.to] = dist[edge.to] + next.weight;
            queue.push(next);
          }
        });
      }
    })();

    let answer = 0;
    for (let i = 1; i < N + 1; ++i) {
      if (dist[i] <= K) answer++;
    }

    return answer;
  }
  //   console.log(
  //     solution(
  //       5,
  //       [
  //         [1, 2, 1],
  //         [2, 3, 3],
  //         [5, 2, 2],
  //         [1, 4, 2],
  //         [5, 3, 1],
  //         [5, 4, 2],
  //       ],
  //       3
  //     )
  //   ); // 4
  //   console.log(
  //     solution(
  //       6,
  //       [
  //         [1, 2, 1],
  //         [1, 3, 2],
  //         [2, 3, 2],
  //         [3, 4, 3],
  //         [3, 5, 2],
  //         [3, 5, 3],
  //         [5, 6, 1],
  //       ],
  //       4
  //     )
  //   ); // 4
}
