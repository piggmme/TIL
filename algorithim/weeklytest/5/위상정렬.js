const topologySort = (n, m, input) => {
  const graph = [...Array(n + 1)].map(() => []);
  const inDegrees = Array(n + 1).fill(0);

  for (const [start, end] of input) {
    graph[start].push(end);
    inDegrees[end]++;
  }

  const Q = [];
  for (let i = 1; i <= n; i++) {
    if (inDegrees[i] === 0) Q.push(i);
  }

  const answer = [];
  while (Q.length) {
    const node = Q.shift();
    answer.push(node);

    for (const next of graph[node]) {
      inDegrees[next]--;
      if (inDegrees[next] === 0) Q.push(next);
    }
  }

  return answer;
};

console.log(
  topologySort(6, 6, [
    [1, 4],
    [5, 4],
    [4, 3],
    [2, 5],
    [2, 3],
    [6, 2],
  ]),
); // 1 6 2 5 4 3

console.log(
  topologySort(7, 7, [
    [1, 2],
    [1, 5],
    [2, 3],
    [3, 4],
    [4, 6],
    [5, 6],
    [6, 7],
  ]),
); // [1, 2, 5, 3, 4, 6, 7]
