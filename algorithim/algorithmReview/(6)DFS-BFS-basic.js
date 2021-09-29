// 다시 볼 문제 : 전부!!

// 1. 재귀함수를 이용한 이진수 출력
{
  function solution(n) {
    let answer = 0;
    let tmp = [];
    function DFS(n) {
      if (n === 0) return;
      else {
        DFS(parseInt(n / 2));
        tmp.push(n % 2);
      }
    }
    DFS(n);
    return tmp.join('');
  }
  //   console.log(solution(11)); // 1011
  //   console.log(solution(1024)); // 2^10 = 10 0000 0000
}

// 2. 이진 트리 순회
{
  {
    // 전위
    function solution(n) {
      let answer = '';
      function DFS(L) {
        if (L > 7) return;
        else {
          answer += L + ' ';
          DFS(L * 2);
          DFS(L * 2 + 1);
        }
      }
      DFS(n);
      return answer;
    }
    // console.log(solution(1)); // : 1 2 4 5 3 6 7
  }
  {
    // 중위
    function solution(n) {
      let answer = '';
      function DFS(L) {
        if (L > 7) return;
        else {
          DFS(L * 2);
          answer += L + ' ';
          DFS(L * 2 + 1);
        }
      }
      DFS(n);
      return answer;
    }
    // console.log(solution(1)); // 4 2 5 1 6 3 7
  }
  {
    // 후위
    function solution(n) {
      let answer = '';
      function DFS(L) {
        if (L > 7) return;
        else {
          DFS(L * 2);
          DFS(L * 2 + 1);
          answer += L + ' ';
        }
      }
      DFS(n);
      return answer;
    }
    // console.log(solution(1)); // 4 5 2 6 7 3 1
  }
}

// 3. 부분집합 구하기
{
  function solution(n) {
    let answer = [];
    let tmp = [];
    function DFS(L) {
      if (L > n) {
        if (tmp.length !== 0) answer.push(tmp.slice());
      } else {
        tmp.push(L);
        DFS(L + 1);
        tmp.pop();
        DFS(L + 1);
      }
    }
    DFS(1);
    return answer;
  }
  //   console.log(solution(3));
  {
    // 조합으로 부분집합 구하기
    function solution(n, m) {
      let answer = [];
      let tmp = [];

      function DFS(L, s) {
        console.log(tmp);
        for (let i = s; i <= n; i++) {
          tmp.push(i);
          DFS(L + 1, i + 1); // 다음 숫자부터 돌게 i+1삽입함.
          tmp.pop();
        }
      }
      DFS(0, 1);
      return answer;
    }
    // console.log(solution(3));
  }
}

// 4. 합이 같은 부분집합
{
  function solution(nums) {
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    const n = nums.length;
    let answer = false;
    let flag = false;

    function DFS(L, sum) {
      if (L === n) {
        if (total - sum === sum) {
          flag = true;
          answer = true;
        }
      } else {
        DFS(L + 1, sum + nums[L]);
        DFS(L + 1, sum);
      }
    }
    DFS(0, 0);
    return answer;
  }
  //   console.log(solution([1, 2, 3])); // Y
  //   console.log(solution([1, 3, 5, 6, 7, 10])); // Y
  //   console.log(solution([5, 2, 6, 9, 10, 12])); // Y
  //   console.log(solution([3, 9, 11, 13])); // N
}

// 5. 바둑이 승차
{
  function solution(nums, c) {
    let answer = Number.MIN_SAFE_INTEGER;
    const n = nums.length;
    const total = nums.reduce((acc, cur) => acc + cur, 0);

    function DFS(L, sum, tsum) {
      if (sum > c) return;
      if (sum + (total - tsum) < answer) return;
      if (L === n) {
        answer = Math.max(answer, sum);
      } else {
        DFS(L + 1, sum + nums[L], tsum + sum[L]);
        DFS(L + 1, sum, tsum + sum[L]);
      }
    }
    DFS(0, 0, 0);

    return answer;
  }
  //   console.log(solution([81, 58, 42, 33, 61], 259)); //  242
  //   console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 372
}

