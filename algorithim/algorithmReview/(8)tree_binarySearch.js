// (8) 제품 이동

// 1. 친구인가
{
  // union & Find
  function solution(n, nums, s1, s2) {
    const unf = Array.from({ length: n + 1 }, (_, i) => i);
    function find(x) {
      if (unf[x] === x) return x;
      else {
        return (unf[x] = find(unf[x]));
      }
    }
    function union(a, b) {
      let fa = find(a);
      let fb = find(b);
      if (fa !== fb) {
        unf[fa] = unf[fb];
      }
    }
    for (const [a, b] of nums) {
      union(a, b);
    }

    if (find(s1) === find(s2)) return 'YES';
    else return 'NO';
  }
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       9
  //     )
  //   ); // NO
  //   console.log(
  //     solution(
  //       9,
  //       [
  //         [1, 2],
  //         [2, 3],
  //         [3, 4],
  //         [1, 5],
  //         [6, 7],
  //         [7, 8],
  //         [8, 9],
  //       ],
  //       3,
  //       2
  //     )
  //   ); // YES
}

// 2. 원더랜드 - 도로 연결 최소 비용
{
  // union and find
  function solution(n, edges) {
    const unf = Array.from({ length: n + 1 }, (_, i) => i);
    function find(x) {
      if (x === unf[x]) return x;
      else return (unf[x] = find(unf[x]));
    }

    let answer = 0;
    edges.sort((a, b) => a[2] - b[2]);
    for (let [a, b, cost] of edges) {
      const fa = find(a);
      const fb = find(b);
      if (fa !== fb) {
        unf[fa] = unf[fb];
        answer += cost;
      }
    }
    return answer;
  }
  //   console.log(
  //     solution(9, [
  //       [1, 2, 12],
  //       [1, 9, 25],
  //       [2, 3, 10],
  //       [2, 8, 17],
  //       [2, 9, 8],
  //       [3, 4, 18],
  //       [3, 7, 55],
  //       [4, 5, 44],
  //       [5, 6, 60],
  //       [5, 7, 38],
  //       [7, 8, 35],
  //       [8, 9, 15],
  //     ])
  //   ); // 196
}

// 3. 이분 검색
{
  function solution(nums, m) {
    let lt = 0;
    let rt = nums.length;

    nums.sort((a, b) => a - b);
    while (lt <= rt) {
      const mid = parseInt((lt + rt) / 2);
      if (nums[mid] > m) rt = mid - 1;
      else if (nums[mid] < m) lt = mid + 1;
      else return mid + 1;
    }
  }
  //   console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32)); //3
}

// 4. 2차원 배열 이분 검색
{
  function solution(matrix, target) {
    let col = matrix[0].length - 1;
    let row = 0;

    while (col >= 0 && row < matrix.length) {
      if (target < matrix[row][col]) col -= 1;
      else {
        if (target === matrix[row][col]) return [row, col];
        row++;
      }
    }
  }
  //   console.log(
  //     solution(
  //       [
  //         [1, 6, 9, 12],
  //         [3, 7, 10, 14],
  //         [5, 8, 13, 17],
  //         [15, 18, 20, 23],
  //       ],
  //       8
  //     )
  //   );
}

// 5. 랜선 알고리즘
{
  function solution(nums, n) {
    let lt = 0;
    let rt = Number.MAX_SAFE_INTEGER;

    function count(mid) {
      let cnt = 0;
      for (let x of nums) {
        cnt += Math.floor(x / mid);
      }
      return cnt;
    }

    while (lt <= rt) {
      const mid = parseInt((lt + rt) / 2);
      const cnt = count(mid);
      if (cnt >= n) {
        lt = mid + 1;
        answer = mid;
      } else if (cnt < n) {
        rt = mid - 1;
      }
    }
    return answer;
  }
  //   console.log(solution([802, 743, 457, 539], 11)); // 200
}

// 6. 뮤직 비디오
{
  function solution(nums, m) {
    let lt = 0;
    let rt = Number.MAX_SAFE_INTEGER;
    let answer = 0;

    function count(mid) {
      let total = 0;
      let cnt = 1;

      for (let song of nums) {
        if (total + song > mid) {
          cnt += 1;
          total = song;
        } else {
          total += song;
        }
      }
      return cnt;
    }

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const cnt = count(mid);
      if (cnt <= m) {
        rt = mid - 1;
        answer = mid;
      } else {
        lt = mid + 1;
      }
    }
    return answer;
  }
  //   console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //17
  //   console.log(solution([1], 1));
}

// 7. 마구간 정하기
{
  function solution(stables, c) {
    stables.sort((a, b) => a - b);
    let rt = stables[stables.length - 1];
    let lt = 0;
    let answer = 0;

    function count(mid) {
      let start = stables[0];
      let cnt = 1;

      for (let i = 1; i < stables.length; i++) {
        const end = stables[i];
        if (end - start >= mid) {
          cnt++;
          start = end;
        }
      }
      return cnt;
    }

    while (lt <= rt) {
      const mid = Math.floor((rt + lt) / 2);
      const cnt = count(mid);

      if (cnt >= c) {
        lt = mid + 1;
        answer = mid;
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }
  //   console.log(solution([1, 2, 8, 4, 9], 3)); // 3
}

// 8. 제품 이동
{
  function solution(n, edges, s, e) {
    let answer = 0;
    let lt = 0;
    let rt = 0;
    const graph = Array.from(Array(n + 1), () => []);

    for (let [a, b, c] of edges) {
      graph[a].push([b, c]);
      graph[b].push([a, c]);
      rt = Math.max(rt, c);
    }

    function BFS(mid) {
      const queue = [s];
      const ch = Array.from({ length: n + 1 }, () => 0);
      ch[s] = 1;

      while (queue.length) {
        const cur = queue.shift();
        for (let [next, cost] of graph[cur]) {
          if (next === e) {
            if (cost >= mid) ch[next] = 1;
          }
          if (ch[next] === 0) {
            if (cost >= mid) {
              ch[next] = 1;
              queue.push(next);
            }
          }
        }
      }

      // 도착 했는지 안했는지
      return ch[e] !== 0;
    }

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      const possible = BFS(mid);
      if (possible) {
        lt = mid + 1;
        answer = mid;
      } else {
        rt = mid - 1;
      }
    }
    return answer;
  }

  //   console.log(
  //     solution(
  //       5,
  //       [
  //         [1, 2, 5],
  //         [1, 3, 3],
  //         [1, 4, 2],
  //         [2, 4, 2],
  //         [3, 4, 4],
  //         [4, 5, 3],
  //       ],
  //       1,
  //       5
  //     )
  //   ); // 3
}
{
  // union and find로 풀어봤음
  function solution(n, edges, s, e) {
    const unf = Array.from({ length: n + 1 }, (_, i) => i);
    function find(x) {
      if (x === unf[x]) return x;
      else return (unf[x] = find(unf[x]));
    }
    function union(a, b) {
      const fa = find(a);
      const fb = find(b);
      if (fa !== fb) unf[fa] = unf[fb];
    }

    edges.sort((a, b) => b[2] - a[2]);

    for (let [a, b, c] of edges) {
      union(a, b);
      if (find(s) === find(e)) {
        return c;
      }
    }
  }
  //   console.log(
  //     solution(
  //       5,
  //       [
  //         [1, 2, 5],
  //         [1, 3, 3],
  //         [1, 4, 2],
  //         [2, 4, 2],
  //         [3, 4, 4],
  //         [4, 5, 3],
  //       ],
  //       1,
  //       5
  //     )
  //   ); // 3
}
