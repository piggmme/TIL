// union & find
//https://github.com/kheeyaa/TIL/blob/main/algorithim/210804/README.md#1-%EC%B9%9C%EA%B5%AC%EC%9D%B8%EA%B0%80-disjoint-set-unionfind
{
  function solution(n, nums, s1, s2) {
    let answer = "YES";
    let unf = Array.from({ length: n + 1 }, (v, i) => i);

    function Find(x) {
      if (x === unf[x]) return x;
      else return (unf[x] = Find(unf[x])); // 대표 원소를 찾아서 갱신해줌
    }
    function Union(x, y) {
      let fa = Find(x);
      let fb = Find(y);

      if (fa !== fb) {
        unf[fa] = unf[fb];
      }
    }

    for (let [a, b] of nums) {
      Union(a, b);
    }

    if (Find(s1) !== Find(s2)) answer = "NO";

    return answer;
  }
  console.log(
    solution(
      9,
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 5],
        [6, 7],
        [7, 8],
        [8, 9],
      ],
      3,
      8
    )
  ); // NO
  console.log(
    solution(
      9,
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 5],
        [6, 7],
        [7, 8],
        [8, 9],
      ],
      3,
      2
    )
  ); // YES
}
{
  function solution(n, nums, s1, s2) {
    let answer = "NO";
    let graph = Array.from({ length: n + 1 }, () => Array());
    let ch = Array.from(n + 1).fill(0);
    for (let [a, b] of nums) {
      graph[a].push(a);
      graph[b].push(a);
    }

    function DFS(v) {
      if (v === s2) answer = "YES";
      if (ch[v] === 1) return;
      for (let x of graph[v]) {
        ch[v] = 1;
        DFS(x);
      }
    }
    DFS(s1);
    return answer;
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
  //       8
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

// 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162
{
  function solution(n, computers) {
    let unf = Array.from({ length: n }, (v, i) => i);

    function Find(x) {
      if (x === unf[x]) return x;
      else return (unf[x] = Find(unf[x]));
    }
    function Union(a, b) {
      let fa = Find(a);
      let fb = Find(b);

      if (fa !== fb) {
        unf[fa] = unf[fb];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (computers[i][j] === 1) {
          Union(i, j);
        }
      }
    }

    for (let i = 0; i < n; i++) {
      Find(i);
    }
    let count = new Map();
    for (let i = 0; i < n; i++) {
      count.set(unf[i], 1);
    }

    return count.size;
  }
  console.log(
    solution(3, [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ); //2
  console.log(
    solution(3, [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ])
  ); //1
}
