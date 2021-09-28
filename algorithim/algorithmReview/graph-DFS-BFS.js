// 2. 경로 탐색 (인접 행렬)
{
  function solution(n, edges) {
    let answer = 0;
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    const ch = Array.from({ length: n + 1 }).fill(0);

    // 인접 행렬 연결
    for (let [a, b] of edges) {
      graph[a][b] = 1;
    }

    // 탐색. L : 현재 탐색 노드
    function DFS(L) {
      // 도착완료!
      if (L === n) answer += 1;
      else {
        for (let i = 1; i <= n; i++) {
          if (graph[L][i] === 1 && ch[i] === 0) {
            ch[i] = 1;
            DFS(i);
            ch[i] = 0;
          }
        }
      }
    }
    ch[1] = 1;
    DFS(1);

    return answer;
  }
  //   console.log(
  //     solution(5, [
  //       [1, 2],
  //       [1, 3],
  //       [1, 4],
  //       [2, 1],
  //       [2, 3],
  //       [2, 5],
  //       [3, 4],
  //       [4, 2],
  //       [4, 5],
  //     ])
  //   ); // 6
}

// 3. 경로 탐색 (인접 리스트)
{
  function solution(n, edges) {
    let answer = 0;
    const graph = Array.from({ length: n + 1 }, () => []);
    const ch = Array.from({ length: n + 1 }).fill(0);

    for (const [a, b] of edges) {
      graph[a].push(b);
    }

    function DFS(L) {
      if (L === n) answer += 1;
      else {
        for (const next of graph[L]) {
          if (ch[next] === 0) {
            ch[next] = 1;
            DFS(next);
            ch[next] = 0;
          }
        }
      }
    }
    ch[1] = 1;
    DFS(1);
    return answer;
  }
  //   console.log(
  //     solution(5, [
  //       [1, 2],
  //       [1, 3],
  //       [1, 4],
  //       [2, 1],
  //       [2, 3],
  //       [2, 5],
  //       [3, 4],
  //       [4, 2],
  //       [4, 5],
  //     ])
  //   ); // 6
}

// 4. 동아리 개수
{
  function solution(n, edges) {
    return answer;
  }
  console.log(
    solution(7, [
      [1, 2],
      [2, 3],
      [1, 4],
      [1, 5],
    ])
  ); // 3
}
