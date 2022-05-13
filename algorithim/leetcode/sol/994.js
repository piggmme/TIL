// https://leetcode.com/problems/rotting-oranges/
// 994. Rotting Oranges
// BFS

{
  // 0 - 빈 칸
  // 1 - 신선한 오렌지
  // 2 - 썩은 오렌지
  var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let numFreshOrg = 0;
    const rottens = [];
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const ch = [...Array(m)].map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) numFreshOrg++;
        if (grid[i][j] === 2) {
          rottens.push([i, j]);
          ch[i][j] = 1;
        }
      }
    }

    if (!numFreshOrg) return 0;

    let L = 0;
    while (rottens.length) {
      const len = rottens.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = rottens.shift();

        for (let j = 0; j < 4; j++) {
          const [nx, ny] = [dx[j] + x, dy[j] + y];
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && !ch[nx][ny]) {
            if (grid[nx][ny] === 1) {
              grid[nx][ny] = 2;
              ch[nx][ny] = 1;
              rottens.push([nx, ny]);
              numFreshOrg--;
            }
          }
        }
      }
      L++;
    }

    return numFreshOrg === 0 ? L - 1 : -1;
  };
  console.log(
    orangesRotting([
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ]),
  ); // 4
  console.log(
    orangesRotting([
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ]),
  ); // -1
  console.log(orangesRotting([[0, 2]])); // 0
}

{
  var orangesRotting = function (grid) {
    let answer = 0;
    const m = grid.length;
    const n = grid[0].length;
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    const ch = [...Array(m)].map(() => Array(n).fill(0));
    const rotten = [];
    let hasFreashOrg = false;

    for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
        if (grid[x][y] === 2) rotten.push([x, y]);
        if (grid[x][y] === 1) hasFreashOrg = true;
      }
    }

    if (!hasFreashOrg) return 0;

    while (rotten.length) {
      const len = rotten.length;

      for (let i = 0; i < len; i++) {
        const [x, y] = rotten.shift();

        for (let j = 0; j < 4; j++) {
          const [nx, ny] = [dx[j] + x, dy[j] + y];

          if (
            nx < 0 ||
            nx >= m ||
            ny < 0 ||
            ny >= n ||
            ch[nx][ny] ||
            grid[nx][ny] !== 1
          )
            continue;

          ch[nx][ny] = 1;
          grid[nx][ny] = 2;
          rotten.push([nx, ny]);
        }
      }
      answer++;
    }

    for (let x = 0; x < m; x++)
      for (let y = 0; y < n; y++) if (grid[x][y] === 1) return -1;

    return answer - 1;
  };
}