// 6. 최대 점수 구하기
{
  function solution(nums, m) {
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    const n = nums.length;
    let answer = 0;
    function DFS(L, sum, time, tsum) {
      if (time > m) return;
      if (sum + (total - tsum) < answer) return;
      if (L === n) {
        answer = Math.max(answer, sum);
      } else {
        DFS(L + 1, sum + nums[L][0], time + nums[L][1], tsum + nums[L][0]);
        DFS(L + 1, sum, time, tsum + nums[L][0]);
      }
    }
    DFS(0, 0, 0, 0);
    return answer;
  }
  // console.log(
  //   solution(
  //     [
  //       [10, 5],
  //       [25, 12],
  //       [15, 8],
  //       [6, 3],
  //       [7, 4],
  //     ],
  //     20
  //   )
  // ); // 41
  // console.log(
  //   solution(
  //     [
  //       [15, 6],
  //       [30, 11],
  //       [23, 8],
  //       [14, 4],
  //       [10, 3],
  //       [20, 7],
  //     ],
  //     25
  //   )
  // ); // 74
}

// 7. 중복순열 구하기
{
  function solution(n, m) {
    const answer = [];
    const tp = [];
    function DFS(L) {
      if (L === m) {
        answer.push(tp.slice());
      } else {
        for (let i = 1; i <= n; i++) {
          tp.push(i);
          DFS(L + 1);
          tp.pop();
        }
      }
    }
    DFS(0);
    return answer;
  }
  // console.log(solution(3, 2));
}

// 8. 순열 구하기
{
  function solution(nums, m) {
    const answer = [];
    const tp = [];
    const ch = Array.from({ length: nums.length }, () => 0);

    function DFS(L) {
      if (L === m) answer.push(tp.slice());
      else {
        for (let i = 0; i < nums.length; i++) {
          if (ch[i] === 0) {
            tp.push(nums[i]);
            ch[i] = 1;
            DFS(L + 1);
            tp.pop();
            ch[i] = 0;
          }
        }
      }
    }
    DFS(0);
    return answer;
  }
  // console.log(solution([3, 6, 9], 2));
}

// 9. 조합의 경우수 (메모이제이션)
{
  {
    // 메모이제이션 O
    function solution(n, r) {
      let dy = Array.from(Array(35), () => Array(35).fill(0));

      function DFS(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (n === r || r === 0) return 1;
        else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
      }
      return DFS(n, r);
    }
    // console.log(solution(5, 3)); // 10
    // console.log(solution(33, 19)); // 818809200
  }
  {
    // 메모이제이션 X
    function solution(n, r) {
      function DFS(n, r) {
        if (n === r || r === 0) return 1;
        else return DFS(n - 1, r - 1) + DFS(n - 1, r);
      }
      return DFS(n, r);
    }
    // console.log(solution(5, 3)); // 10
    // console.log(solution(33, 19)); // => 시간 초과...
  }
}

// 10. 수열 추측하기
{
  function solution(n, f) {
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    function combi(n, r) {
      if (dy[n][r] > 0) return dy[n][r];
      if (n === r || r === 0) return 1;
      else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }

    // 순열로 1~n까지 숫자 뽑기
    const ch = Array.from({ length: n + 1 }, () => 0);
    const part = [];
    const com = [];
    let flag = false;
    function DFS(L, sum) {
      if (flag) return;
      if (L === n) {
        if (sum === f) {
          answer = part.slice();
          flag = true;
        }
      } else {
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            part.push(i);
            DFS(L + 1, sum + part[part.length - 1] * com[L]);
            part.pop();
            ch[i] = 0;
          }
        }
      }
    }
    for (let i = 0; i < n; i++) {
      com.push(combi(n - 1, i));
    }
    DFS(0, 0);
    return answer;
  }
  // console.log(solution(4, 16));
  // console.log(solution(5, 50));
}

