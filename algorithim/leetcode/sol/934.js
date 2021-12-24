// 934. Shortest Bridge
// https://leetcode.com/problems/shortest-bridge/

// BFS1
{
  var shortestBridge = function (grid) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const n = grid.length;
    const visited = [...Array(n)].map(() => Array(n).fill(0));
    let flag = false;

    const island1 = [];
    function findFirstIsland(x, y) {
      const Q = [[x, y]];
      while (Q.length) {
        const [x, y] = Q.shift();
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
          if (visited[nx][ny] || !grid[nx][ny]) continue;
          visited[nx][ny] = 1;
          Q.push([nx, ny]);
          island1.push([nx, ny]);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j]) {
          flag = true;
          visited[i][j] = 1;
          island1.push([i, j]);
          findFirstIsland(i, j);
          break;
        }
      }
      if (flag) break;
    }

    function findSecondIsland(x, y) {
      const ch = visited.map(cols => cols.map(row => row));
      let L = 0;
      const Q = [[x, y]];
      while (Q.length) {
        const len = Q.length;
        for (let i = 0; i < len; i++) {
          const [x, y] = Q.shift();
          for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
            if (ch[nx][ny]) continue;

            if (grid[nx][ny] === 1) return L;
            ch[nx][ny] = 1;
            Q.push([nx, ny]);
          }
        }
        L++;
      }
      return Number.MAX_SAFE_INTEGER;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (const [x, y] of island1) {
      min = Math.min(min, findSecondIsland(x, y));
    }

    return min;
  };
  //   console.log(
  //     shortestBridge([
  //       [0, 1],
  //       [1, 0],
  //     ]),
  //   ); // 1
  //   console.log(
  //     shortestBridge([
  //       [0, 1, 0],
  //       [0, 0, 0],
  //       [0, 0, 1],
  //     ]),
  //   ); // 2
  //   console.log(
  //     shortestBridge([
  //       [1, 1, 1, 1, 1],
  //       [1, 0, 0, 0, 1],
  //       [1, 0, 1, 0, 1],
  //       [1, 0, 0, 0, 1],
  //       [1, 1, 1, 1, 1],
  //     ]),
  //   ); // 1
  //   console.log(
  //     shortestBridge([
  //       [0, 1, 0, 0, 0],
  //       [0, 1, 0, 1, 1],
  //       [0, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0],
  //       [0, 0, 0, 0, 0],
  //     ]),
  //   ); // 1
}

// DFS2
{
  var shortestBridge = function (grid) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const n = grid.length;
    const visited = [...Array(n)].map(() => Array(n).fill(0));

    function DFS(x, y, island) {
      island.push([x, y]);

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (visited[nx][ny] || !grid[nx][ny]) continue;
        visited[nx][ny] = 1;
        DFS(nx, ny, island);
      }
    }

    const island1 = [];
    const island2 = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] && !visited[i][j]) {
          visited[i][j] = 1;
          if (!island1.length) DFS(i, j, island1);
          else if (!island2.length) DFS(i, j, island2);
          else break;
        }
      }
    }

    function calcDist() {
      let min = Number.MAX_SAFE_INTEGER;
      for (const [nx, ny] of island1) {
        for (const [mx, my] of island2) {
          min = Math.min(min, Math.abs(nx - mx) + Math.abs(ny - my) - 1);
        }
      }
      return min;
    }

    return calcDist(island1, island2);
  };
  console.log(
    shortestBridge([
      [0, 1],
      [1, 0],
    ]),
  ); // 1
  console.log(
    shortestBridge([
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 1],
    ]),
  ); // 2
  console.log(
    shortestBridge([
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ]),
  ); // 1
  console.log(
    shortestBridge([
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]),
  ); // 1
}
