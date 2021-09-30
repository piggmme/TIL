// 2. 경로 탐색 (인접 행렬)
{
  function solution(n, edges) {
    let answer = 0;
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    const ch = Array.from({ length: n + 1 }).fill(0);

    // 인접 행렬 연결
    for (let [a, b] of edges) {
      graph[a][b] = 1;
    }

    // 탐색. L : 현재 탐색 노드
    function DFS(L) {
      // 도착완료!
      if (L === n) answer += 1;
      else {
        for (let i = 1; i <= n; i++) {
          if (graph[L][i] === 1 && ch[i] === 0) {
            ch[i] = 1;
            DFS(i);
            ch[i] = 0;
          }
        }
      }
    }
    ch[1] = 1;
    DFS(1);

    return answer;
  }
  //   console.log(
  //     solution(5, [
  //       [1, 2],
  //       [1, 3],
  //       [1, 4],
  //       [2, 1],
  //       [2, 3],
  //       [2, 5],
  //       [3, 4],
  //       [4, 2],
  //       [4, 5],
  //     ])
  //   ); // 6
}

// 3. 경로 탐색 (인접 리스트)
{
  function solution(n, edges) {
    let answer = 0;
    const graph = Array.from({ length: n + 1 }, () => []);
    const ch = Array.from({ length: n + 1 }).fill(0);

    for (const [a, b] of edges) {
      graph[a].push(b);
    }

    function DFS(L) {
      if (L === n) answer += 1;
      else {
        for (const next of graph[L]) {
          if (ch[next] === 0) {
            ch[next] = 1;
            DFS(next);
            ch[next] = 0;
          }
        }
      }
    }
    ch[1] = 1;
    DFS(1);
    return answer;
  }
  //   console.log(
  //     solution(5, [
  //       [1, 2],
  //       [1, 3],
  //       [1, 4],
  //       [2, 1],
  //       [2, 3],
  //       [2, 5],
  //       [3, 4],
  //       [4, 2],
  //       [4, 5],
  //     ])
  //   ); // 6
}

// 4. 동아리 개수
{
  function solution(n, edges) {
    let answer = 0;
    const graph = Array.from({ length: n + 1 }, () => []);
    const ch = Array.from({ length: n + 1 }).fill(0);

    for (let [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }

    function DFS(v) {
      for (const next of graph[v]) {
        if (ch[next] === 0) {
          ch[next] = 1;
          DFS(next);
        }
      }
    }

    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        answer++;
        DFS(i);
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(7, [
  //       [1, 2],
  //       [2, 3],
  //       [1, 4],
  //       [1, 5],
  //     ])
  //   ); // 3
}

// 5. 섬나라 아일랜드
{
  function solution(board) {
    let answer = 0;
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
    const n = board.length;
    const m = board[0].length;

    function DFS(x, y) {
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
          board[nx][ny] = 0;
          DFS(nx, ny);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) {
          board[i][j] = 0;
          DFS(i, j);
          answer++;
        }
      }
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [1, 1, 0, 0, 0, 1, 0],
  //       [0, 1, 1, 0, 1, 1, 0],
  //       [0, 1, 0, 0, 0, 0, 0],
  //       [0, 0, 0, 1, 0, 1, 1],
  //       [1, 1, 0, 1, 1, 0, 0],
  //       [1, 0, 0, 0, 1, 0, 0],
  //       [1, 0, 1, 0, 1, 0, 0],
  //     ])
  //   ); // 5
}

// 6. 최대 선호 음식
{
  function solution(nums, d, k) {
    const n = nums.length;
    const student = Array.from({ length: n }, () => 0);
    let answer = Number.MIN_SAFE_INTEGER;
    const pow = Array.from({ length: d + 1 }, () => 0);

    pow[1] = 1;
    for (let i = 2; i <= d; i++) {
      pow[i] = pow[i - 1] * 2;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < nums[i].length; j++) {
        student[i] += pow[nums[i][j]];
      }
    }

    function DFS(L, s, bit) {
      if (L === k) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
          if ((bit & student[j]) === student[j]) cnt++;
        }
        answer = Math.max(answer, cnt);
      } else {
        for (let i = s; i <= d; i++) {
          DFS(L + 1, i + 1, bit + pow[i]);
        }
      }
    }
    DFS(0, 1, 0);
    return answer;
  }
  //   console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)); //6
}

// 7. 토마토
{
  function solution(board) {
    let answer = 0;
    const n = board.length;
    const m = board[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const dist = Array.from({ length: n }, () => Array(m).fill(0));
    const queue = [];

    function BFS() {
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 0) {
            board[nx][ny] = 1;
            dist[nx][ny] = dist[x][y] + 1;
            queue.push([nx, ny]);
            answer = dist[nx][ny];
          }
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 1) {
          queue.push([i, j]);
        }
      }
    }
    BFS();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 0) {
          return -1;
        }
      }
    }
    return answer;
  }
  //   console.log(
  //     solution([
  //       [0, 0, -1, 0, 0, 0],
  //       [0, 0, 1, 0, -1, 0],
  //       [0, 0, -1, 0, 0, 0],
  //       [0, 0, 0, 0, -1, 1],
  //     ])
  //   ); // 4
  //   console.log(
  //     solution([
  //       [0, 0, -1, 0, 0, 0],
  //       [0, 0, 1, 0, -1, 0],
  //       [0, 0, -1, 0, 0, -1],
  //       [0, 0, 0, 0, -1, 0],
  //     ])
  //   ); // -1
}