// 11. 조합 구하기
{
  function solution(n, m) {
    const answer = [];
    const part = [];

    function DFS(L, s) {
      if (L === m) answer.push(part.slice());
      else {
        for (let i = s; i < n; i++) {
          part.push(i);
          DFS(L + 1, s + 1);
          part.pop();
        }
      }
    }
    DFS(0, 1);
    return answer;
  }

  // console.log(solution(4, 2));
}

// 12. 수들의 조합
{
  function solution(nums, m, k) {
    const n = nums.length;
    let answer = 0;
    function DFS(L, s, sum) {
      if (L === m) {
        if (sum % k === 0) answer += 1;
      } else {
        for (let i = s; i < n; i++) {
          DFS(L + 1, i + 1, sum + nums[i]);
        }
      }
    }
    DFS(0, 0, 0);
    return answer;
  }
  // console.log(solution([2, 4, 5, 8, 12], 3, 6)); // 2
  // console.log(solution([3, 5, 7, 8, 9, 12, 14], 4, 8)); // 5
}

// 13. 이진트리 레벨탑색
{
  function solution() {
    let answer = '';
    function BFS() {
      const queue = [1];
      while (queue.length) {
        const cur = queue.shift();
        answer += cur + ' ';
        for (const next of [cur * 2, cur * 2 + 1]) {
          if (next > 7) continue;
          queue.push(next);
        }
      }
    }
    BFS();
    return answer;
  }
  // console.log(solution());
}

// 14. 송아지 찾기
{
  function solution(s, e) {
    let answer = 0;

    function BFS() {
      let L = 0;
      const queue = [s];
      const ch = Array.from({ length: 10000 }, (_, i) => 0);
      ch[s] = 1;
      while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
          const cur = queue.shift();
          for (let next of [cur + 1, cur - 1, cur + 5]) {
            if (next === e) return L + 1;
            if (next > 0 && next <= 10000 && ch[next] === 0) {
              ch[next] = 1;
              queue.push(next);
            }
          }
        }
        L++;
      }
    }

    return BFS();
  }
  // console.log(solution(5, 14)); //3
  // console.log(solution(8, 3)); //5
}

// 15. 미로의 최단거리 통로
{
  function solution(board) {
    const n = board.length;
    const dist = Array.from({ length: n }, () => Array(n).fill(0));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    function BFS(x, y) {
      const queue = [[x, y]];
      board[x][y] = 1;
      while (queue.length) {
        const [curx, cury] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [curx + dx[i], cury + dy[i]];
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
            board[nx][ny] = 1;
            dist[nx][ny] = dist[curx][cury] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
    BFS(0, 0);
    return dist[n - 1][n - 1] ? dist[n - 1][n - 1] : -1;
  }
  // console.log(
  //   solution([
  //     [0, 0, 0, 0, 0, 0, 0],
  //     [0, 1, 1, 1, 1, 1, 0],
  //     [0, 0, 0, 1, 0, 0, 0],
  //     [1, 1, 0, 1, 0, 1, 1],
  //     [1, 1, 0, 1, 0, 0, 0],
  //     [1, 0, 0, 0, 1, 0, 0],
  //     [1, 0, 1, 0, 0, 0, 0],
  //   ])
  // ); // 12
  // console.log(
  //   solution([
  //     [0, 0, 0, 0, 0, 0, 0],
  //     [0, 1, 1, 1, 1, 1, 0],
  //     [0, 0, 0, 1, 0, 0, 0],
  //     [1, 1, 0, 1, 0, 1, 1],
  //     [1, 1, 0, 1, 0, 0, 0],
  //     [1, 0, 0, 0, 1, 0, 1],
  //     [1, 0, 1, 0, 0, 1, 0],
  //   ])
  // ); // -1
}
