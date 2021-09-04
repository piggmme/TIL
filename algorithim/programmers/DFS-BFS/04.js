// 가장 먼 노드
// https://programmers.co.kr/learn/courses/30/lessons/49189

{
  function solution(n, edge) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array()); // n+1개의 빈배열 생성
    let ch = Array(n + 1).fill(0); // 들렸는지 확인
    let result = Array(n + 1).fill(n);
    (result[0] = 0), (result[1] = 0);

    // 인접 리스트 생성
    for (let [a, b] of edge) {
      graph[a].push(b);
      graph[b].push(a);
    }

    let L = 1;
    ch[1] = 1;
    function BFS(v) {
      let queue = [...graph[1]];
      while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
          let cur = queue.shift();

          if (ch[cur] === 0) {
            result[cur] = Math.min(L, result[cur]);
            ch[cur] = 1;
            queue.push(...graph[cur]);
          }
        }
        L++;
      }
    }

    BFS(0);

    let tp = Math.max(...result);
    for (let i = 2; i <= n; i++) {
      if (tp === result[i]) answer++;
    }

    return answer;
  }
  console.log(
    solution(6, [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ])
  ); // 3
}
