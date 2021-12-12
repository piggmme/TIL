// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

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
  console.log(orangesRotting([[0, 2]], 0)); // 0
}

// {
//   var orangesRotting = function (grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     const ch = [...Array(m)].map(() => Array(n).fill(0));
//     const dx = [0, 0, 1, -1];
//     const dy = [1, -1, 0, 0];
//     let answer = 0;
//     let hasFreshOrg = false;

//     const rotten = [];
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (grid[i][j] === 2) rotten.push([i, j]);
//         if (grid[i][j] === 1) hasFreshOrg = true;
//       }
//     }

//     if (!hasFreshOrg) return 0;

//     function BFS() {
//       while (rotten.length) {
//         const len = rotten.length;
//         for (let j = 0; j < len; j++) {
//           const [x, y] = rotten.shift();
//           for (let i = 0; i < 4; i++) {
//             const [nx, ny] = [x + dx[i], y + dy[i]];
//             if (
//               nx >= 0 &&
//               nx < m &&
//               ny >= 0 &&
//               ny < n &&
//               grid[nx][ny] === 1 &&
//               ch[nx][ny] === 0
//             ) {
//               ch[nx][ny] = 1;
//               rotten.push([nx, ny]);
//               grid[nx][ny] = 2;
//             }
//           }
//         }
//         answer++;
//       }
//     }
//     BFS();

//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         // 아직 안익은 토마토가 있다면? -1
//         if (grid[i][j] === 1) {
//           return -1;
//         }
//       }
//     }

//     return answer - 1;
//   };
//   console.log(
//     orangesRotting([
//       [2, 1, 1],
//       [1, 1, 0],
//       [0, 1, 1],
//     ]),
//   ); // 4
//   console.log(
//     orangesRotting([
//       [2, 1, 1],
//       [0, 1, 1],
//       [1, 0, 1],
//     ]),
//   ); // -1
//   console.log(orangesRotting([[0, 2]], 0)); // 0
// }
