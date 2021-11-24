// https://leetcode.com/problems/find-eventual-safe-states/
// 802. Find Eventual Safe States
{
  const eventualSafeNodes = graph => {};
}

{
  const topologySort = input => {
    const n = input.length;
    const graph = [...Array(n + 1)].map(() => []);
    let beforeMe = [...Array(n + 1)].map(() => []);

    // 그래프 연결
    for (const [from, to] of input) {
      graph[from].push(to);
      beforeMe[to].push(from);
    }

    // 진입차수가 0인 정점을 큐에 삽입
    const Q = [];
    const visited = Array(n + 1).fill(0);
    const pushNextNodes = () => {
      for (let i = 1; i <= n; i++) {
        if (beforeMe[i].length === 0 && !visited[i]) {
          // 방문한 노드는 방문하지 않음
          visited[i] = 1;
          Q.push(i);
        }
      }
    };

    pushNextNodes();
    const result = [];
    while (Q.length) {
      // 큐에서 노드 하나 꺼내서 연결된 모든 간선 제거함
      const node = Q.shift();
      result.push(node);
      beforeMe = beforeMe.map(nodes => nodes.filter(a => a !== node));
      pushNextNodes();
    }

    return result.length === input.length ? result : '사이클 존재';
  };
  console.log(
    topologySort([
      [1, 2],
      [1, 5],
      [2, 3],
      [3, 4],
      [4, 6],
      [5, 6],
      [6, 7],
    ]),
  );
  console.log(
    topologySort([
      [1, 2],
      [1, 5],
      [2, 3],
      [3, 4],
      [4, 6],
      [6, 4],
      [5, 6],
      [6, 7],
    ]),
  );
}

{
  const topologySort = input => {
    const graph = [...Array(input.length + 1)].map(() => []);

    // 그래프 연결
    for (const [from, to] of input) {
      graph[from].push(to);
    }

    // 진입차수 구하기
    const inDegree = new Array(input.length + 1).fill(0);
    for (const from of graph) {
      for (const to of from) {
        inDegree[to] += 1;
      }
    }

    // 진입차수가 0인 노드들 찾아서 배열로 반환
    const findNextNodes = () =>
      inDegree
        .map((degree, i) => [degree, i])
        .filter(([degree]) => degree === 0)
        .map(([, i]) => i)
        .slice(1);

    const result = [];
    let Q = findNextNodes();
    while (Q.length) {
      // 큐에서 하나 꺼내서 연결된 모든 간선 제거
      const node = Q.shift();
      result.push(node);
      inDegree[node] = -1;
      for (const next of graph[node]) {
        inDegree[next] -= 1;
      }
      const nexts = findNextNodes();
      Q = [...new Set([...Q, ...nexts])];
    }
    return result.length === input.length ? result : '사이클 존재';
  };
  //   console.log(
  //     topologySort([
  //       [1, 2],
  //       [1, 5],
  //       [2, 3],
  //       [3, 4],
  //       [4, 6],
  //       [5, 6],
  //       [6, 7],
  //     ]),
  //   );
  //   console.log(
  //     topologySort([
  //       [1, 2],
  //       [1, 5],
  //       [2, 3],
  //       [3, 4],
  //       [4, 6],
  //       [6, 4],
  //       [5, 6],
  //       [6, 7],
  //     ]),
  //   );
}
