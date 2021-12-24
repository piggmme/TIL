// 1905. Count Sub Islands
// https://leetcode.com/problems/count-sub-islands/

{
  var countSubIslands = function (grid1, grid2) {
    const [m, n] = [grid1.length, grid1[0].length];
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    function DFS(x, y) {
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid2[nx][ny] === 0)
          continue;

        if (grid1[nx][ny] === 0) return false;

        grid2[nx][ny] = 0;
        if (!DFS(nx, ny)) {
          grid2[nx][ny] = 1;
          return false;
        }
      }
      return true;
    }

    let answer = 0;
    for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
        if (grid1[x][y] === 1 && grid2[x][y] === 1) {
          grid2[x][y] = 0;
          if (!DFS(x, y)) {
            grid2[x][y] = 1;
          } else {
            answer++;
          }
        }
      }
    }

    return answer;
  };
  console.log(
    countSubIslands(
      [
        [1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
      ],
      [
        [1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0],
      ],
    ),
  ); // 3
  console.log(
    countSubIslands(
      [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1],
      ],
      [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
      ],
    ),
  ); // 2
}
