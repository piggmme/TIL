// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/

{
  var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const Q = [];

    function BFS() {
      while (Q.length) {
        const [x, y] = Q.shift();
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === '1') {
            grid[nx][ny] = '0';
            Q.push([nx, ny]);
          }
        }
      }
    }

    let countIslands = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '0') continue;
        grid[i][j] = '0';
        Q.push([i, j]);
        BFS();
        countIslands++;
      }
    }
    return countIslands;
  };

  console.log(
    numIslands([
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]),
  ); // 3
}
