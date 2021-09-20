// 경주로 건설
// https://programmers.co.kr/learn/courses/30/lessons/67259
// 25번 통과 못함
{
  function solution(board) {
    const n = board.length;
    let answer = Number.MAX_SAFE_INTEGER;
    let costs = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];

    function BFS() {
      // queue => [x, y, cost dir : 0, 1, 2, 3]
      // 바로 전까지 계산한 값을 넣으니까 테스트케이스 해결함
      let queue = [];
      queue.push([0, 0, 0, -1]);
      costs[0][0] = 0;

      while (queue.length) {
        const [x, y, cost, dir] = queue.shift();

        if (x === n - 1 && y === n - 1) answer = Math.min(answer, costs[n - 1][n - 1]);

        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];

          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
            let nCost;

            if (dir === -1 || dir === i) {
              nCost = cost + 100;
            } else nCost = cost + 600;

            if (nCost <= costs[nx][ny]) {
              queue.push([nx, ny, nCost, i]);
              costs[nx][ny] = nCost;
            }
          }
        }
      }
    }

    BFS();
    return answer;
  }
  console.log(
    solution([
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 0, 0],
    ])
  );
  //   console.log(
  //     solution([
  //       [0, 0, 0],
  //       [0, 0, 0],
  //       [0, 0, 0],
  //     ])
  //   ); // 900
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0, 0, 0, 0],
  //       [0, 0, 0, 0, 0, 1, 0, 0],
  //       [0, 0, 0, 0, 1, 0, 0, 0],
  //       [0, 0, 0, 1, 0, 0, 0, 1],
  //       [0, 0, 1, 0, 0, 0, 1, 0],
  //       [0, 1, 0, 0, 0, 1, 0, 0],
  //       [1, 0, 0, 0, 0, 0, 0, 0],
  //     ])
  //   ); // 3800
  //   console.log(
  //     solution([
  //       [0, 0, 1, 0],
  //       [0, 0, 0, 0],
  //       [0, 1, 0, 1],
  //       [1, 0, 0, 0],
  //     ])
  //   ); // 2100
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0],
  //       [0, 1, 1, 1, 1, 0],
  //       [0, 0, 1, 0, 0, 0],
  //       [1, 0, 0, 1, 0, 1],
  //       [0, 1, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0, 0],
  //     ])
  //   ); // 3200
}
{
  function solution(board) {
    const n = board.length;
    let answer = Number.MAX_SAFE_INTEGER;
    let cost = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    cost[0][0] = 0;
    let queue = [];

    function BFS() {
      // queue => [x, y, vertical : 가로일때 0, 세로일때 1]

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

    if (board[0][1] === 0) {
      queue.push([0, 1, 0]);
      cost[0][1] = 100;
      BFS();
      answer = Math.min(answer, cost[n - 1][n - 1]);
    }
    if (board[1][0] === 0) {
      cost = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));
      queue.push([1, 0, 1]);
      cost[1][0] = 100;
      BFS();
      answer = Math.min(answer, cost[n - 1][n - 1]);
    }
    // BFS();
    // console.log(cost);
    return answer;
  }
  //   console.log(
  //     solution([
  //       [0, 0, 0],
  //       [0, 0, 0],
  //       [0, 0, 0],
  //     ])
  //   ); // 900
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0, 0, 0, 0],
  //       [0, 0, 0, 0, 0, 1, 0, 0],
  //       [0, 0, 0, 0, 1, 0, 0, 0],
  //       [0, 0, 0, 1, 0, 0, 0, 1],
  //       [0, 0, 1, 0, 0, 0, 1, 0],
  //       [0, 1, 0, 0, 0, 1, 0, 0],
  //       [1, 0, 0, 0, 0, 0, 0, 0],
  //     ])
  //   ); // 3800
  //   console.log(
  //     solution([
  //       [0, 0, 1, 0],
  //       [0, 0, 0, 0],
  //       [0, 1, 0, 1],
  //       [1, 0, 0, 0],
  //     ])
  //   ); // 2100
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0],
  //       [0, 1, 1, 1, 1, 0],
  //       [0, 0, 1, 0, 0, 0],
  //       [1, 0, 0, 1, 0, 1],
  //       [0, 1, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0, 0],
  //     ])
  //   ); // 3200
}
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

            if (nCost + 100 <= cost[nx][ny]) {
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
}

// DFS + 이분탐색
{
  function solution(board) {
    let answer;
    const n = board.length;
    let lt = 0,
      rt = 375000;

    function DFS(mid, x, y, ch, cost) {
      const dx = [1, -1, 0, 0];
      const dy = [0, 0, 1, -1];
      // 마지막 지점에 닿았음
      if (x === n - 1 && y === n - 1) {
        return true;
      } else {
        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && ch[nx][ny] === 0) {
            ch[nx][ny] = 1;
          }
        }
      }
    }

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      let ch = Array.from({ length: n }, () => Array(n).fill(0));
      ch[0][0] = 1;
      if (DFS(mid, 0, 0, ch, 0)) {
        rt = mid - 1;
        answer = mid;
      } else {
        lt = mid + 1;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [0, 0, 0],
  //       [0, 0, 0],
  //       [0, 0, 0],
  //     ])
  //   ); // 900
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0, 0, 0, 0],
  //       [0, 0, 0, 0, 0, 1, 0, 0],
  //       [0, 0, 0, 0, 1, 0, 0, 0],
  //       [0, 0, 0, 1, 0, 0, 0, 1],
  //       [0, 0, 1, 0, 0, 0, 1, 0],
  //       [0, 1, 0, 0, 0, 1, 0, 0],
  //       [1, 0, 0, 0, 0, 0, 0, 0],
  //     ])
  //   ); // 3800
  //   console.log(
  //     solution([
  //       [0, 0, 1, 0],
  //       [0, 0, 0, 0],
  //       [0, 1, 0, 1],
  //       [1, 0, 0, 0],
  //     ])
  //   ); // 2100
  //   console.log(
  //     solution([
  //       [0, 0, 0, 0, 0, 0],
  //       [0, 1, 1, 1, 1, 0],
  //       [0, 0, 1, 0, 0, 0],
  //       [1, 0, 0, 1, 0, 1],
  //       [0, 1, 0, 0, 0, 1],
  //       [0, 0, 0, 0, 0, 0],
  //     ])
  //   ); // 3200
}
