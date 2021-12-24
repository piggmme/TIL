// 695. Max Area of Island
// https://leetcode.com/problems/max-area-of-island/

{
  var maxAreaOfIsland = function (grid) {
    const [m, n] = [grid.length, grid[0].length];
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    let cnt = 1;
    function DFS(x, y) {
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] === 0)
          continue;
        grid[nx][ny] = 0;
        cnt++;
        DFS(nx, ny);
      }
    }

    let max = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j]) {
          cnt = 1;
          grid[i][j] = 0;
          DFS(i, j);
          max = Math.max(max, cnt);
        }
      }
    }
    return max;
  };
  console.log(
    maxAreaOfIsland([
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ]),
  ); // 6
  console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])); // 0
}
