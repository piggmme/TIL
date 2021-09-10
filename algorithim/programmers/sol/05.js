// 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162
{
  function solution(n, computers) {
    let answer = 0;
    let connection = Array.from(Array(n), () => []);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (computers[i][j] === 1 && i !== j) {
          if (!connection[i].includes(j)) connection[i].push(j);
          if (!connection[j].includes(i)) connection[j].push(i);
        }
      }
    }

    let ch = Array(n).fill(0);
    function BFS(k) {
      let queue = [];
      queue.push(...connection[k]);
      while (queue.length) {
        let cur = queue.shift();
        if (ch[cur] === 0) {
          ch[cur] = 1;
          queue.push(...connection[cur]);
        }
      }
      answer += 1;
    }

    ch[0] = 1;
    BFS(0);
    for (let i = 1; i < n; i++) {
      if (!ch[i]) BFS(i);
    }
    return answer;
  }
  //   console.log(
  //     solution(3, [
  //       [1, 1, 0],
  //       [1, 1, 0],
  //       [0, 0, 1],
  //     ])
  //   );

  console.log(
    solution(3, [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ])
  );
}
