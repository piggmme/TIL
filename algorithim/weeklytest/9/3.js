function solution(grid) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const m = grid.length;
  const n = grid[0].length;
  let answer = Number.MAX_SAFE_INTEGER;
  const empty = [];
  let numBuildings = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) empty.push([i, j]);
      if (grid[i][j] === 1) numBuildings += 1;
    }
  }
  if (empty.length === 0) return -1;

  let Q = [];
  function BFS() {
    const visited = [...Array(m)].map(() => Array(n).fill(0));
    let cntBuildings = 0;
    let dist = 0;
    let L = 0;
    while (Q.length) {
      const len = Q.length;

      for (let i = 0; i < len; i++) {
        const [x, y] = Q.shift();

        for (let j = 0; j < 4; j++) {
          const [nx, ny] = [x + dx[j], y + dy[j]];

          if (
            nx < 0 ||
            nx >= m ||
            ny < 0 ||
            ny >= n ||
            visited[nx][ny] ||
            grid[nx][ny] === 2
          )
            continue;

          if (grid[nx][ny] === 0) {
            visited[nx][ny] = 1;
            Q.push([nx, ny]);
          }
          if (grid[nx][ny] === 1) {
            visited[nx][ny] = 1;
            cntBuildings += 1;
            dist += L + 1;
          }
        }
      }
      L += 1;
    }

    return cntBuildings === numBuildings ? dist : Number.MAX_SAFE_INTEGER;
  }

  for (const [x, y] of empty) {
    Q.push([x, y]);
    // console.log(BFS());
    answer = Math.min(BFS(), answer);
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
console.log(
  solution([
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ]),
); // 7
console.log(solution([[1, 0]])); // 1
console.log(solution([[1]])); // -1
