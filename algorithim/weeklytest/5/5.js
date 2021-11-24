{
  function solution(n, relations) {
    const answer = [];
    const graph = Array.from(Array(n + 1), () => Array());
    const indegrees = Array(n + 1).fill(0);
    const dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    Q = [];

    for (let [a, b, c] of relations) {
      graph[b].push([a, c]);
      indegrees[a]++;
    }
    console.log(graph, indegrees);

    for (let i = 1; i < n; i++) {
      if (indegrees[i] === 0) {
        Q.push(i);
        dy[i][i] = 1;
      }
    }
    while (Q.length) {
      cur = Q.shift();
      for (let [next, cnt] of graph[cur]) {
        for (let i = 1; i < n; i++) {
          dy[i][next] += dy[i][cur] * cnt;
        }
        indegrees[next]--;
        if (indegrees[next] === 0) Q.push(next);
      }
    }
    for (let i = 1; i < n; i++) {
      if (dy[i][n] > 0) answer.push([i, dy[i][n]]);
    }
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [5, 1, 2],
  //       [5, 2, 2],
  //       [7, 5, 2],
  //       [6, 5, 2],
  //       [6, 3, 3],
  //       [6, 4, 4],
  //       [7, 6, 3],
  //       [7, 4, 5],
  //     ]),
  //   );
  // console.log(
  //   solution(5, [
  //     [5, 4, 3],
  //     [5, 1, 5],
  //     [5, 3, 4],
  //     [4, 1, 1],
  //     [4, 2, 3],
  //   ]),
  // );
}

// 한결님 코드
{
  function solution(n, relations) {
    let answer = [[]];
    const complex = new Map();
    for (const [high, low, num] of relations) {
      complex.set(high, [...(complex.get(high) || []), [low, num]]);
    }
    const basic = new Map();
    let queue = [];
    queue.push([n, 1]);
    while (queue.length) {
      console.log(queue);
      const [part, num] = queue.shift();
      for (let i = 0; i < num; i++) {
        if (complex.has(part)) {
          queue = [...queue, ...complex.get(part)];
        } else {
          basic.set(part, (basic.get(part) || 0) + 1);
        }
      }
    }

    answer = [...basic.entries()].sort((a, b) => a[0] - b[0]);
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [5, 1, 2],
  //       [5, 2, 2],
  //       [7, 5, 2],
  //       [6, 5, 2],
  //       [6, 3, 3],
  //       [6, 4, 4],
  //       [7, 6, 3],
  //       [7, 4, 5],
  //     ]),
  //   );
}
