// 경주로 건설
// https://programmers.co.kr/learn/courses/30/lessons/67259
{
  function solution(board) {
    const n = board.length;
    let cost = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    cost[0][0] = 0;

    function BFS() {
      // queue => [x, y, vertical : 가로일때 0, 세로일때 1]
      let queue = [];
      if (board[0][1] === 0) {
        queue.push([0, 1, 0]);
        cost[0][1] = 100;
      }
      if (board[1][0] === 0) {
        queue.push([1, 0, 1]);
        cost[1][0] = 100;
      }

      while (queue.length) {
        const [x, y, vertical] = queue.shift();
        // console.log(x, y, vertical);
        if (board[x][y]) {
          console.log(x, y, 'close');
          continue;
        }

        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
            const nVertical = dy[i] === 0 ? 1 : 0;
            let nCost;

            if (vertical === nVertical) nCost = cost[x][y] + 100;
            else nCost = cost[x][y] + 600;

            if (nCost <= cost[nx][ny]) {
              queue.push([nx, ny, nVertical]);
              cost[nx][ny] = nCost;
            }
          }
        }
      }
    }

    BFS();
    // console.log(cost);
    return cost[n - 1][n - 1];
  }
  console.log(
    solution([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  ); // 900
  console.log(
    solution([
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ])
  ); // 3800
  console.log(
    solution([
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ])
  ); // 2100
  console.log(
    solution([
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0],
    ])
  ); // 3200
}
