const { sortedIndex } = require("lodash");

// DFS
{
  function solution(n, m, v, road) {
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array(n + 1).fill(0);
    let answer = [];

    // 연결된 노드 표시하기
    for (let i = 0; i < m; i++) {
      graph[road[i][0]].push(road[i][1]);
      graph[road[i][1]].push(road[i][0]);
    }
    // 연결된 노드를 오름차순으로 정렬하기
    for (let i = 1; i <= n; i++) {
      graph[i].sort((a, b) => a - b);
    }

    function DFS(L) {
      // 방문한 노드면 탈출
      if (ch[L] === 1) return;
      else {
        // 방문하지 않았다면 인접한 노드 방문하기
        ch[L] = 1;
        answer.push(L);
        for (let node of graph[L]) {
          DFS(node);
        }
      }
    }

    DFS(v);
    return answer;
  }
  console.log(
    solution(4, 5, 1, [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 4],
      [3, 4],
    ])
  );
  console.log(
    solution(5, 5, 3, [
      [5, 4],
      [5, 2],
      [1, 2],
      [3, 4],
      [3, 1],
    ])
  );
  console.log(
    solution(1000, 1, 1000, [
      [999, 1000],
      [999, 1000],
    ])
  );
}
// BFS
{
  function solution(n, m, v, road) {
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array(n + 1).fill(0);
    let answer = [];

    // 연결된 노드 표시하기
    for (let i = 0; i < m; i++) {
      graph[road[i][0]].push(road[i][1]);
      graph[road[i][1]].push(road[i][0]);
    }
    // 연결된 노드를 오름차순으로 정렬하기
    for (let i = 1; i <= n; i++) {
      graph[i].sort((a, b) => a - b);
    }

    // BFS로 그래프 탐색
    function BFS() {
      let queue = [];
      ch[v] = 1;
      answer.push(v);
      queue.push(v);

      while (queue.length) {
        let cur = queue.shift();
        for (let node of graph[cur]) {
          if (ch[node] === 0) {
            answer.push(node);
            ch[node] = 1;
            queue.push(node);
          }
        }
      }
    }

    BFS();
    return answer;
  }
  // console.log(
  //   solution(4, 5, 1, [
  //     [1, 2],
  //     [1, 3],
  //     [1, 4],
  //     [2, 4],
  //     [3, 4],
  //   ])
  // );
  // console.log(
  //   solution(5, 5, 3, [
  //     [5, 4],
  //     [5, 2],
  //     [1, 2],
  //     [3, 4],
  //     [3, 1],
  //   ])
  // );
  // console.log(
  //   solution(1000, 1, 1000, [
  //     [999, 1000],
  //     [999, 1000],
  //   ])
  // );
}
